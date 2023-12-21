import { MarkerType } from "../graphql/generated";
import { FillStyleDefinition } from "./style";
import { TemplateDefinition } from "./templateDefinition";
import { TemplateReference } from "./templateReference";
import { TemplateType } from "./templateType";

export interface RelationTemplateDefinition extends TemplateDefinition {
    type: TemplateType.RELATION_TEMPLATE;
    markerType?: MarkerType;
    stroke?: FillStyleDefinition;
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
