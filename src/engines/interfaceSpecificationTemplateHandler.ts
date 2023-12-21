import { FullInterfaceSpecificationTemplateInfoFragment } from "../graphql/generated";
import { InterfaceSpecificationTemplateDefinition } from "../model/interfaceSpecificationTemplateDefinition";
import { RelationPartnerTemplateHandler } from "./relationPartnerTemplateHandler";

export class InterfaceSpecificationTemplateHandler extends RelationPartnerTemplateHandler<
    InterfaceSpecificationTemplateDefinition,
    FullInterfaceSpecificationTemplateInfoFragment
> {
    async createTemplate(
        definition: InterfaceSpecificationTemplateDefinition
    ): Promise<FullInterfaceSpecificationTemplateInfoFragment> {
        const defaultValue = await this.getDefault(definition);
        const context = { definition, defaultValue };
        const canBeVisibleOnComponents: string[] = [];
        const canBeInvisibleOnComponents: string[] = [];
        if (definition.canBeVisibleOnComponents != undefined) {
            canBeVisibleOnComponents.push(
                ...(await this.getTemplates(definition.canBeVisibleOnComponents)).map((template) => template.id)
            );
        }
        if (definition.canBeInvisibleOnComponents != undefined) {
            canBeInvisibleOnComponents.push(
                ...(await this.getTemplates(definition.canBeInvisibleOnComponents)).map((template) => template.id)
            );
        }

        const res = await this.engine.client.createInterfaceSpecificationTemplate({
            input: {
                ...(await this.getRelationPartnerFields(context)),
                interfaceSpecificationVersionTemplate:
                    definition.interfaceSpecificationVersionTemplate ??
                    this.extractSubTemplateInput(defaultValue?.interfaceSpecificationVersionTemplate),
                interfaceDefinitionTemplate:
                    definition.interfaceDefinitionTemplate ??
                    this.extractSubTemplateInput(defaultValue?.interfaceDefinitionTemplate),
                interfacePartTemplate:
                    definition.interfacePartTemplate ??
                    this.extractSubTemplateInput(defaultValue?.interfacePartTemplate),
                interfaceTemplate:
                    definition.interfaceTemplate ?? this.extractSubTemplateInput(defaultValue?.interfaceTemplate),
                canBeVisibleOnComponents,
                canBeInvisibleOnComponents
            }
        });
        return res.createInterfaceSpecificationTemplate!.interfaceSpecificationTemplate!;
    }
}
