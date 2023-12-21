import { FullIssueTemplateInfoFragment } from "../graphql/generated";
import { IssueTemplateDefinition } from "../model/issueTemplateDefinition";
import { TemplateHandler } from "./templateHandler";

export class IssueTemplateHanlder extends TemplateHandler<IssueTemplateDefinition, FullIssueTemplateInfoFragment> {
    async createTemplate(definition: IssueTemplateDefinition): Promise<FullIssueTemplateInfoFragment> {
        const defaultValue = await this.getDefault(definition);
        const context = { definition, defaultValue };

        const assignmentTypes = definition.assignmentTypes ?? defaultValue?.assignmentTypes?.nodes.map((node) => ({
            name: node.name,
            description: node.description
        })) ?? [];
        const issuePriorities = definition.issuePriorities ?? defaultValue?.issuePriorities?.nodes.map((node) => ({
            name: node.name,
            description: node.description,
            value: node.value
        })) ?? [];
        const issueStates = definition.issueStates ?? defaultValue?.issueStates?.nodes.map((node) => ({
            name: node.name,
            description: node.description,
            isOpen: node.isOpen
        })) ?? [];
        const issueTypes = definition.issueTypes ?? defaultValue?.issueTypes?.nodes.map((node) => ({
            name: node.name,
            description: node.description,
            iconPath: node.iconPath
        })) ?? [];
        const relationTypes = definition.relationTypes ?? defaultValue?.relationTypes?.nodes.map((node) => ({
            name: node.name,
            description: node.description
        })) ?? [];

        const res = await this.engine.client.createIssueTemplate({
            input: {
                ...await this.getBaseFields(context),
                assignmentTypes,
                issuePriorities,
                issueStates,
                issueTypes, 
                relationTypes,
            }
        });
        return res.createIssueTemplate!.issueTemplate!;
    }
}