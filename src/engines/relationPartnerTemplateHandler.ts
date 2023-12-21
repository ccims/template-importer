import { FillStyleInput, FullComponentTemplateInfoFragment, FullInterfaceSpecificationTemplateInfoFragment, ShapeType, StrokeStyleInput } from "../graphql/generated";
import { ComponentTemplateDefinition } from "../model/componentTemplateDefinition";
import { InterfaceSpecificationTemplateDefinition } from "../model/interfaceSpecificationTemplateDefinition";
import { Context, TemplateHandler, TemplateInputCommonFields } from "./templateHandler";

export abstract class RelationPartnerTemplateHandler<
    D extends (ComponentTemplateDefinition | InterfaceSpecificationTemplateDefinition),
    T extends (FullComponentTemplateInfoFragment | FullInterfaceSpecificationTemplateInfoFragment)
> extends TemplateHandler<D, T> {

    async getRelationPartnerFields(context: Context<D, T>): Promise<RelationPartnerTemplateInputCommonFields> {
        const { definition, defaultValue } = context;
        return {
            ...await this.getBaseFields(context),
            shapeType: definition.shapeType ?? defaultValue?.shapeType ?? ShapeType.Rect,
            shapeRadius: definition.shapeRadius ?? defaultValue?.shapeRadius ?? undefined,
            fill: definition.fill ?? this.mapFill(defaultValue?.fill ?? undefined),
            stroke: definition.stroke ?? this.mapStroke(defaultValue?.stroke ?? undefined)
        }
    }

}

export interface RelationPartnerTemplateInputCommonFields extends TemplateInputCommonFields {
    shapeType: ShapeType;
    shapeRadius?: number;
    fill?: FillStyleInput;
    stroke?: StrokeStyleInput
}