import { TemplateReference } from "./templateReference";
import { TemplatedFieldSpecification } from "./templatedFieldSpecification";

export interface TemplateDefinition {
    type: string;
    name?: string;
    description?: string;
    templatedFieldSpecifications?: TemplatedFieldSpecification[];
    extends?: TemplateReference[];
    default?: TemplateReference;
}