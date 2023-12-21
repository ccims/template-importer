import { MarkerType } from "../graphql/generated";
import { TemplateDefinition } from "./templateDefinition";
import { TemplateReference } from "./templateReference";
import { TemplateType } from "./templateType";

export interface RelationTemplateDefintion extends TemplateDefinition {
    type: TemplateType.RELATION_TEMPLATE;
    markerType?: MarkerType;
    relationConditions?: RelationConditionDefinition[];
}

export interface RelationConditionDefinition {
    from: TemplateReference[];
    to: TemplateReference[];
    interfaceSpecificationDerivationConditions?: InterfaceSpecificationDerivationConditionDefinition[];
}

export interface InterfaceSpecificationDerivationConditionDefinition {
    derivesInvisibleDerived?: boolean;
    derivesInvisibleSelfDefined?: boolean;
    derivesVisibleDerived?: boolean;
    derivesVisibleSelfDefined?: boolean;
    isInvisibleDerived?: boolean;
    isVisibleDerived?: boolean;
    derivableInterfaceSpecifications: TemplateReference[];
}