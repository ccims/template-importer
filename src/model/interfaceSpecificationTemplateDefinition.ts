import { BaseTemplateDefinition } from "./baseTemplateDefinition";
import { RelationPartnerTemplateDefinition } from "./relationPartnerTemplateDefinition";
import { TemplateReference } from "./templateReference";
import { TemplateType } from "./templateType";

export interface InterfaceSpecificationTemplateDefinition extends RelationPartnerTemplateDefinition {
    type: TemplateType.INTERFACE_SPECIFICATION_TEMPLATE;
    canBeVisibleOnComponents?: TemplateReference[];
    canBeInvisbleOnComponents?: TemplateReference[];
    interfaceSpecificationVersionTemplate?: BaseTemplateDefinition;
    interfaceDefinitionTemplate?: BaseTemplateDefinition;
    interfaceTemplate?: BaseTemplateDefinition;
    interfacePartTemplate?: BaseTemplateDefinition;
}