import { TemplateDefinition } from "./templateDefinition";
import { TemplateType } from "./templateType";

export interface AssignmentTemplateDefinition extends TemplateDefinition {
    type: TemplateType.ASSIGNMENT_TEMPLATE;
}
