import { ShapeType } from "../graphql/generated";
import { FillStyleDefinition } from "./style";
import { TemplateDefinition } from "./templateDefinition";

export interface RelationPartnerTemplateDefinition extends TemplateDefinition {
    fill?: FillStyleDefinition;
    stroke?: FillStyleDefinition;
    shapeRadius?: number;
    shapeType?: ShapeType;
}