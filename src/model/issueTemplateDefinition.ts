import { TemplateDefinition } from "./templateDefinition";
import { TemplateType } from "./templateType";

export interface IssueTemplateDefinition extends TemplateDefinition {
    type: TemplateType.ISSUE_TEMPLATE;
    issueTypes?: IssueTypeDefinition[];
    issueStates?: IssueStateDefinition[];
    issuePriorities?: IssuePriorityDefinition[];
    relationTypes?: RelationTypeDefinition[];
    assignmentTypes?: AssignmentTypeDefinition[];
}

export interface BaseTypeDefinition {
    name: string;
    description: string;
}

export interface IssueTypeDefinition extends BaseTypeDefinition {
    iconPath: string;
}

export interface IssueStateDefinition extends BaseTypeDefinition {
    isOpen: boolean;
}

export interface IssuePriorityDefinition extends BaseTypeDefinition {
    value: number;
}

export interface RelationTypeDefinition extends BaseTypeDefinition {}

export interface AssignmentTypeDefinition extends BaseTypeDefinition {}
