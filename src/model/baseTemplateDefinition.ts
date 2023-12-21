import { TemplatedFieldSpecification } from "./templatedFieldSpecification";

export interface BaseTemplateDefinition {
    name: string;
    description: string;
    templatedFieldSpecifications?: TemplatedFieldSpecification[];
}