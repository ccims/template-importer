import { TemplateDefinition } from "./templateDefinition";
import { TemplateType } from "./templateType";

export interface ArtefactTemplateDefinition extends TemplateDefinition {
    type: TemplateType.ARTEFACT_TEMPLATE;
}
