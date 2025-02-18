import { BaseTemplateDefinition } from "./baseTemplateDefinition";
import { BaseTypeDefinition } from "./issueTemplateDefinition";
import { RelationPartnerTemplateDefinition } from "./relationPartnerTemplateDefinition";
import { TemplateType } from "./templateType";

export interface ComponentTemplateDefinition extends RelationPartnerTemplateDefinition {
    type: TemplateType.COMPONENT_TEMPLATE;
    componentVersionTemplate: BaseTemplateDefinition;
    icdsTypes?: IntraComponentDependencySpecificationTypeDefinition[];
}

export interface IntraComponentDependencySpecificationTypeDefinition extends BaseTypeDefinition {}
