import { BaseTemplateDefinition } from "./baseTemplateDefinition";
import { RelationPartnerTemplateDefinition } from "./relationPartnerTemplateDefinition";
import { TemplateType } from "./templateType";

export interface ComponentTemplateDefinition extends RelationPartnerTemplateDefinition {
    type: TemplateType.COMPONENT_TEMPLATE;
    componentVersionTemplate: BaseTemplateDefinition
}