import { FullComponentTemplateInfoFragment } from "../graphql/generated";
import { ComponentTemplateDefinition } from "../model/componentTemplateDefinition";
import { RelationPartnerTemplateHandler } from "./relationPartnerTemplateHandler";

export class ComponentTemplateHandler extends RelationPartnerTemplateHandler<
    ComponentTemplateDefinition,
    FullComponentTemplateInfoFragment
> {
    async createTemplate(definition: ComponentTemplateDefinition): Promise<FullComponentTemplateInfoFragment> {
        const defaultValue = await this.getDefault(definition);
        const context = { definition, defaultValue };

        const icdsTypes =
            definition.icdsTypes ??
            defaultValue?.intraComponentDependencySpecificationTypes?.nodes.map((node) => ({
                name: node.name,
                description: node.description
            })) ??
            [];

        const res = await this.engine.client.createComponentTemplate({
            input: {
                ...(await this.getRelationPartnerFields(context)),
                componentVersionTemplate:
                    definition.componentVersionTemplate ??
                    this.extractSubTemplateInput(defaultValue?.componentVersionTemplate),
                intraComponentDependencySpecificationTypes: icdsTypes
            }
        });
        return res.createComponentTemplate!.componentTemplate!;
    }
}
