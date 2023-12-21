import { FullArtefactTemplateInfoFragment } from "../graphql/generated";
import { ArtefactTemplateDefinition } from "../model/artefactTemplateDefinition";
import { TemplateHandler } from "./templateHandler";

export class ArtefactTemplateHandler extends TemplateHandler<ArtefactTemplateDefinition, FullArtefactTemplateInfoFragment> {
    async createTemplate(definition: ArtefactTemplateDefinition): Promise<FullArtefactTemplateInfoFragment> {
        const defaultValue = await this.getDefault(definition);
        const context = { definition, defaultValue };

        const res = await this.engine.client.createArtefactTemplate({
            input: {
                ...await this.getBaseFields(context),
            }
        });
        return res.createArtefactTemplate!.artefactTemplate!;
    }
}