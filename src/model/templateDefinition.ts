import { TemplateReference } from "./templateReference";
import { TemplateType } from "./templateType";
import { TemplatedFieldSpecification } from "./templatedFieldSpecification";

export interface TemplateDefinition {
    type: TemplateType;
    ref?: string;
    name?: string;
    description?: string;
    templatedFieldSpecifications?: TemplatedFieldSpecification[];
    extends?: TemplateReference[];
    default?: TemplateReference;
}
