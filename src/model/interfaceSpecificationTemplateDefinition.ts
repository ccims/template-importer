import { BaseTemplateDefinition } from "./baseTemplateDefinition";
import { RelationPartnerTemplateDefinition } from "./relationPartnerTemplateDefinition";
import { TemplateReference } from "./templateReference";
import { TemplateType } from "./templateType";

export interface InterfaceSpecificationTemplateDefinition extends RelationPartnerTemplateDefinition {
    type: TemplateType.INTERFACE_SPECIFICATION_TEMPLATE;
    canBeVisibleOnComponents?: TemplateReference[];
    canBeInvisibleOnComponents?: TemplateReference[];
    interfaceSpecificationVersionTemplate?: BaseTemplateDefinition;
    interfacePartTemplate?: BaseTemplateDefinition;
}
