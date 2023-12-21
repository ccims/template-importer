import { TemplateHandler } from "./engines/templateHandler";
import { Client } from "./graphql/client";

class TemplateEngine {

    private readonly handlers: Map<string, TemplateHandler> = new Map();

    private readonly taskQueue: Map<string, 
    
    constructor(readonly client: Client) {}

}