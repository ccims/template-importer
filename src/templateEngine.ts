import { TemplateHandler } from "./engines/templateHandler";
import { Client } from "./graphql/client";
import { TemplateDefinition } from "./model/templateDefinition";
import { TemplateReference } from "./model/templateReference";
import { TemplateType } from "./model/templateType";

export class TemplateEngine {
    private readonly handlers: Map<string, TemplateHandler<any, any>> = new Map();

    private readonly refDependencyQueue: Map<string, TemplateDefinition[]> = new Map();

    private readonly definitionStack: TemplateDefinition[] = [];

    private readonly refTemplates: Map<string, any> = new Map();

    constructor(
        readonly client: Client,
        definitions: TemplateDefinition[]
    ) {
        this.definitionStack.push(...definitions);
    }

    private async process(): Promise<void> {
        while (this.definitionStack.length > 0) {
            const definition = this.definitionStack.pop()!;
            const handler = this.getHandler(definition.type);
            try {
                const result = await handler.createTemplate(definition);
                if (definition.ref != undefined) {
                    this.refTemplates.set(definition.ref, result);
                    const dependents = this.refDependencyQueue.get(definition.ref);
                    if (dependents != undefined) {
                        this.definitionStack.push(...dependents);
                    }
                }
            } catch (e) {
                if (e instanceof UnsatisfiedDependencyError) {
                    const dependency = e.dependency;
                    if (this.refDependencyQueue.has(dependency)) {
                        this.refDependencyQueue.get(dependency)!.push(definition);
                    } else {
                        this.refDependencyQueue.set(dependency, [definition]);
                    }
                } else {
                    throw e;
                }
            }
        }
        if (this.refDependencyQueue.size > 0) {
            throw new Error(`Unresolved dependencies: ${[...this.refDependencyQueue.keys()].join(", ")}`);
        }
    }

    private getHandler(type: TemplateType) {
        const handler = this.handlers.get(type);
        if (!handler) {
            throw new Error(`No handler found for template type ${type}`);
        }
        return handler;
    }

    async getTemplate(reference: TemplateReference | string): Promise<any> {
        if (typeof reference === "string" || "id" in reference) {
            let id: string;
            if (typeof reference === "string") {
                id = reference;
            } else {
                id = reference.id;
            }
            const res = await this.client.getFullTemplate({ id });
            if (res.node != null) {
                return res.node;
            } else {
                throw new Error(`Template ${id} not found`);
            }
        } else {
            const refValue = reference.ref;
            const template = this.refTemplates.get(refValue);
            if (template != undefined) {
                return template;
            } else {
                throw new UnsatisfiedDependencyError(refValue);
            }
        }
    }
}

class UnsatisfiedDependencyError extends Error {
    constructor(readonly dependency: string) {
        super(`Unsatisfied dependency: ${dependency}`);
    }
}
