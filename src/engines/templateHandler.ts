import { BaseTemplateInfoFragment, FillStyleInput, StrokeStyleInput, SubTemplateInput } from "../graphql/generated";
import { TemplateDefinition } from "../model/templateDefinition";
import { TemplateReference } from "../model/templateReference";
import { TemplatedFieldSpecification } from "../model/templatedFieldSpecification";
import { TemplateEngine } from "../templateEngine";

export abstract class TemplateHandler<
    D extends TemplateDefinition,
    T extends {
        extends: { nodes: { id: string }[] };
    } & Pick<BaseTemplateInfoFragment, "name" | "description" | "templateFieldSpecifications">
> {
    constructor(readonly engine: TemplateEngine) {}

    async getTemplate(reference: TemplateReference | string): Promise<any> {
        return this.engine.getTemplate(reference);
    }

    async getTemplates(references: (TemplateReference | string)[]): Promise<any[]> {
        const res = [];
        for (const reference of references) {
            res.push(await this.getTemplate(reference));
        }
        return res;
    }

    async getDefault(definition: D): Promise<T | undefined> {
        if (definition.default == undefined) {
            return undefined;
        }
        return this.getTemplate(definition.default);
    }

    async getExtends(context: Context<D, T>): Promise<string[]> {
        const { definition, defaultValue } = context;
        if (definition.extends != undefined) {
            return (await this.getTemplates(definition.extends)).map((template) => template.id);
        }
        if (defaultValue != undefined) {
            return defaultValue.extends.nodes.map((node) => node.id);
        }
        return [];
    }

    async getBaseFields(context: Context<D, T>): Promise<TemplateInputCommonFields> {
        const { definition, defaultValue } = context;
        const defaultTemplatedFieldSpecifications = defaultValue?.templateFieldSpecifications?.map((spec) => ({
            name: spec.name,
            value: spec.value
        }));
        return {
            name: definition.name ?? defaultValue?.name ?? "",
            description: definition.description ?? defaultValue?.description ?? "",
            extends: await this.getExtends(context),
            templateFieldSpecifications:
                definition.templatedFieldSpecifications ?? defaultTemplatedFieldSpecifications ?? []
        };
    }

    extractSubTemplateInput(template?: BaseTemplateInfoFragment): SubTemplateInput {
        if (template == undefined) {
            throw new Error("Template is undefined");
        }
        return {
            name: template.name,
            description: template.description,
            templateFieldSpecifications: template.templateFieldSpecifications.map((spec) => {
                return {
                    name: spec.name,
                    value: spec.value
                };
            })
        };
    }

    mapFill(fill: FillStyle | undefined): FillStyleInput | undefined {
        if (fill == undefined) {
            return undefined;
        } else {
            return {
                color: fill.color ?? undefined
            };
        }
    }

    mapStroke(stroke: StrokeStyle | undefined): StrokeStyleInput | undefined {
        if (stroke == undefined) {
            return undefined;
        } else {
            return {
                color: stroke.color ?? undefined,
                dash: stroke.dash ?? undefined
            };
        }
    }

    abstract createTemplate(definition: D): Promise<T>;
}

export interface Context<D, T> {
    definition: D;
    defaultValue?: T;
}

export interface TemplateInputCommonFields {
    name: string;
    description: string;
    extends: string[];
    templateFieldSpecifications: TemplatedFieldSpecification[];
}

interface FillStyle {
    id: string;
    color: string;
}

interface StrokeStyle {
    id: string;
    color?: string | null;
    dash?: number[] | null;
}
