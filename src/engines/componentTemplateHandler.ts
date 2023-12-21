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

        const res = await this.engine.client.createComponentTemplate({
            input: {
                ...(await this.getRelationPartnerFields(context)),
                componentVersionTemplate:
                    definition.componentVersionTemplate ??
                    this.extractSubTemplateInput(defaultValue?.componentVersionTemplate)
            }
        });
        return res.createComponentTemplate!.componentTemplate!;
    }
}
