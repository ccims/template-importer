import { GraphQLClient } from "graphql-request";
import { GraphQLClientRequestHeaders } from "graphql-request/build/cjs/types";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    DateTime: { input: any; output: any };
    Duration: { input: any; output: any };
    JSON: { input: any; output: any };
    URL: { input: any; output: any };
};

/** Input for the addAffectedEntityToIssue mutation */
export type AddAffectedEntityToIssueInput = {
    /** The id of the AffectedByIssue which is affected by the Issue */
    affectedEntity: Scalars["ID"]["input"];
    /** The id of the Issue which affects the entity */
    issue: Scalars["ID"]["input"];
};

/** Input for the addArtefactToIssue mutation */
export type AddArtefactToIssueInput = {
    /** The id of the Artefact to add */
    artefact: Scalars["ID"]["input"];
    /** The id of the Issue where to add the Artefact */
    issue: Scalars["ID"]["input"];
};

/** Input for the addComponentVersionToProject mutation */
export type AddComponentVersionToProjectInput = {
    /** The id of the ComponentVersion to add */
    componentVersion: Scalars["ID"]["input"];
    /** The id of the Project where to add the ComponentVersion */
    project: Scalars["ID"]["input"];
};

/** Input for the addInterfaceSpecificationVersionToComponentVersion mutation */
export type AddInterfaceSpecificationVersionToComponentVersionInput = {
    /** The id of the ComponentVersion to add the InterfaceSpecificationVersion to. */
    componentVersion: Scalars["ID"]["input"];
    /** The id of the InterfaceSpecificationVersion to add. Must be part of the same Component as `componentVersion` */
    interfaceSpecificationVersion: Scalars["ID"]["input"];
    /** If `true`, the InterfaceSpecificationVersion is added invisible */
    invisible: Scalars["Boolean"]["input"];
    /** If `true`, the InterfaceSpecificationVersion is added visible */
    visible: Scalars["Boolean"]["input"];
};

/** Input for the addIssueToPinnedIssues mutation */
export type AddIssueToPinnedIssuesInput = {
    /** The id of the Issue to pin */
    issue: Scalars["ID"]["input"];
    /** The id of the Trackable where the Issue should be pinned */
    trackable: Scalars["ID"]["input"];
};

/** Input for the addIssueToTrackable mutation */
export type AddIssueToTrackableInput = {
    /** The id of the Issue to add to the Trackable */
    issue: Scalars["ID"]["input"];
    /** The id of the Trackable where to add the Issue */
    trackable: Scalars["ID"]["input"];
};

/** Input for the addLabelToIssue mutation */
export type AddLabelToIssueInput = {
    /** The id of the Issue where to add the Label */
    issue: Scalars["ID"]["input"];
    /** The id of the Label to add */
    label: Scalars["ID"]["input"];
};

/** Input for the addLabelToTrackable mutation */
export type AddLabelToTrackableInput = {
    /** The id of the Label to add */
    label: Scalars["ID"]["input"];
    /** The id of the Trackable where to add the Label */
    trackable: Scalars["ID"]["input"];
};

/** Filter used to filter AffectedByIssue */
export type AffectedByIssueFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<AffectedByIssueFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<AffectedByIssueFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<AffectedByIssueFilterInput>>;
    /** Filters for AffectedByIssues which are related to a Trackable */
    relatedTo?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type AffectedByIssueListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<AffectedByIssueFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<AffectedByIssueFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<AffectedByIssueFilterInput>;
};

/** Defines the order of a AffectedByIssue list */
export type AffectedByIssueOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<AffectedByIssueOrderField>;
};

/** Fields a list of AffectedByIssue can be sorted by */
export enum AffectedByIssueOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter AggregatedIssue */
export type AggregatedIssueFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<AggregatedIssueFilterInput>>;
    /** Filter by count */
    count?: InputMaybe<IntFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by incomingRelations */
    incomingRelations?: InputMaybe<AggregatedIssueRelationListFilterInput>;
    /** Filter by isOpen */
    isOpen?: InputMaybe<BooleanFilterInput>;
    /** Filter by issues */
    issues?: InputMaybe<IssueListFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<AggregatedIssueFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<AggregatedIssueFilterInput>>;
    /** Filter by outgoingRelations */
    outgoingRelations?: InputMaybe<AggregatedIssueRelationListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    relationPartner?: InputMaybe<RelationPartnerFilterInput>;
    /** Filters for nodes where the related node match this filter */
    type?: InputMaybe<IssueTypeFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type AggregatedIssueListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<AggregatedIssueFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<AggregatedIssueFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<AggregatedIssueFilterInput>;
};

/** Defines the order of a AggregatedIssue list */
export type AggregatedIssueOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<AggregatedIssueOrderField>;
};

/** Fields a list of AggregatedIssue can be sorted by */
export enum AggregatedIssueOrderField {
    /** Order by count */
    Count = "COUNT",
    /** Order by id */
    Id = "ID"
}

/** Filter used to filter AggregatedIssueRelation */
export type AggregatedIssueRelationFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<AggregatedIssueRelationFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    end?: InputMaybe<AggregatedIssueFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by issueRelations */
    issueRelations?: InputMaybe<IssueRelationListFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<AggregatedIssueRelationFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<AggregatedIssueRelationFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    start?: InputMaybe<AggregatedIssueFilterInput>;
    /** Filters for nodes where the related node match this filter */
    type?: InputMaybe<IssueRelationTypeFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type AggregatedIssueRelationListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<AggregatedIssueRelationFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<AggregatedIssueRelationFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<AggregatedIssueRelationFilterInput>;
};

/** Defines the order of a AggregatedIssueRelation list */
export type AggregatedIssueRelationOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<AggregatedIssueRelationOrderField>;
};

/** Fields a list of AggregatedIssueRelation can be sorted by */
export enum AggregatedIssueRelationOrderField {
    /** Order by id */
    Id = "ID"
}

/** Non global permission entries */
export enum AllPermissionEntry {
    /**
     * Allows to add the Component to Projects
     * Note: this should be handled very carefully, as adding a Component to a Project gives
     * all users with READ access to the Project READ access to the Component
     */
    AddToProjects = "ADD_TO_PROJECTS",
    /** Grants all other permissions on the Node except READ. */
    Admin = "ADMIN",
    /**
     * Allows affecting entities part of this Trackable with any Issues.
     * Affectable entitites include
     *   - the Trackable itself
     *   - in case the Trackable is a Component
     *     - InterfaceSpecifications, their InterfaceSpecificationVersions and their InterfaceParts of the Component (not inherited ones)
     *     - Interfaces on the Component
     *     - ComponentVersions of the Component
     */
    AffectEntitiesWithIssues = "AFFECT_ENTITIES_WITH_ISSUES",
    /**
     * Allows to create Comments on Issues on this Trackable.
     * Also allows editing of your own Comments.
     */
    Comment = "COMMENT",
    /**
     * Allows to create new Issues on the Trackable.
     * This includes adding Issues from other Trackables.
     */
    CreateIssues = "CREATE_ISSUES",
    /** Allows adding Issues on this Trackable to other Trackables. */
    ExportIssues = "EXPORT_ISSUES",
    /** Allows adding Labels on this Trackable to other Trackables. */
    ExportLabels = "EXPORT_LABELS",
    /** Allows to add, remove, and update Artefacts on this Trackable. */
    ManageArtefacts = "MANAGE_ARTEFACTS",
    /** Allows to add / remove ComponentVersions to / from this Project. */
    ManageComponents = "MANAGE_COMPONENTS",
    /**
     * Allows to add, remove, and update IMSProjects on this Trackable.
     * Note: for adding, `IMSPermissionEntry.SYNC_TRACKABLES` is required additionally
     */
    ManageIms = "MANAGE_IMS",
    /**
     * Allows to manage issues.
     * This includes `CREATE_ISSUES` and `COMMENT`.
     * This does NOT include `LINK_TO_ISSUES` and `LINK_FROM_ISSUES`.
     * Additionaly includes
     *   - change the Template
     *   - add / remove Labels
     *   - add / remove Artefacts
     *   - change any field on the Issue (title, startDate, dueDate, ...)
     *   - change templated fields
     * In contrast to `MODERATOR`, this does not allow editing / removing Comments of other users
     */
    ManageIssues = "MANAGE_ISSUES",
    /**
     * Allows to add, remove, and update Labels on this Trackable.
     * Also allows to delete a Label, but only if it is allowed on all Trackable the Label is on.
     */
    ManageLabels = "MANAGE_LABELS",
    /**
     * Allows to moderate Issues on this Trackable.
     * This allows everything `MANAGE_ISSUES` allows.
     * Additionally, it allows editing and deleting Comments of other Users
     */
    Moderator = "MODERATOR",
    /**
     * Allows to read the Node (obtain it via the API) and to read certain related Nodes.
     * See documentation for specific Node for the specific conditions.
     */
    Read = "READ",
    /**
     * Allows to create Relations with a version of this Component or an Interface of this Component
     * as start.
     * Note: as these Relations cannot cause new Interfaces on this Component, this can be granted
     * more permissively compared to `RELATE_TO_COMPONENT`.
     */
    RelateFromComponent = "RELATE_FROM_COMPONENT",
    /** Allows to create IMSProjects with this IMS. */
    SyncTrackables = "SYNC_TRACKABLES"
}

/** Filter used to filter Artefact */
export type ArtefactFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ArtefactFilterInput>>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by file */
    file?: InputMaybe<StringFilterInput>;
    /** Filter by from */
    from?: InputMaybe<NullableIntFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by issues */
    issues?: InputMaybe<IssueListFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ArtefactFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ArtefactFilterInput>>;
    /** Filter by referencingComments */
    referencingComments?: InputMaybe<IssueCommentListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<ArtefactTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by to */
    to?: InputMaybe<NullableIntFilterInput>;
    /** Filters for nodes where the related node match this filter */
    trackable?: InputMaybe<TrackableFilterInput>;
    /** Filter by version */
    version?: InputMaybe<NullableStringFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ArtefactListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ArtefactFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ArtefactFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ArtefactFilterInput>;
};

/** Defines the order of a Artefact list */
export type ArtefactOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ArtefactOrderField>;
};

/** Fields a list of Artefact can be sorted by */
export enum ArtefactOrderField {
    /** Order by createdAt */
    CreatedAt = "CREATED_AT",
    /** Order by file */
    File = "FILE",
    /** Order by from */
    From = "FROM",
    /** Order by id */
    Id = "ID",
    /** Order by lastModifiedAt */
    LastModifiedAt = "LAST_MODIFIED_AT",
    /** Order by to */
    To = "TO",
    /** Order by version */
    Version = "VERSION"
}

/** Filter used to filter ArtefactTemplate */
export type ArtefactTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ArtefactTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by extendedBy */
    extendedBy?: InputMaybe<ArtefactTemplateListFilterInput>;
    /** Filter by extends */
    extends?: InputMaybe<ArtefactTemplateListFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isDeprecated */
    isDeprecated?: InputMaybe<BooleanFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ArtefactTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ArtefactTemplateFilterInput>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ArtefactTemplateListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ArtefactTemplateFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ArtefactTemplateFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ArtefactTemplateFilterInput>;
};

/** Defines the order of a ArtefactTemplate list */
export type ArtefactTemplateOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ArtefactTemplateOrderField>;
};

/** Fields a list of ArtefactTemplate can be sorted by */
export enum ArtefactTemplateOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter Assignment */
export type AssignmentFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<AssignmentFilterInput>>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    issue?: InputMaybe<IssueFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<AssignmentFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<AssignmentFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
    /** Filter for specific timeline items. Entries are joined by OR */
    timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
    /** Filters for nodes where the related node match this filter */
    type?: InputMaybe<AssignmentTypeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    user?: InputMaybe<UserFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type AssignmentListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<AssignmentFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<AssignmentFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<AssignmentFilterInput>;
};

/** Defines the order of a Assignment list */
export type AssignmentOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<AssignmentOrderField>;
};

/** Fields a list of Assignment can be sorted by */
export enum AssignmentOrderField {
    /** Order by createdAt */
    CreatedAt = "CREATED_AT",
    /** Order by id */
    Id = "ID",
    /** Order by lastModifiedAt */
    LastModifiedAt = "LAST_MODIFIED_AT"
}

/** Filter used to filter AssignmentType */
export type AssignmentTypeFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<AssignmentTypeFilterInput>>;
    /** Filter by assignmentsWithType */
    assignmentsWithType?: InputMaybe<AssignmentListFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<AssignmentTypeFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<AssignmentTypeFilterInput>>;
    /** Filter by partOf */
    partOf?: InputMaybe<IssueTemplateListFilterInput>;
};

/** Input to create an AssignmentType */
export type AssignmentTypeInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type AssignmentTypeListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<AssignmentTypeFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<AssignmentTypeFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<AssignmentTypeFilterInput>;
};

/** Defines the order of a AssignmentType list */
export type AssignmentTypeOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<AssignmentTypeOrderField>;
};

/** Fields a list of AssignmentType can be sorted by */
export enum AssignmentTypeOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter AuditedNode */
export type AuditedNodeFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<AuditedNodeFilterInput>>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<AuditedNodeFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<AuditedNodeFilterInput>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type AuditedNodeListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<AuditedNodeFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<AuditedNodeFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<AuditedNodeFilterInput>;
};

/** Defines the order of a AuditedNode list */
export type AuditedNodeOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<AuditedNodeOrderField>;
};

/** Fields a list of AuditedNode can be sorted by */
export enum AuditedNodeOrderField {
    /** Order by createdAt */
    CreatedAt = "CREATED_AT",
    /** Order by id */
    Id = "ID",
    /** Order by lastModifiedAt */
    LastModifiedAt = "LAST_MODIFIED_AT"
}

/** Filter used to filter BasePermission */
export type BasePermissionFilterInput = {
    /** Filter by allUsers */
    allUsers?: InputMaybe<BooleanFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<BasePermissionFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<BasePermissionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<BasePermissionFilterInput>>;
    /** Filter by users */
    users?: InputMaybe<GropiusUserListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type BasePermissionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<BasePermissionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<BasePermissionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<BasePermissionFilterInput>;
};

/** Defines the order of a BasePermission list */
export type BasePermissionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<BasePermissionOrderField>;
};

/** Fields a list of BasePermission can be sorted by */
export enum BasePermissionOrderField {
    /** Order by allUsers */
    AllUsers = "ALL_USERS",
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter Body */
export type BodyFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<BodyFilterInput>>;
    /** Filter by answeredBy */
    answeredBy?: InputMaybe<IssueCommentListFilterInput>;
    /** Filter by bodyLastEditedAt */
    bodyLastEditedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    bodyLastEditedBy?: InputMaybe<UserFilterInput>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    issue?: InputMaybe<IssueFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<BodyFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<BodyFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
    /** Filter for specific timeline items. Entries are joined by OR */
    timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter which can be used to filter for Nodes with a specific Boolean field */
export type BooleanFilterInput = {
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** Input for the changeAssignmentType mutation */
export type ChangeAssignmentTypeInput = {
    /** The id of the Assignment of which the type is updated */
    assignment: Scalars["ID"]["input"];
    /** The id of the new type, must be defined by the template of the Issue */
    type?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Input for the changeIssueDueDate mutation */
export type ChangeIssueDueDateInput = {
    /** The new dueDate */
    dueDate?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** The id of the Issue of which the dueDate is updated */
    issue: Scalars["ID"]["input"];
};

/** Input for the changeIssueEstimatedTime mutation */
export type ChangeIssueEstimatedTimeInput = {
    /** The new estimatedTime */
    estimatedTime?: InputMaybe<Scalars["Duration"]["input"]>;
    /** The id of the Issue of which the estimatedTime is updated */
    issue: Scalars["ID"]["input"];
};

/** Input for the changeIssuePriority mutation */
export type ChangeIssuePriorityInput = {
    /** The id of the Issue of which the priority is updated */
    issue: Scalars["ID"]["input"];
    /** The id of the new priority, must be an IssuePriority of the used IssueTemplate */
    priority?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Input for the changeIssueRelationType mutation */
export type ChangeIssueRelationTypeInput = {
    /** The id of the IssueRelation of which the type is updated */
    issueRelation: Scalars["ID"]["input"];
    /** The id of the new type, must be defined by the template of the Issue */
    type?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Input for the changeIssueSpentTime mutation */
export type ChangeIssueSpentTimeInput = {
    /** The id of the Issue of which the spentTime is updated */
    issue: Scalars["ID"]["input"];
    /** The new spentTime */
    spentTime?: InputMaybe<Scalars["Duration"]["input"]>;
};

/** Input for the changeIssueStartDate mutation */
export type ChangeIssueStartDateInput = {
    /** The id of the Issue of which the startDate is updated */
    issue: Scalars["ID"]["input"];
    /** The new startDate */
    startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** Input for the changeIssueState mutation */
export type ChangeIssueStateInput = {
    /** The id of the Issue of which the state is updated */
    issue: Scalars["ID"]["input"];
    /** The id of the new state, must be an IssueState of the used IssueTemplate */
    state: Scalars["ID"]["input"];
};

/** Input for the changeIssueTemplate mutation */
export type ChangeIssueTemplateInput = {
    /** Mapping to map existing Assignment Types to new ones */
    assignmentTypeMapping?: InputMaybe<Array<TypeMappingInput>>;
    /** The Issue to update the template of */
    issue: Scalars["ID"]["input"];
    /** Mapping to map existing IssueRelationTypes to new ones */
    issueRelationTypeMapping?: InputMaybe<Array<TypeMappingInput>>;
    /** The new priority of the Issue */
    priority?: InputMaybe<Scalars["ID"]["input"]>;
    /** The new state of the Issue, required if the old one is not compatible with the new template */
    state?: InputMaybe<Scalars["ID"]["input"]>;
    /** If provided, the id of the new template for the Issue */
    template: Scalars["ID"]["input"];
    /** Values for templatedFields to update, required to ensure compatibility with the new template */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The new type of the Issue, required if the old one is not compatible with the new template */
    type?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Input for the changeIssueTemplatedField mutations */
export type ChangeIssueTemplatedFieldInput = {
    /** The id of the Issue of which to change a templated field */
    issue: Scalars["ID"]["input"];
    /** The name of the templated field to update */
    name: Scalars["String"]["input"];
    /** The new value of the templated field */
    value?: InputMaybe<Scalars["JSON"]["input"]>;
};

/** Input for the changeIssueTitle mutation */
export type ChangeIssueTitleInput = {
    /** The id of the Issue of which the title is updated */
    issue: Scalars["ID"]["input"];
    /** The new title */
    title: Scalars["String"]["input"];
};

/** Input for the changeIssueType mutation */
export type ChangeIssueTypeInput = {
    /** The id of the Issue of which the type is updated */
    issue: Scalars["ID"]["input"];
    /** The id of the new type, must be an IssueType of the used IssueTemplate */
    type: Scalars["ID"]["input"];
};

/** Filter used to filter Comment */
export type CommentFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<CommentFilterInput>>;
    /** Filter by answeredBy */
    answeredBy?: InputMaybe<IssueCommentListFilterInput>;
    /** Filter by bodyLastEditedAt */
    bodyLastEditedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    bodyLastEditedBy?: InputMaybe<UserFilterInput>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    issue?: InputMaybe<IssueFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<CommentFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<CommentFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
    /** Filter for specific timeline items. Entries are joined by OR */
    timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Filter used to filter Component */
export type ComponentFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ComponentFilterInput>>;
    /** Filter by artefacts */
    artefacts?: InputMaybe<ArtefactListFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by interfaceSpecifications */
    interfaceSpecifications?: InputMaybe<InterfaceSpecificationListFilterInput>;
    /** Filter by issues */
    issues?: InputMaybe<IssueListFilterInput>;
    /** Filter by labels */
    labels?: InputMaybe<LabelListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ComponentFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ComponentFilterInput>>;
    /** Filter by permissions */
    permissions?: InputMaybe<ComponentPermissionListFilterInput>;
    /** Filter by pinnedIssues */
    pinnedIssues?: InputMaybe<IssueListFilterInput>;
    /** Filters for AffectedByIssues which are related to a Trackable */
    relatedTo?: InputMaybe<Scalars["ID"]["input"]>;
    /** Filter by repositoryURL */
    repositoryURL?: InputMaybe<NullableStringFilterInput>;
    /** Filter by syncsTo */
    syncsTo?: InputMaybe<ImsProjectListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<ComponentTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by versions */
    versions?: InputMaybe<ComponentVersionListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ComponentListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ComponentFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ComponentFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ComponentFilterInput>;
};

/** Defines the order of a Component list */
export type ComponentOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ComponentOrderField>;
};

/** Fields a list of Component can be sorted by */
export enum ComponentOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** ComponentPermission entry enum type. */
export enum ComponentPermissionEntry {
    /**
     * Allows to add the Component to Projects
     * Note: this should be handled very carefully, as adding a Component to a Project gives
     * all users with READ access to the Project READ access to the Component
     */
    AddToProjects = "ADD_TO_PROJECTS",
    /** Grants all other permissions on the Node except READ. */
    Admin = "ADMIN",
    /**
     * Allows affecting entities part of this Trackable with any Issues.
     * Affectable entitites include
     *   - the Trackable itself
     *   - in case the Trackable is a Component
     *     - InterfaceSpecifications, their InterfaceSpecificationVersions and their InterfaceParts of the Component (not inherited ones)
     *     - Interfaces on the Component
     *     - ComponentVersions of the Component
     */
    AffectEntitiesWithIssues = "AFFECT_ENTITIES_WITH_ISSUES",
    /**
     * Allows to create Comments on Issues on this Trackable.
     * Also allows editing of your own Comments.
     */
    Comment = "COMMENT",
    /**
     * Allows to create new Issues on the Trackable.
     * This includes adding Issues from other Trackables.
     */
    CreateIssues = "CREATE_ISSUES",
    /** Allows adding Issues on this Trackable to other Trackables. */
    ExportIssues = "EXPORT_ISSUES",
    /** Allows adding Labels on this Trackable to other Trackables. */
    ExportLabels = "EXPORT_LABELS",
    /** Allows to add, remove, and update Artefacts on this Trackable. */
    ManageArtefacts = "MANAGE_ARTEFACTS",
    /**
     * Allows to add, remove, and update IMSProjects on this Trackable.
     * Note: for adding, `IMSPermissionEntry.SYNC_TRACKABLES` is required additionally
     */
    ManageIms = "MANAGE_IMS",
    /**
     * Allows to manage issues.
     * This includes `CREATE_ISSUES` and `COMMENT`.
     * This does NOT include `LINK_TO_ISSUES` and `LINK_FROM_ISSUES`.
     * Additionaly includes
     *   - change the Template
     *   - add / remove Labels
     *   - add / remove Artefacts
     *   - change any field on the Issue (title, startDate, dueDate, ...)
     *   - change templated fields
     * In contrast to `MODERATOR`, this does not allow editing / removing Comments of other users
     */
    ManageIssues = "MANAGE_ISSUES",
    /**
     * Allows to add, remove, and update Labels on this Trackable.
     * Also allows to delete a Label, but only if it is allowed on all Trackable the Label is on.
     */
    ManageLabels = "MANAGE_LABELS",
    /**
     * Allows to moderate Issues on this Trackable.
     * This allows everything `MANAGE_ISSUES` allows.
     * Additionally, it allows editing and deleting Comments of other Users
     */
    Moderator = "MODERATOR",
    /**
     * Allows to read the Node (obtain it via the API) and to read certain related Nodes.
     * See documentation for specific Node for the specific conditions.
     */
    Read = "READ",
    /**
     * Allows to create Relations with a version of this Component or an Interface of this Component
     * as start.
     * Note: as these Relations cannot cause new Interfaces on this Component, this can be granted
     * more permissively compared to `RELATE_TO_COMPONENT`.
     */
    RelateFromComponent = "RELATE_FROM_COMPONENT"
}

/** Filter used to filter ComponentPermission */
export type ComponentPermissionFilterInput = {
    /** Filter by allUsers */
    allUsers?: InputMaybe<BooleanFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ComponentPermissionFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Filter by nodesWithPermission */
    nodesWithPermission?: InputMaybe<ComponentListFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ComponentPermissionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ComponentPermissionFilterInput>>;
    /** Filter by users */
    users?: InputMaybe<GropiusUserListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ComponentPermissionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ComponentPermissionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ComponentPermissionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ComponentPermissionFilterInput>;
};

/** Defines the order of a ComponentPermission list */
export type ComponentPermissionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ComponentPermissionOrderField>;
};

/** Fields a list of ComponentPermission can be sorted by */
export enum ComponentPermissionOrderField {
    /** Order by allUsers */
    AllUsers = "ALL_USERS",
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter ComponentTemplate */
export type ComponentTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ComponentTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by extendedBy */
    extendedBy?: InputMaybe<ComponentTemplateListFilterInput>;
    /** Filter by extends */
    extends?: InputMaybe<ComponentTemplateListFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isDeprecated */
    isDeprecated?: InputMaybe<BooleanFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ComponentTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ComponentTemplateFilterInput>>;
    /** Filter by possibleEndOfRelations */
    possibleEndOfRelations?: InputMaybe<RelationConditionListFilterInput>;
    /** Filter by possibleInvisibleInterfaceSpecifications */
    possibleInvisibleInterfaceSpecifications?: InputMaybe<InterfaceSpecificationTemplateListFilterInput>;
    /** Filter by possibleStartOfRelations */
    possibleStartOfRelations?: InputMaybe<RelationConditionListFilterInput>;
    /** Filter by possibleVisibleInterfaceSpecifications */
    possibleVisibleInterfaceSpecifications?: InputMaybe<InterfaceSpecificationTemplateListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ComponentTemplateListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ComponentTemplateFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ComponentTemplateFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ComponentTemplateFilterInput>;
};

/** Defines the order of a ComponentTemplate list */
export type ComponentTemplateOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ComponentTemplateOrderField>;
};

/** Fields a list of ComponentTemplate can be sorted by */
export enum ComponentTemplateOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter ComponentVersion */
export type ComponentVersionFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Filter by aggregatedIssues */
    aggregatedIssues?: InputMaybe<AggregatedIssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ComponentVersionFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    component?: InputMaybe<ComponentFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by includingProjects */
    includingProjects?: InputMaybe<ProjectListFilterInput>;
    /** Filter by incomingRelations */
    incomingRelations?: InputMaybe<RelationListFilterInput>;
    /** Filter by interfaceDefinitions */
    interfaceDefinitions?: InputMaybe<InterfaceDefinitionListFilterInput>;
    /** Filter by intraComponentDependencySpecifications */
    intraComponentDependencySpecifications?: InputMaybe<IntraComponentDependencySpecificationListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ComponentVersionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ComponentVersionFilterInput>>;
    /** Filter by outgoingRelations */
    outgoingRelations?: InputMaybe<RelationListFilterInput>;
    /** Filters for RelationPartners which are part of a Project's component graph */
    partOfProject?: InputMaybe<Scalars["ID"]["input"]>;
    /** Filters for AffectedByIssues which are related to a Trackable */
    relatedTo?: InputMaybe<Scalars["ID"]["input"]>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<ComponentVersionTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by version */
    version?: InputMaybe<StringFilterInput>;
};

/** Input to create a ComponentVersion */
export type ComponentVersionInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** The version of the created ComponentVersion */
    version: Scalars["String"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ComponentVersionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ComponentVersionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ComponentVersionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ComponentVersionFilterInput>;
};

/** Defines the order of a ComponentVersion list */
export type ComponentVersionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ComponentVersionOrderField>;
};

/** Fields a list of ComponentVersion can be sorted by */
export enum ComponentVersionOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME",
    /** Order by version */
    Version = "VERSION"
}

/** Filter used to filter ComponentVersionTemplate */
export type ComponentVersionTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ComponentVersionTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ComponentVersionTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ComponentVersionTemplateFilterInput>>;
};

/** Input for the createArtefact mutation */
export type CreateArtefactInput = {
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The initial file of the Artefact */
    file: Scalars["URL"]["input"];
    /** The initial value of the from field of the Artefact */
    from?: InputMaybe<Scalars["Int"]["input"]>;
    /** The template of the created Artefact */
    template: Scalars["ID"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** The initial value of the to field of the Artefact */
    to?: InputMaybe<Scalars["Int"]["input"]>;
    /** ID of the Trackable the created Artefact is part of */
    trackable: Scalars["ID"]["input"];
    /** Initial version of the Artefact */
    version?: InputMaybe<Scalars["String"]["input"]>;
};

/** Input for the createArtefactTemplate mutation */
export type CreateArtefactTemplateInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** IDs of Templates the created template extends. Must be templates of the same type. */
    extends?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /**
     * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
     *         Must be disjoint with templateFieldSpecifications of templates this template extends.
     *
     */
    templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the createAssignment mutation */
export type CreateAssignmentInput = {
    /** The optional type of the Assignment, must be defined by the Template of the Issue */
    assignmentType?: InputMaybe<Scalars["ID"]["input"]>;
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the Issue to which the User should be assigned */
    issue: Scalars["ID"]["input"];
    /** The id of the User to assign to the Issue */
    user: Scalars["ID"]["input"];
};

/** Input for the createComponent mutation */
export type CreateComponentInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** Initial InterfaceSpecifications */
    interfaceSpecifications?: InputMaybe<Array<InterfaceSpecificationInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** The repositoryURL of the named node */
    repositoryURL?: InputMaybe<Scalars["URL"]["input"]>;
    /** The template of the created Component */
    template: Scalars["ID"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** Initial versions of the Component */
    versions?: InputMaybe<Array<ComponentVersionInput>>;
};

/** Input for the createComponentPermission mutation */
export type CreateComponentPermissionInput = {
    /** If `true`, the created BasePermission affects all users */
    allUsers: Scalars["Boolean"]["input"];
    /** The description of the BasePermission */
    description: Scalars["String"]["input"];
    /** The initial entries of the created ComponentPermission */
    entries: Array<ComponentPermissionEntry>;
    /** The name of the BasePermission, must not be blank */
    name: Scalars["String"]["input"];
    /** The id of nodes the created permission affects. */
    nodesWithPermission: Array<Scalars["ID"]["input"]>;
    /** Ids of GropiusUsers this BasePermission affects */
    users: Array<Scalars["ID"]["input"]>;
};

/** Input for the createComponentTemplate mutation */
export type CreateComponentTemplateInput = {
    /** SubTemplate for all ComponentVersions of a Component with the created Template */
    componentVersionTemplate: SubTemplateInput;
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** IDs of Templates the created template extends. Must be templates of the same type. */
    extends?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** Style of the fill */
    fill?: InputMaybe<FillStyleInput>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** The corner radius of the shape, ignored for circle/ellipse */
    shapeRadius?: InputMaybe<Scalars["Float"]["input"]>;
    /** The type of the shape */
    shapeType: ShapeType;
    /** Style of the stroke */
    stroke?: InputMaybe<StrokeStyleInput>;
    /**
     * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
     *         Must be disjoint with templateFieldSpecifications of templates this template extends.
     *
     */
    templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the createComponentVersion mutation */
export type CreateComponentVersionInput = {
    /** The id of the Component the created ComponentVersion is part of */
    component: Scalars["ID"]["input"];
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** The version of the created ComponentVersion */
    version: Scalars["String"]["input"];
};

/** Input for the createGlobalPermission mutation */
export type CreateGlobalPermissionInput = {
    /** If `true`, the created BasePermission affects all users */
    allUsers: Scalars["Boolean"]["input"];
    /** The description of the BasePermission */
    description: Scalars["String"]["input"];
    /** The initial entries of the created GlobalPermission */
    entries: Array<PermissionEntry>;
    /** The name of the BasePermission, must not be blank */
    name: Scalars["String"]["input"];
    /** Ids of GropiusUsers this BasePermission affects */
    users: Array<Scalars["ID"]["input"]>;
};

/** Input for the createIMS mutation */
export type CreateImsInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** The template of the created IMS */
    template: Scalars["ID"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
};

/** Input for the createIMSPermission mutation */
export type CreateImsPermissionInput = {
    /** If `true`, the created BasePermission affects all users */
    allUsers: Scalars["Boolean"]["input"];
    /** The description of the BasePermission */
    description: Scalars["String"]["input"];
    /** The initial entries of the created IMSPermission */
    entries: Array<ImsPermissionEntry>;
    /** The name of the BasePermission, must not be blank */
    name: Scalars["String"]["input"];
    /** The id of nodes the created permission affects. */
    nodesWithPermission: Array<Scalars["ID"]["input"]>;
    /** Ids of GropiusUsers this BasePermission affects */
    users: Array<Scalars["ID"]["input"]>;
};

/** Input for the createIMSProject mutation */
export type CreateImsProjectInput = {
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the IMS the created project is part of */
    ims: Scalars["ID"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** The id of the Trackable which is synced */
    trackable: Scalars["ID"]["input"];
};

/** Input for the createInterfacePart mutation */
export type CreateInterfacePartInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the InterfaceSpecificationVersion the created InterfacePart is part of */
    interfaceSpecificationVersion: Scalars["ID"]["input"];
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
};

/** Input for the createInterfaceSpecification mutation */
export type CreateInterfaceSpecificationInput = {
    /** The id of the Component the created InterfaceSpecification is part of */
    component: Scalars["ID"]["input"];
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** The template of the created InterfaceSpecification */
    template: Scalars["ID"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** Initial versions of the InterfaceSpecification */
    versions?: InputMaybe<Array<InterfaceSpecificationVersionInput>>;
};

/** Input for the createInterfaceSpecificationTemplate mutation */
export type CreateInterfaceSpecificationTemplateInput = {
    /** The IDs of Templates of Components InterfaceSpecifications with the created template can be invisible on */
    canBeInvisibleOnComponents: Array<Scalars["ID"]["input"]>;
    /** The IDs of Templates of Components InterfaceSpecifications with the created template can be visible on */
    canBeVisibleOnComponents: Array<Scalars["ID"]["input"]>;
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** IDs of Templates the created template extends. Must be templates of the same type. */
    extends?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** Style of the fill */
    fill?: InputMaybe<FillStyleInput>;
    /** SubTemplate for all InterfacesDefinitions of a InterfaceSpecification with the created Template */
    interfaceDefinitionTemplate: NullableSubTemplateInput;
    /** SubTemplate for all InterfaceParts of a InterfaceSpecification with the created Template */
    interfacePartTemplate: SubTemplateInput;
    /** SubTemplate for all InterfaceSpecificationVersions of a InterfaceSpecification with the created Template */
    interfaceSpecificationVersionTemplate: SubTemplateInput;
    /** SubTemplate for all Interfaces of a InterfaceSpecification with the created Template */
    interfaceTemplate: NullableSubTemplateInput;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** The corner radius of the shape, ignored for circle/ellipse */
    shapeRadius?: InputMaybe<Scalars["Float"]["input"]>;
    /** The type of the shape */
    shapeType: ShapeType;
    /** Style of the stroke */
    stroke?: InputMaybe<StrokeStyleInput>;
    /**
     * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
     *         Must be disjoint with templateFieldSpecifications of templates this template extends.
     *
     */
    templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the createInterfaceSpecificationVersion mutation */
export type CreateInterfaceSpecificationVersionInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the InterfaceSpecification the created InterfaceSpecificationVersion is part of */
    interfaceSpecification: Scalars["ID"]["input"];
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Initial InterfaceParts */
    parts?: InputMaybe<Array<InterfacePartInput>>;
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** The version of the created InterfaceSpecificationVersion */
    version: Scalars["String"]["input"];
};

/** Input for the createIntraComponentDependencySpecification mutation */
export type CreateIntraComponentDependencySpecificationInput = {
    /** The id of the ComponentVersion the created IntraComponentDependencySpecification is part of */
    componentVersion: Scalars["ID"]["input"];
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** Initial incomingParticipants, must not be empty */
    incomingParticipants: Array<IntraComponentDependencyParticipantInput>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Initial outgoingParticipants, must not be empty */
    outgoingParticipants: Array<IntraComponentDependencyParticipantInput>;
};

/** Input for the createIssueComment mutation */
export type CreateIssueCommentInput = {
    /** The id of the Comment the created IssueComment answers */
    answers?: InputMaybe<Scalars["ID"]["input"]>;
    /** Initial body of the IssueComment */
    body: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the Issue the IssueComment is created on */
    issue: Scalars["ID"]["input"];
    /** Ids of initially referenced artefacts */
    referencedArtefacts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

/** Input for the createIssue mutation */
export type CreateIssueInput = {
    /** The body of the created Issue */
    body: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the state of the created Issue, must be compatible with template  */
    state: Scalars["ID"]["input"];
    /** The template of the created Issue */
    template: Scalars["ID"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** The title of the created Issue */
    title: Scalars["String"]["input"];
    /** Ids of Trackables the Issue is initially on, must not be empty */
    trackables: Array<Scalars["ID"]["input"]>;
    /** The id of the type of the created Issue, must be compatible with template */
    type: Scalars["ID"]["input"];
};

/** Input for the createIssueRelation mutation */
export type CreateIssueRelationInput = {
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the Issue from which the IssueRelation starts */
    issue: Scalars["ID"]["input"];
    /** The optional type of the IssueRelation, must be defined by the Template of the Issue */
    issueRelationType?: InputMaybe<Scalars["ID"]["input"]>;
    /** The id of the Issue where the IssueRelation ends */
    relatedIssue: Scalars["ID"]["input"];
};

/** Input for the createIssueTemplate mutation. */
export type CreateIssueTemplateInput = {
    /** Set of all types Assignments to Issues with the created can have. */
    assignmentTypes: Array<AssignmentTypeInput>;
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** IDs of Templates the created template extends. Must be templates of the same type. */
    extends?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** Set of all priorities Issues with the created can have. */
    issuePriorities: Array<IssuePriorityInput>;
    /** Set of all states Issues with the created Template can have */
    issueStates: Array<IssueStateInput>;
    /** Set of all types Issues with the created Template can have. */
    issueTypes: Array<IssueTypeInput>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Set of all types outgoing IssueRelations of Issues with the created can have */
    relationTypes: Array<IssueRelationTypeInput>;
    /**
     * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
     *         Must be disjoint with templateFieldSpecifications of templates this template extends.
     *
     */
    templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the createLabel mutation */
export type CreateLabelInput = {
    /** Initial color of the Label */
    color: Scalars["String"]["input"];
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** IDs of Trackables the Label is added to, at least one required. */
    trackables: Array<Scalars["ID"]["input"]>;
};

/** Input for the createProject mutation */
export type CreateProjectInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** The repositoryURL of the named node */
    repositoryURL?: InputMaybe<Scalars["URL"]["input"]>;
};

/** Input for the createProjectPermission mutation */
export type CreateProjectPermissionInput = {
    /** If `true`, the created BasePermission affects all users */
    allUsers: Scalars["Boolean"]["input"];
    /** The description of the BasePermission */
    description: Scalars["String"]["input"];
    /** The initial entries of the created ProjectPermission */
    entries: Array<ProjectPermissionEntry>;
    /** The name of the BasePermission, must not be blank */
    name: Scalars["String"]["input"];
    /** The id of nodes the created permission affects. */
    nodesWithPermission: Array<Scalars["ID"]["input"]>;
    /** Ids of GropiusUsers this BasePermission affects */
    users: Array<Scalars["ID"]["input"]>;
};

/** Input for the createRelation mutation */
export type CreateRelationInput = {
    /** The end RelationPartner of the Relation */
    end: Scalars["ID"]["input"];
    /** If `end` is an Interface, the parts of the Interface the created Relation includes */
    endParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The start RelationPartner of the Relation */
    start: Scalars["ID"]["input"];
    /** If `start` is an Interface, the parts of the Interface the created Relation includes */
    startParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The template of the created Relation */
    template: Scalars["ID"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
};

/** Input for the createRelationTemplate mutation */
export type CreateRelationTemplateInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** IDs of Templates the created template extends. Must be templates of the same type. */
    extends?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The type of the marker at the end of the relation. */
    markerType: MarkerType;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Defines which Relations can use the created Template, at least one RelationCondition has to match (logical OR) */
    relationConditions: Array<RelationConditionInput>;
    /** Style of the stroke */
    stroke?: InputMaybe<StrokeStyleInput>;
    /**
     * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
     *         Must be disjoint with templateFieldSpecifications of templates this template extends.
     *
     */
    templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

/** Filter which can be used to filter for Nodes with a specific DateTime field */
export type DateTimeFilterInput = {
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** Matches values which are greater than the provided value */
    gt?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** Matches values which are greater than or equal to the provided value */
    gte?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
    /** Matches values which are lesser than the provided value */
    lt?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** Matches values which are lesser than or equal to the provided value */
    lte?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** Input for all delete mutations. Deletes the node with the specified id */
export type DeleteNodeInput = {
    /** The id of the Node to delete */
    id: Scalars["ID"]["input"];
};

/** Input to create a FillStyle */
export type FillStyleInput = {
    /** The color of the fill */
    color: Scalars["String"]["input"];
};

/** Filter which can be used to filter for Nodes with a specific Float field */
export type FloatFilterInput = {
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["Float"]["input"]>;
    /** Matches values which are greater than the provided value */
    gt?: InputMaybe<Scalars["Float"]["input"]>;
    /** Matches values which are greater than or equal to the provided value */
    gte?: InputMaybe<Scalars["Float"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    /** Matches values which are lesser than the provided value */
    lt?: InputMaybe<Scalars["Float"]["input"]>;
    /** Matches values which are lesser than or equal to the provided value */
    lte?: InputMaybe<Scalars["Float"]["input"]>;
};

/** Filter used to filter GlobalPermission */
export type GlobalPermissionFilterInput = {
    /** Filter by allUsers */
    allUsers?: InputMaybe<BooleanFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<GlobalPermissionFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<GlobalPermissionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<GlobalPermissionFilterInput>>;
    /** Filter by users */
    users?: InputMaybe<GropiusUserListFilterInput>;
};

/** Filter used to filter GropiusUser */
export type GropiusUserFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<GropiusUserFilterInput>>;
    /** Filter by assignments */
    assignments?: InputMaybe<AssignmentListFilterInput>;
    /** Filter by createdNodes */
    createdNodes?: InputMaybe<AuditedNodeListFilterInput>;
    /** Filter by displayName */
    displayName?: InputMaybe<StringFilterInput>;
    /** Filter by email */
    email?: InputMaybe<NullableStringFilterInput>;
    /** Filter for users with a specific permission on a node */
    hasNodePermission?: InputMaybe<NodePermissionFilterEntry>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by imsUsers */
    imsUsers?: InputMaybe<ImsUserListFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<GropiusUserFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<GropiusUserFilterInput>>;
    /** Filter by participatedIssues */
    participatedIssues?: InputMaybe<IssueListFilterInput>;
    /** Filter by permissions */
    permissions?: InputMaybe<BasePermissionListFilterInput>;
    /** Filter by username */
    username?: InputMaybe<NullableStringFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type GropiusUserListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<GropiusUserFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<GropiusUserFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<GropiusUserFilterInput>;
};

/** Defines the order of a GropiusUser list */
export type GropiusUserOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<GropiusUserOrderField>;
};

/** Fields a list of GropiusUser can be sorted by */
export enum GropiusUserOrderField {
    /** Order by displayName */
    DisplayName = "DISPLAY_NAME",
    /** Order by email */
    Email = "EMAIL",
    /** Order by id */
    Id = "ID",
    /** Order by username */
    Username = "USERNAME"
}

/** Filter which can be used to filter for Nodes with a specific ID field */
export type IdFilterInput = {
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["ID"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

/** Filter used to filter IMS */
export type ImsFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsFilterInput>>;
    /** Filter by permissions */
    permissions?: InputMaybe<ImsPermissionListFilterInput>;
    /** Filter by projects */
    projects?: InputMaybe<ImsProjectListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<ImsTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by users */
    users?: InputMaybe<ImsUserListFilterInput>;
};

/** Filter used to filter IMSIssue */
export type ImsIssueFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsIssueFilterInput>>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    imsProject?: InputMaybe<ImsProjectFilterInput>;
    /** Filters for nodes where the related node match this filter */
    issue?: InputMaybe<IssueFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsIssueFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsIssueFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<ImsIssueTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsIssueListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ImsIssueFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ImsIssueFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ImsIssueFilterInput>;
};

/** Defines the order of a IMSIssue list */
export type ImsIssueOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ImsIssueOrderField>;
};

/** Fields a list of IMSIssue can be sorted by */
export enum ImsIssueOrderField {
    /** Order by id */
    Id = "ID"
}

/** Filter used to filter IMSIssueTemplate */
export type ImsIssueTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsIssueTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsIssueTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsIssueTemplateFilterInput>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ImsFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ImsFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ImsFilterInput>;
};

/** Defines the order of a IMS list */
export type ImsOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ImsOrderField>;
};

/** Fields a list of IMS can be sorted by */
export enum ImsOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** IMSPermission entry enum type. */
export enum ImsPermissionEntry {
    /** Grants all other permissions on the Node except READ. */
    Admin = "ADMIN",
    /**
     * Allows to read the Node (obtain it via the API) and to read certain related Nodes.
     * See documentation for specific Node for the specific conditions.
     */
    Read = "READ",
    /** Allows to create IMSProjects with this IMS. */
    SyncTrackables = "SYNC_TRACKABLES"
}

/** Filter used to filter IMSPermission */
export type ImsPermissionFilterInput = {
    /** Filter by allUsers */
    allUsers?: InputMaybe<BooleanFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsPermissionFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Filter by nodesWithPermission */
    nodesWithPermission?: InputMaybe<ImsListFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsPermissionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsPermissionFilterInput>>;
    /** Filter by users */
    users?: InputMaybe<GropiusUserListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsPermissionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ImsPermissionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ImsPermissionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ImsPermissionFilterInput>;
};

/** Defines the order of a IMSPermission list */
export type ImsPermissionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ImsPermissionOrderField>;
};

/** Fields a list of IMSPermission can be sorted by */
export enum ImsPermissionOrderField {
    /** Order by allUsers */
    AllUsers = "ALL_USERS",
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter IMSProject */
export type ImsProjectFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsProjectFilterInput>>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    ims?: InputMaybe<ImsFilterInput>;
    /** Filter by imsIssues */
    imsIssues?: InputMaybe<ImsIssueListFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsProjectFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsProjectFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<ImsProjectTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filters for nodes where the related node match this filter */
    trackable?: InputMaybe<TrackableFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsProjectListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ImsProjectFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ImsProjectFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ImsProjectFilterInput>;
};

/** Defines the order of a IMSProject list */
export type ImsProjectOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ImsProjectOrderField>;
};

/** Fields a list of IMSProject can be sorted by */
export enum ImsProjectOrderField {
    /** Order by id */
    Id = "ID"
}

/** Filter used to filter IMSProjectTemplate */
export type ImsProjectTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsProjectTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsProjectTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsProjectTemplateFilterInput>>;
};

/** Filter used to filter IMSTemplate */
export type ImsTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by extendedBy */
    extendedBy?: InputMaybe<ImsTemplateListFilterInput>;
    /** Filter by extends */
    extends?: InputMaybe<ImsTemplateListFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isDeprecated */
    isDeprecated?: InputMaybe<BooleanFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsTemplateFilterInput>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsTemplateListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ImsTemplateFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ImsTemplateFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ImsTemplateFilterInput>;
};

/** Defines the order of a IMSTemplate list */
export type ImsTemplateOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ImsTemplateOrderField>;
};

/** Fields a list of IMSTemplate can be sorted by */
export enum ImsTemplateOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter IMSUser */
export type ImsUserFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsUserFilterInput>>;
    /** Filter by assignments */
    assignments?: InputMaybe<AssignmentListFilterInput>;
    /** Filter by createdNodes */
    createdNodes?: InputMaybe<AuditedNodeListFilterInput>;
    /** Filter by displayName */
    displayName?: InputMaybe<StringFilterInput>;
    /** Filter by email */
    email?: InputMaybe<NullableStringFilterInput>;
    /** Filters for nodes where the related node match this filter */
    gropiusUser?: InputMaybe<GropiusUserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    ims?: InputMaybe<ImsFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsUserFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsUserFilterInput>>;
    /** Filter by participatedIssues */
    participatedIssues?: InputMaybe<IssueListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<ImsUserTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by username */
    username?: InputMaybe<NullableStringFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ImsUserListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ImsUserFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ImsUserFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ImsUserFilterInput>;
};

/** Defines the order of a IMSUser list */
export type ImsUserOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ImsUserOrderField>;
};

/** Fields a list of IMSUser can be sorted by */
export enum ImsUserOrderField {
    /** Order by displayName */
    DisplayName = "DISPLAY_NAME",
    /** Order by email */
    Email = "EMAIL",
    /** Order by id */
    Id = "ID",
    /** Order by username */
    Username = "USERNAME"
}

/** Filter used to filter IMSUserTemplate */
export type ImsUserTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ImsUserTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ImsUserTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ImsUserTemplateFilterInput>>;
};

/** Filter which can be used to filter for Nodes with a specific Int field */
export type IntFilterInput = {
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["Int"]["input"]>;
    /** Matches values which are greater than the provided value */
    gt?: InputMaybe<Scalars["Int"]["input"]>;
    /** Matches values which are greater than or equal to the provided value */
    gte?: InputMaybe<Scalars["Int"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
    /** Matches values which are lesser than the provided value */
    lt?: InputMaybe<Scalars["Int"]["input"]>;
    /** Matches values which are lesser than or equal to the provided value */
    lte?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Filter used to filter InterfaceDefinition */
export type InterfaceDefinitionFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceDefinitionFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    componentVersion?: InputMaybe<ComponentVersionFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    interfaceSpecificationVersion?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
    /** Filter by invisibleDerivedBy */
    invisibleDerivedBy?: InputMaybe<RelationListFilterInput>;
    /** Filter by invisibleSelfDefined */
    invisibleSelfDefined?: InputMaybe<BooleanFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceDefinitionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceDefinitionFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<InterfaceDefinitionTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by visibleDerivedBy */
    visibleDerivedBy?: InputMaybe<RelationListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    visibleInterface?: InputMaybe<InterfaceFilterInput>;
    /** Filter by visibleSelfDefined */
    visibleSelfDefined?: InputMaybe<BooleanFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfaceDefinitionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<InterfaceDefinitionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<InterfaceDefinitionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<InterfaceDefinitionFilterInput>;
};

/** Defines the order of a InterfaceDefinition list */
export type InterfaceDefinitionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<InterfaceDefinitionOrderField>;
};

/** Fields a list of InterfaceDefinition can be sorted by */
export enum InterfaceDefinitionOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by invisibleSelfDefined */
    InvisibleSelfDefined = "INVISIBLE_SELF_DEFINED",
    /** Order by visibleSelfDefined */
    VisibleSelfDefined = "VISIBLE_SELF_DEFINED"
}

/** Filter used to filter InterfaceDefinitionTemplate */
export type InterfaceDefinitionTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceDefinitionTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceDefinitionTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceDefinitionTemplateFilterInput>>;
};

/** Filter used to filter Interface */
export type InterfaceFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Filter by aggregatedIssues */
    aggregatedIssues?: InputMaybe<AggregatedIssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by incomingRelations */
    incomingRelations?: InputMaybe<RelationListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    interfaceDefinition?: InputMaybe<InterfaceDefinitionFilterInput>;
    /** Filter by intraComponentDependencyParticipants */
    intraComponentDependencyParticipants?: InputMaybe<IntraComponentDependencyParticipantListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceFilterInput>>;
    /** Filter by outgoingRelations */
    outgoingRelations?: InputMaybe<RelationListFilterInput>;
    /** Filters for RelationPartners which are part of a Project's component graph */
    partOfProject?: InputMaybe<Scalars["ID"]["input"]>;
    /** Filters for AffectedByIssues which are related to a Trackable */
    relatedTo?: InputMaybe<Scalars["ID"]["input"]>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<InterfaceTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
};

/** Defines the order of a Interface list */
export type InterfaceOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<InterfaceOrderField>;
};

/** Fields a list of Interface can be sorted by */
export enum InterfaceOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter InterfacePart */
export type InterfacePartFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfacePartFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by includingIncomingRelations */
    includingIncomingRelations?: InputMaybe<RelationListFilterInput>;
    /** Filter by includingIntraComponentDependencyParticipants */
    includingIntraComponentDependencyParticipants?: InputMaybe<IntraComponentDependencyParticipantListFilterInput>;
    /** Filter by includingOutgoingRelations */
    includingOutgoingRelations?: InputMaybe<RelationListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfacePartFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfacePartFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    partOf?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
    /** Filters for AffectedByIssues which are related to a Trackable */
    relatedTo?: InputMaybe<Scalars["ID"]["input"]>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<InterfacePartTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
};

/** Input to create an InterfacePart */
export type InterfacePartInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfacePartListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<InterfacePartFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<InterfacePartFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<InterfacePartFilterInput>;
};

/** Defines the order of a InterfacePart list */
export type InterfacePartOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<InterfacePartOrderField>;
};

/** Fields a list of InterfacePart can be sorted by */
export enum InterfacePartOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter InterfacePartTemplate */
export type InterfacePartTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfacePartTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfacePartTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfacePartTemplateFilterInput>>;
};

/** Filter used to filter InterfaceSpecificationDerivationCondition */
export type InterfaceSpecificationDerivationConditionFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceSpecificationDerivationConditionFilterInput>>;
    /** Filter by derivableInterfaceSpecifications */
    derivableInterfaceSpecifications?: InputMaybe<InterfaceSpecificationTemplateListFilterInput>;
    /** Filter by derivesInvisibleDerived */
    derivesInvisibleDerived?: InputMaybe<BooleanFilterInput>;
    /** Filter by derivesInvisibleSelfDefined */
    derivesInvisibleSelfDefined?: InputMaybe<BooleanFilterInput>;
    /** Filter by derivesVisibleDerived */
    derivesVisibleDerived?: InputMaybe<BooleanFilterInput>;
    /** Filter by derivesVisibleSelfDefined */
    derivesVisibleSelfDefined?: InputMaybe<BooleanFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isInvisibleDerived */
    isInvisibleDerived?: InputMaybe<BooleanFilterInput>;
    /** Filter by isVisibleDerived */
    isVisibleDerived?: InputMaybe<BooleanFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceSpecificationDerivationConditionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceSpecificationDerivationConditionFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    partOf?: InputMaybe<RelationConditionFilterInput>;
};

/** Input to create a InterfaceSpecificationDerivationCondition */
export type InterfaceSpecificationDerivationConditionInput = {
    /** The ids of the InterfaceSpecifications this can derive */
    derivableInterfaceSpecifications: Array<Scalars["ID"]["input"]>;
    /** If true, invisible derived InterfaceSpecifications are derived */
    derivesInvisibleDerived: Scalars["Boolean"]["input"];
    /** If true, invisible self-defined InterfaceSpecifications are derived */
    derivesInvisibleSelfDefined: Scalars["Boolean"]["input"];
    /** If true, visible derived InterfaceSpecifications are derived */
    derivesVisibleDerived: Scalars["Boolean"]["input"];
    /** If true, visible self-defined InterfaceSpecifications are derived */
    derivesVisibleSelfDefined: Scalars["Boolean"]["input"];
    /** If true InterfaceSpecifications are invisible derived */
    isInvisibleDerived: Scalars["Boolean"]["input"];
    /** If true InterfaceSpecifications are visible derived */
    isVisibleDerived: Scalars["Boolean"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfaceSpecificationDerivationConditionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<InterfaceSpecificationDerivationConditionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<InterfaceSpecificationDerivationConditionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<InterfaceSpecificationDerivationConditionFilterInput>;
};

/** Defines the order of a InterfaceSpecificationDerivationCondition list */
export type InterfaceSpecificationDerivationConditionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<InterfaceSpecificationDerivationConditionOrderField>;
};

/** Fields a list of InterfaceSpecificationDerivationCondition can be sorted by */
export enum InterfaceSpecificationDerivationConditionOrderField {
    /** Order by id */
    Id = "ID"
}

/** Filter used to filter InterfaceSpecification */
export type InterfaceSpecificationFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceSpecificationFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    component?: InputMaybe<ComponentFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceSpecificationFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceSpecificationFilterInput>>;
    /** Filters for AffectedByIssues which are related to a Trackable */
    relatedTo?: InputMaybe<Scalars["ID"]["input"]>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by versions */
    versions?: InputMaybe<InterfaceSpecificationVersionListFilterInput>;
};

/** Input to create an InterfaceSpecification */
export type InterfaceSpecificationInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** The template of the created InterfaceSpecification */
    template: Scalars["ID"]["input"];
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** Initial versions of the InterfaceSpecification */
    versions?: InputMaybe<Array<InterfaceSpecificationVersionInput>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfaceSpecificationListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<InterfaceSpecificationFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<InterfaceSpecificationFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<InterfaceSpecificationFilterInput>;
};

/** Defines the order of a InterfaceSpecification list */
export type InterfaceSpecificationOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<InterfaceSpecificationOrderField>;
};

/** Fields a list of InterfaceSpecification can be sorted by */
export enum InterfaceSpecificationOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter InterfaceSpecificationTemplate */
export type InterfaceSpecificationTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceSpecificationTemplateFilterInput>>;
    /** Filter by canBeInvisibleOnComponents */
    canBeInvisibleOnComponents?: InputMaybe<ComponentTemplateListFilterInput>;
    /** Filter by canBeVisibleOnComponents */
    canBeVisibleOnComponents?: InputMaybe<ComponentTemplateListFilterInput>;
    /** Filter by derivableBy */
    derivableBy?: InputMaybe<InterfaceSpecificationDerivationConditionListFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by extendedBy */
    extendedBy?: InputMaybe<InterfaceSpecificationTemplateListFilterInput>;
    /** Filter by extends */
    extends?: InputMaybe<InterfaceSpecificationTemplateListFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isDeprecated */
    isDeprecated?: InputMaybe<BooleanFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceSpecificationTemplateFilterInput>>;
    /** Filter by possibleEndOfRelations */
    possibleEndOfRelations?: InputMaybe<RelationConditionListFilterInput>;
    /** Filter by possibleStartOfRelations */
    possibleStartOfRelations?: InputMaybe<RelationConditionListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfaceSpecificationTemplateListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<InterfaceSpecificationTemplateFilterInput>;
};

/** Defines the order of a InterfaceSpecificationTemplate list */
export type InterfaceSpecificationTemplateOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<InterfaceSpecificationTemplateOrderField>;
};

/** Fields a list of InterfaceSpecificationTemplate can be sorted by */
export enum InterfaceSpecificationTemplateOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter InterfaceSpecificationVersion */
export type InterfaceSpecificationVersionFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceSpecificationVersionFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by interfaceDefinitions */
    interfaceDefinitions?: InputMaybe<InterfaceDefinitionListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    interfaceSpecification?: InputMaybe<InterfaceSpecificationFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceSpecificationVersionFilterInput>>;
    /** Filter by parts */
    parts?: InputMaybe<InterfacePartListFilterInput>;
    /** Filters for AffectedByIssues which are related to a Trackable */
    relatedTo?: InputMaybe<Scalars["ID"]["input"]>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<InterfaceSpecificationVersionTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by version */
    version?: InputMaybe<StringFilterInput>;
};

/** Input to create an InterfaceSpecificationVersion */
export type InterfaceSpecificationVersionInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** Initial InterfaceParts */
    parts?: InputMaybe<Array<InterfacePartInput>>;
    /** Initial values for all templatedFields */
    templatedFields: Array<JsonFieldInput>;
    /** The version of the created InterfaceSpecificationVersion */
    version: Scalars["String"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type InterfaceSpecificationVersionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<InterfaceSpecificationVersionFilterInput>;
};

/** Defines the order of a InterfaceSpecificationVersion list */
export type InterfaceSpecificationVersionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<InterfaceSpecificationVersionOrderField>;
};

/** Fields a list of InterfaceSpecificationVersion can be sorted by */
export enum InterfaceSpecificationVersionOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME",
    /** Order by version */
    Version = "VERSION"
}

/** Filter used to filter InterfaceSpecificationVersionTemplate */
export type InterfaceSpecificationVersionTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceSpecificationVersionTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceSpecificationVersionTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceSpecificationVersionTemplateFilterInput>>;
};

/** Filter used to filter InterfaceTemplate */
export type InterfaceTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<InterfaceTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<InterfaceTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<InterfaceTemplateFilterInput>>;
};

/** Filter used to filter IntraComponentDependencyParticipant */
export type IntraComponentDependencyParticipantFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IntraComponentDependencyParticipantFilterInput>>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by includedParts */
    includedParts?: InputMaybe<InterfacePartListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    interface?: InputMaybe<InterfaceFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IntraComponentDependencyParticipantFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IntraComponentDependencyParticipantFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    usedAsIncomingAt?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
    /** Filters for nodes where the related node match this filter */
    usedAsOutgoingAt?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
};

/** Input to create a IntraComponentDependencyParticipant */
export type IntraComponentDependencyParticipantInput = {
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The ids of includedParts, must all be activeParts on the InterfaceSpecificationVersion associated with `interface` */
    includedParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /**
     * The id of the Interface, must be an Interface on the ComponentVersion the
     *         IntraComponentDependencySpecification this is part of refers to
     *
     */
    interface: Scalars["ID"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IntraComponentDependencyParticipantListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IntraComponentDependencyParticipantFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IntraComponentDependencyParticipantFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IntraComponentDependencyParticipantFilterInput>;
};

/** Defines the order of a IntraComponentDependencyParticipant list */
export type IntraComponentDependencyParticipantOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IntraComponentDependencyParticipantOrderField>;
};

/** Fields a list of IntraComponentDependencyParticipant can be sorted by */
export enum IntraComponentDependencyParticipantOrderField {
    /** Order by id */
    Id = "ID"
}

/** Filter used to filter IntraComponentDependencySpecification */
export type IntraComponentDependencySpecificationFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IntraComponentDependencySpecificationFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    componentVersion?: InputMaybe<ComponentVersionFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by incomingParticipants */
    incomingParticipants?: InputMaybe<IntraComponentDependencyParticipantListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IntraComponentDependencySpecificationFilterInput>>;
    /** Filter by outgoingParticipants */
    outgoingParticipants?: InputMaybe<IntraComponentDependencyParticipantListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IntraComponentDependencySpecificationListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IntraComponentDependencySpecificationFilterInput>;
};

/** Defines the order of a IntraComponentDependencySpecification list */
export type IntraComponentDependencySpecificationOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IntraComponentDependencySpecificationOrderField>;
};

/** Fields a list of IntraComponentDependencySpecification can be sorted by */
export enum IntraComponentDependencySpecificationOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter IssueComment */
export type IssueCommentFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IssueCommentFilterInput>>;
    /** Filter by answeredBy */
    answeredBy?: InputMaybe<IssueCommentListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    answers?: InputMaybe<CommentFilterInput>;
    /** Filter by bodyLastEditedAt */
    bodyLastEditedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    bodyLastEditedBy?: InputMaybe<UserFilterInput>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isCommentDeleted */
    isCommentDeleted?: InputMaybe<BooleanFilterInput>;
    /** Filters for nodes where the related node match this filter */
    issue?: InputMaybe<IssueFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IssueCommentFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IssueCommentFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
    /** Filter by referencedArtefacts */
    referencedArtefacts?: InputMaybe<ArtefactListFilterInput>;
    /** Filter for specific timeline items. Entries are joined by OR */
    timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueCommentListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IssueCommentFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IssueCommentFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IssueCommentFilterInput>;
};

/** Defines the order of a IssueComment list */
export type IssueCommentOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IssueCommentOrderField>;
};

/** Fields a list of IssueComment can be sorted by */
export enum IssueCommentOrderField {
    /** Order by bodyLastEditedAt */
    BodyLastEditedAt = "BODY_LAST_EDITED_AT",
    /** Order by createdAt */
    CreatedAt = "CREATED_AT",
    /** Order by id */
    Id = "ID",
    /** Order by lastModifiedAt */
    LastModifiedAt = "LAST_MODIFIED_AT"
}

/** Filter used to filter Issue */
export type IssueFilterInput = {
    /** Filter by affects */
    affects?: InputMaybe<AffectedByIssueListFilterInput>;
    /** Filter by aggregatedBy */
    aggregatedBy?: InputMaybe<AggregatedIssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IssueFilterInput>>;
    /** Filter by artefacts */
    artefacts?: InputMaybe<ArtefactListFilterInput>;
    /** Filter by assignments */
    assignments?: InputMaybe<AssignmentListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    body?: InputMaybe<BodyFilterInput>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by dueDate */
    dueDate?: InputMaybe<NullableDateTimeFilterInput>;
    /** Filter by estimatedTime */
    estimatedTime?: InputMaybe<NullableDurationFilterInputFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by imsIssues */
    imsIssues?: InputMaybe<ImsIssueListFilterInput>;
    /** Filter by incomingRelations */
    incomingRelations?: InputMaybe<IssueRelationListFilterInput>;
    /** Filter by issueComments */
    issueComments?: InputMaybe<IssueCommentListFilterInput>;
    /** Filter by labels */
    labels?: InputMaybe<LabelListFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Filter by lastUpdatedAt */
    lastUpdatedAt?: InputMaybe<DateTimeFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IssueFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IssueFilterInput>>;
    /** Filter by outgoingRelations */
    outgoingRelations?: InputMaybe<IssueRelationListFilterInput>;
    /** Filter by participants */
    participants?: InputMaybe<UserListFilterInput>;
    /** Filter by pinnedOn */
    pinnedOn?: InputMaybe<TrackableListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    priority?: InputMaybe<IssuePriorityFilterInput>;
    /** Filter by spentTime */
    spentTime?: InputMaybe<NullableDurationFilterInputFilterInput>;
    /** Filter by startDate */
    startDate?: InputMaybe<NullableDateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    state?: InputMaybe<IssueStateFilterInput>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<IssueTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
    /** Filter by timelineItems */
    timelineItems?: InputMaybe<TimelineItemListFilterInput>;
    /** Filter by title */
    title?: InputMaybe<StringFilterInput>;
    /** Filter by trackables */
    trackables?: InputMaybe<TrackableListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    type?: InputMaybe<IssueTypeFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IssueFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IssueFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IssueFilterInput>;
};

/** Defines the order of a Issue list */
export type IssueOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IssueOrderField>;
};

/** Fields a list of Issue can be sorted by */
export enum IssueOrderField {
    /** Order by createdAt */
    CreatedAt = "CREATED_AT",
    /** Order by dueDate */
    DueDate = "DUE_DATE",
    /** Order by estimatedTime */
    EstimatedTime = "ESTIMATED_TIME",
    /** Order by id */
    Id = "ID",
    /** Order by lastModifiedAt */
    LastModifiedAt = "LAST_MODIFIED_AT",
    /** Order by lastUpdatedAt */
    LastUpdatedAt = "LAST_UPDATED_AT",
    /** Order by spentTime */
    SpentTime = "SPENT_TIME",
    /** Order by startDate */
    StartDate = "START_DATE",
    /** Order by title */
    Title = "TITLE"
}

/** Filter used to filter IssuePriority */
export type IssuePriorityFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IssuePriorityFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IssuePriorityFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IssuePriorityFilterInput>>;
    /** Filter by partOf */
    partOf?: InputMaybe<IssueTemplateListFilterInput>;
    /** Filter by prioritizedIssues */
    prioritizedIssues?: InputMaybe<IssueListFilterInput>;
    /** Filter by value */
    value?: InputMaybe<FloatFilterInput>;
};

/** Input to create an IssuePriority */
export type IssuePriorityInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /** The value of the created IssuePriority, used to compare/order different IssuePriorities */
    value: Scalars["Float"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssuePriorityListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IssuePriorityFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IssuePriorityFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IssuePriorityFilterInput>;
};

/** Defines the order of a IssuePriority list */
export type IssuePriorityOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IssuePriorityOrderField>;
};

/** Fields a list of IssuePriority can be sorted by */
export enum IssuePriorityOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME",
    /** Order by value */
    Value = "VALUE"
}

/** Filter used to filter IssueRelation */
export type IssueRelationFilterInput = {
    /** Filter by aggregatedBy */
    aggregatedBy?: InputMaybe<AggregatedIssueRelationListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IssueRelationFilterInput>>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    issue?: InputMaybe<IssueFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IssueRelationFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IssueRelationFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
    /** Filters for nodes where the related node match this filter */
    relatedIssue?: InputMaybe<IssueFilterInput>;
    /** Filter for specific timeline items. Entries are joined by OR */
    timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
    /** Filters for nodes where the related node match this filter */
    type?: InputMaybe<IssueRelationTypeFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueRelationListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IssueRelationFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IssueRelationFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IssueRelationFilterInput>;
};

/** Defines the order of a IssueRelation list */
export type IssueRelationOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IssueRelationOrderField>;
};

/** Fields a list of IssueRelation can be sorted by */
export enum IssueRelationOrderField {
    /** Order by createdAt */
    CreatedAt = "CREATED_AT",
    /** Order by id */
    Id = "ID",
    /** Order by lastModifiedAt */
    LastModifiedAt = "LAST_MODIFIED_AT"
}

/** Filter used to filter IssueRelationType */
export type IssueRelationTypeFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IssueRelationTypeFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by inverseName */
    inverseName?: InputMaybe<StringFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IssueRelationTypeFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IssueRelationTypeFilterInput>>;
    /** Filter by partOf */
    partOf?: InputMaybe<IssueTemplateListFilterInput>;
    /** Filter by relationsWithType */
    relationsWithType?: InputMaybe<IssueRelationListFilterInput>;
};

/** Input to create an IssueRelationType */
export type IssueRelationTypeInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The inverse name of the IssueRelationType, must not be blank */
    inverseName: Scalars["String"]["input"];
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueRelationTypeListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IssueRelationTypeFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IssueRelationTypeFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IssueRelationTypeFilterInput>;
};

/** Defines the order of a IssueRelationType list */
export type IssueRelationTypeOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IssueRelationTypeOrderField>;
};

/** Fields a list of IssueRelationType can be sorted by */
export enum IssueRelationTypeOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by inverseName */
    InverseName = "INVERSE_NAME",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter IssueState */
export type IssueStateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IssueStateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isOpen */
    isOpen?: InputMaybe<BooleanFilterInput>;
    /** Filter by issuesWithState */
    issuesWithState?: InputMaybe<IssueListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IssueStateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IssueStateFilterInput>>;
    /** Filter by partOf */
    partOf?: InputMaybe<IssueTemplateListFilterInput>;
};

/** Input to create an IssueState */
export type IssueStateInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The value for the isOpen field of the created IssueState */
    isOpen: Scalars["Boolean"]["input"];
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueStateListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IssueStateFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IssueStateFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IssueStateFilterInput>;
};

/** Defines the order of a IssueState list */
export type IssueStateOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IssueStateOrderField>;
};

/** Fields a list of IssueState can be sorted by */
export enum IssueStateOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by isOpen */
    IsOpen = "IS_OPEN",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter IssueTemplate */
export type IssueTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IssueTemplateFilterInput>>;
    /** Filter by assignmentTypes */
    assignmentTypes?: InputMaybe<AssignmentTypeListFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by extendedBy */
    extendedBy?: InputMaybe<IssueTemplateListFilterInput>;
    /** Filter by extends */
    extends?: InputMaybe<IssueTemplateListFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isDeprecated */
    isDeprecated?: InputMaybe<BooleanFilterInput>;
    /** Filter by issuePriorities */
    issuePriorities?: InputMaybe<IssuePriorityListFilterInput>;
    /** Filter by issueStates */
    issueStates?: InputMaybe<IssueStateListFilterInput>;
    /** Filter by issueTypes */
    issueTypes?: InputMaybe<IssueTypeListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IssueTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IssueTemplateFilterInput>>;
    /** Filter by relationTypes */
    relationTypes?: InputMaybe<IssueRelationTypeListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueTemplateListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IssueTemplateFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IssueTemplateFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IssueTemplateFilterInput>;
};

/** Defines the order of a IssueTemplate list */
export type IssueTemplateOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IssueTemplateOrderField>;
};

/** Fields a list of IssueTemplate can be sorted by */
export enum IssueTemplateOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter IssueType */
export type IssueTypeFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<IssueTypeFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by issuesWithType */
    issuesWithType?: InputMaybe<IssueListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<IssueTypeFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<IssueTypeFilterInput>>;
    /** Filter by partOf */
    partOf?: InputMaybe<IssueTemplateListFilterInput>;
};

/** Input to create an IssueType */
export type IssueTypeInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** A path that is used as the icon for issues. Used with a 0 0 100 100 viewBox. No stroke, only fill. */
    iconPath: Scalars["String"]["input"];
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type IssueTypeListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<IssueTypeFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<IssueTypeFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<IssueTypeFilterInput>;
};

/** Defines the order of a IssueType list */
export type IssueTypeOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<IssueTypeOrderField>;
};

/** Fields a list of IssueType can be sorted by */
export enum IssueTypeOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Input set update the value of a JSON field, like an extension field or a templated field. */
export type JsonFieldInput = {
    /** The name of the field */
    name: Scalars["String"]["input"];
    /** The new value of the field */
    value?: InputMaybe<Scalars["JSON"]["input"]>;
};

/** Filter used to filter Label */
export type LabelFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<LabelFilterInput>>;
    /** Filter by color */
    color?: InputMaybe<StringFilterInput>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by issues */
    issues?: InputMaybe<IssueListFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<LabelFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<LabelFilterInput>>;
    /** Filter by trackables */
    trackables?: InputMaybe<TrackableListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type LabelListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<LabelFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<LabelFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<LabelFilterInput>;
};

/** Defines the order of a Label list */
export type LabelOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<LabelOrderField>;
};

/** Fields a list of Label can be sorted by */
export enum LabelOrderField {
    /** Order by color */
    Color = "COLOR",
    /** Order by createdAt */
    CreatedAt = "CREATED_AT",
    /** Order by id */
    Id = "ID",
    /** Order by lastModifiedAt */
    LastModifiedAt = "LAST_MODIFIED_AT",
    /** Order by name */
    Name = "NAME"
}

/** Type of a Relation marker */
export enum MarkerType {
    /** A regular arrow */
    Arrow = "ARROW",
    /** A circle */
    Circle = "CIRCLE",
    /** A diamond */
    Diamond = "DIAMOND",
    /** A filled circle */
    FilledCircle = "FILLED_CIRCLE",
    /** A filled diamond */
    FilledDiamond = "FILLED_DIAMOND",
    /** A filled triangle */
    FilledTriangle = "FILLED_TRIANGLE",
    /** A triangle */
    Triangle = "TRIANGLE"
}

export type NodePermissionFilterEntry = {
    /** The node where the user must have the permission */
    node: Scalars["ID"]["input"];
    /** The permission the user must have on the node */
    permission: AllPermissionEntry;
};

/** Filter which can be used to filter for Nodes with a specific DateTime field */
export type NullableDateTimeFilterInput = {
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** Matches values which are greater than the provided value */
    gt?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** Matches values which are greater than or equal to the provided value */
    gte?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
    /** If true, matches only null values, if false, matches only non-null values */
    isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** Matches values which are lesser than the provided value */
    lt?: InputMaybe<Scalars["DateTime"]["input"]>;
    /** Matches values which are lesser than or equal to the provided value */
    lte?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** Filter which can be used to filter for Nodes with a specific Duration field */
export type NullableDurationFilterInputFilterInput = {
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["Duration"]["input"]>;
    /** Matches values which are greater than the provided value */
    gt?: InputMaybe<Scalars["Duration"]["input"]>;
    /** Matches values which are greater than or equal to the provided value */
    gte?: InputMaybe<Scalars["Duration"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["Duration"]["input"]>>;
    /** If true, matches only null values, if false, matches only non-null values */
    isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** Matches values which are lesser than the provided value */
    lt?: InputMaybe<Scalars["Duration"]["input"]>;
    /** Matches values which are lesser than or equal to the provided value */
    lte?: InputMaybe<Scalars["Duration"]["input"]>;
};

/** Filter which can be used to filter for Nodes with a specific Int field */
export type NullableIntFilterInput = {
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["Int"]["input"]>;
    /** Matches values which are greater than the provided value */
    gt?: InputMaybe<Scalars["Int"]["input"]>;
    /** Matches values which are greater than or equal to the provided value */
    gte?: InputMaybe<Scalars["Int"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
    /** If true, matches only null values, if false, matches only non-null values */
    isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** Matches values which are lesser than the provided value */
    lt?: InputMaybe<Scalars["Int"]["input"]>;
    /** Matches values which are lesser than or equal to the provided value */
    lte?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Filter which can be used to filter for Nodes with a specific String field */
export type NullableStringFilterInput = {
    /** Matches Strings which contain the provided value */
    contains?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches Strings which end with the provided value */
    endsWith?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are greater than the provided value */
    gt?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are greater than or equal to the provided value */
    gte?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    /** If true, matches only null values, if false, matches only non-null values */
    isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** Matches values which are lesser than the provided value */
    lt?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are lesser than or equal to the provided value */
    lte?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches Strings using the provided RegEx */
    matches?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches Strings which start with the provided value */
    startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

/** Input to create a SubTemplate, where all templatedFieldSpecifications must allow null as value */
export type NullableSubTemplateInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /**
     * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
     *         Must be disjoint with templateFieldSpecifications of templates this template extends.
     *
     */
    templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

/** Possible direction in which a list of nodes can be ordered */
export enum OrderDirection {
    /** Ascending */
    Asc = "ASC",
    /** Descending */
    Desc = "DESC"
}

/** Filter used to filter ParentTimelineItem */
export type ParentTimelineItemFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ParentTimelineItemFilterInput>>;
    /** Filter by childItems */
    childItems?: InputMaybe<TimelineItemListFilterInput>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    issue?: InputMaybe<IssueFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ParentTimelineItemFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ParentTimelineItemFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
    /** Filter for specific timeline items. Entries are joined by OR */
    timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Permission entry enum type. */
export enum PermissionEntry {
    /** Allows to create new Components. */
    CanCreateComponents = "CAN_CREATE_COMPONENTS",
    /** Allows to create new IMSs. */
    CanCreateImss = "CAN_CREATE_IMSS",
    /** Allows to create new Projects. */
    CanCreateProjects = "CAN_CREATE_PROJECTS",
    /** Allows to create new Templates. */
    CanCreateTemplates = "CAN_CREATE_TEMPLATES"
}

/** Filter used to filter Project */
export type ProjectFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ProjectFilterInput>>;
    /** Filter by artefacts */
    artefacts?: InputMaybe<ArtefactListFilterInput>;
    /** Filter by components */
    components?: InputMaybe<ComponentVersionListFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by issues */
    issues?: InputMaybe<IssueListFilterInput>;
    /** Filter by labels */
    labels?: InputMaybe<LabelListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ProjectFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ProjectFilterInput>>;
    /** Filter by permissions */
    permissions?: InputMaybe<ProjectPermissionListFilterInput>;
    /** Filter by pinnedIssues */
    pinnedIssues?: InputMaybe<IssueListFilterInput>;
    /** Filters for AffectedByIssues which are related to a Trackable */
    relatedTo?: InputMaybe<Scalars["ID"]["input"]>;
    /** Filter by repositoryURL */
    repositoryURL?: InputMaybe<NullableStringFilterInput>;
    /** Filter by syncsTo */
    syncsTo?: InputMaybe<ImsProjectListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ProjectListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ProjectFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ProjectFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ProjectFilterInput>;
};

/** Defines the order of a Project list */
export type ProjectOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ProjectOrderField>;
};

/** Fields a list of Project can be sorted by */
export enum ProjectOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** ProjectPermission entry enum type. */
export enum ProjectPermissionEntry {
    /** Grants all other permissions on the Node except READ. */
    Admin = "ADMIN",
    /**
     * Allows affecting entities part of this Trackable with any Issues.
     * Affectable entitites include
     *   - the Trackable itself
     *   - in case the Trackable is a Component
     *     - InterfaceSpecifications, their InterfaceSpecificationVersions and their InterfaceParts of the Component (not inherited ones)
     *     - Interfaces on the Component
     *     - ComponentVersions of the Component
     */
    AffectEntitiesWithIssues = "AFFECT_ENTITIES_WITH_ISSUES",
    /**
     * Allows to create Comments on Issues on this Trackable.
     * Also allows editing of your own Comments.
     */
    Comment = "COMMENT",
    /**
     * Allows to create new Issues on the Trackable.
     * This includes adding Issues from other Trackables.
     */
    CreateIssues = "CREATE_ISSUES",
    /** Allows adding Issues on this Trackable to other Trackables. */
    ExportIssues = "EXPORT_ISSUES",
    /** Allows adding Labels on this Trackable to other Trackables. */
    ExportLabels = "EXPORT_LABELS",
    /** Allows to add, remove, and update Artefacts on this Trackable. */
    ManageArtefacts = "MANAGE_ARTEFACTS",
    /** Allows to add / remove ComponentVersions to / from this Project. */
    ManageComponents = "MANAGE_COMPONENTS",
    /**
     * Allows to add, remove, and update IMSProjects on this Trackable.
     * Note: for adding, `IMSPermissionEntry.SYNC_TRACKABLES` is required additionally
     */
    ManageIms = "MANAGE_IMS",
    /**
     * Allows to manage issues.
     * This includes `CREATE_ISSUES` and `COMMENT`.
     * This does NOT include `LINK_TO_ISSUES` and `LINK_FROM_ISSUES`.
     * Additionaly includes
     *   - change the Template
     *   - add / remove Labels
     *   - add / remove Artefacts
     *   - change any field on the Issue (title, startDate, dueDate, ...)
     *   - change templated fields
     * In contrast to `MODERATOR`, this does not allow editing / removing Comments of other users
     */
    ManageIssues = "MANAGE_ISSUES",
    /**
     * Allows to add, remove, and update Labels on this Trackable.
     * Also allows to delete a Label, but only if it is allowed on all Trackable the Label is on.
     */
    ManageLabels = "MANAGE_LABELS",
    /**
     * Allows to moderate Issues on this Trackable.
     * This allows everything `MANAGE_ISSUES` allows.
     * Additionally, it allows editing and deleting Comments of other Users
     */
    Moderator = "MODERATOR",
    /**
     * Allows to read the Node (obtain it via the API) and to read certain related Nodes.
     * See documentation for specific Node for the specific conditions.
     */
    Read = "READ"
}

/** Filter used to filter ProjectPermission */
export type ProjectPermissionFilterInput = {
    /** Filter by allUsers */
    allUsers?: InputMaybe<BooleanFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<ProjectPermissionFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Filter by nodesWithPermission */
    nodesWithPermission?: InputMaybe<ProjectListFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<ProjectPermissionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<ProjectPermissionFilterInput>>;
    /** Filter by users */
    users?: InputMaybe<GropiusUserListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ProjectPermissionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<ProjectPermissionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<ProjectPermissionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<ProjectPermissionFilterInput>;
};

/** Defines the order of a ProjectPermission list */
export type ProjectPermissionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<ProjectPermissionOrderField>;
};

/** Fields a list of ProjectPermission can be sorted by */
export enum ProjectPermissionOrderField {
    /** Order by allUsers */
    AllUsers = "ALL_USERS",
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter RelationCondition */
export type RelationConditionFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<RelationConditionFilterInput>>;
    /** Filter by from */
    from?: InputMaybe<RelationPartnerTemplateListFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by interfaceSpecificationDerivationConditions */
    interfaceSpecificationDerivationConditions?: InputMaybe<InterfaceSpecificationDerivationConditionListFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<RelationConditionFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<RelationConditionFilterInput>>;
    /** Filter by partOf */
    partOf?: InputMaybe<RelationTemplateListFilterInput>;
    /** Filter by to */
    to?: InputMaybe<RelationPartnerTemplateListFilterInput>;
};

/** Input to create a RelationCondition */
export type RelationConditionInput = {
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** IDs of Templates of allowed start RelationPartners */
    from: Array<Scalars["ID"]["input"]>;
    /** Defines which InterfaceSpecifications are derived via the relation */
    interfaceSpecificationDerivationConditions: Array<InterfaceSpecificationDerivationConditionInput>;
    /** IDs of Templates of allowed end RelationPartners */
    to: Array<Scalars["ID"]["input"]>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type RelationConditionListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<RelationConditionFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<RelationConditionFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<RelationConditionFilterInput>;
};

/** Defines the order of a RelationCondition list */
export type RelationConditionOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<RelationConditionOrderField>;
};

/** Fields a list of RelationCondition can be sorted by */
export enum RelationConditionOrderField {
    /** Order by id */
    Id = "ID"
}

/** Filter used to filter Relation */
export type RelationFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<RelationFilterInput>>;
    /** Filter by derivesInvisible */
    derivesInvisible?: InputMaybe<InterfaceDefinitionListFilterInput>;
    /** Filter by derivesVisible */
    derivesVisible?: InputMaybe<InterfaceDefinitionListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    end?: InputMaybe<RelationPartnerFilterInput>;
    /** Filter by endParts */
    endParts?: InputMaybe<InterfacePartListFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<RelationFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<RelationFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    start?: InputMaybe<RelationPartnerFilterInput>;
    /** Filter by startParts */
    startParts?: InputMaybe<InterfacePartListFilterInput>;
    /** Filters for nodes where the related node match this filter */
    template?: InputMaybe<RelationTemplateFilterInput>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type RelationListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<RelationFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<RelationFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<RelationFilterInput>;
};

/** Defines the order of a Relation list */
export type RelationOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<RelationOrderField>;
};

/** Fields a list of Relation can be sorted by */
export enum RelationOrderField {
    /** Order by id */
    Id = "ID"
}

/** Filter used to filter RelationPartner */
export type RelationPartnerFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Filter by aggregatedIssues */
    aggregatedIssues?: InputMaybe<AggregatedIssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<RelationPartnerFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by incomingRelations */
    incomingRelations?: InputMaybe<RelationListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<RelationPartnerFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<RelationPartnerFilterInput>>;
    /** Filter by outgoingRelations */
    outgoingRelations?: InputMaybe<RelationListFilterInput>;
    /** Filters for RelationPartners which are part of a Project's component graph */
    partOfProject?: InputMaybe<Scalars["ID"]["input"]>;
    /** Filters for AffectedByIssues which are related to a Trackable */
    relatedTo?: InputMaybe<Scalars["ID"]["input"]>;
    /** Filter for templated fields with matching key and values. Entries are joined by AND */
    templatedFields?: InputMaybe<Array<InputMaybe<JsonFieldInput>>>;
};

/** Filter used to filter RelationPartnerTemplate */
export type RelationPartnerTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<RelationPartnerTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isDeprecated */
    isDeprecated?: InputMaybe<BooleanFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<RelationPartnerTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<RelationPartnerTemplateFilterInput>>;
    /** Filter by possibleEndOfRelations */
    possibleEndOfRelations?: InputMaybe<RelationConditionListFilterInput>;
    /** Filter by possibleStartOfRelations */
    possibleStartOfRelations?: InputMaybe<RelationConditionListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type RelationPartnerTemplateListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<RelationPartnerTemplateFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<RelationPartnerTemplateFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<RelationPartnerTemplateFilterInput>;
};

/** Defines the order of a RelationPartnerTemplate list */
export type RelationPartnerTemplateOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<RelationPartnerTemplateOrderField>;
};

/** Fields a list of RelationPartnerTemplate can be sorted by */
export enum RelationPartnerTemplateOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Filter used to filter RelationTemplate */
export type RelationTemplateFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<RelationTemplateFilterInput>>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by extendedBy */
    extendedBy?: InputMaybe<RelationTemplateListFilterInput>;
    /** Filter by extends */
    extends?: InputMaybe<RelationTemplateListFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by isDeprecated */
    isDeprecated?: InputMaybe<BooleanFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<RelationTemplateFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<RelationTemplateFilterInput>>;
    /** Filter by relationConditions */
    relationConditions?: InputMaybe<RelationConditionListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type RelationTemplateListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<RelationTemplateFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<RelationTemplateFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<RelationTemplateFilterInput>;
};

/** Defines the order of a RelationTemplate list */
export type RelationTemplateOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<RelationTemplateOrderField>;
};

/** Fields a list of RelationTemplate can be sorted by */
export enum RelationTemplateOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Input for the removeAffectedEntityFromIssue mutation */
export type RemoveAffectedEntityFromIssueInput = {
    /** The id of the AffectedByIssue which is no longer affected by the Issue */
    affectedEntity: Scalars["ID"]["input"];
    /** The id of the Issue which no longer affects the entity */
    issue: Scalars["ID"]["input"];
};

/** Input for the removeArtefactFromIssue mutation */
export type RemoveArtefactFromIssueInput = {
    /** The id of the Artefact to remove */
    artefact: Scalars["ID"]["input"];
    /** The id of the Issue where to remove the Artefact */
    issue: Scalars["ID"]["input"];
};

/** Input for the removeAssignment mutations */
export type RemoveAssignmentInput = {
    /** The id of the Assignment to remove */
    assignment: Scalars["ID"]["input"];
};

/** Input for the removeComponentVersionFromProject mutation */
export type RemoveComponentVersionFromProjectInput = {
    /** The id of the ComponentVersion to remove */
    componentVersion: Scalars["ID"]["input"];
    /** The id of the Project from which the ComponentVersion is removed */
    project: Scalars["ID"]["input"];
};

/** Input for the removeInterfaceSpecificationVersionfromComponentVersion mutation */
export type RemoveInterfaceSpecificationVersionFromComponentVersionInput = {
    /** The id of the ComponentVersion to remove the InterfaceSpecificationVersion from. */
    componentVersion: Scalars["ID"]["input"];
    /** The id of the InterfaceSpecificationVersion to remove. Must be part of the same Component as `componentVersion` */
    interfaceSpecificationVersion: Scalars["ID"]["input"];
    /** If `true`, interfaceSpecificationVersion will be no longer invisible on componentVersion */
    invisible: Scalars["Boolean"]["input"];
    /** If `true`, interfaceSpecificationVersion will be no longer visible on componentVersion */
    visible: Scalars["Boolean"]["input"];
};

/** Input for the removeIssueFromPinnedIssues mutation */
export type RemoveIssueFromPinnedIssuesInput = {
    /** The id of the Issue to unpin */
    issue: Scalars["ID"]["input"];
    /** The id of the Trackable where the Issue should be unpinned */
    trackable: Scalars["ID"]["input"];
};

/** Input for the removeIssueFromTrackable mutation */
export type RemoveIssueFromTrackableInput = {
    /** The id of the Issue to remove from the Trackable */
    issue: Scalars["ID"]["input"];
    /** The id of the Trackable where to remove the Issue */
    trackable: Scalars["ID"]["input"];
};

/** Input for the removeIssueRelation mutations */
export type RemoveIssueRelationInput = {
    /** The id of the IssueRelation to remove */
    issueRelation: Scalars["ID"]["input"];
};

/** Input for the removeLabelFromIssue mutation */
export type RemoveLabelFromIssueInput = {
    /** The id of the Issue where to remove the Label */
    issue: Scalars["ID"]["input"];
    /** The id of the Label to remove */
    label: Scalars["ID"]["input"];
};

/** Input for the removeLabelFromTrackable mutation */
export type RemoveLabelFromTrackableInput = {
    /** The id of the Label to remove */
    label: Scalars["ID"]["input"];
    /** The id of the Trackable where to remove the Label */
    trackable: Scalars["ID"]["input"];
};

/** Type of a Shape */
export enum ShapeType {
    /** A Circle */
    Circle = "CIRCLE",
    /** An Ellipse */
    Ellipse = "ELLIPSE",
    /** A Hexagon */
    Hexagon = "HEXAGON",
    /** A Rectangle */
    Rect = "RECT",
    /** A Rhombus */
    Rhombus = "RHOMBUS"
}

/** Filter which can be used to filter for Nodes with a specific String field */
export type StringFilterInput = {
    /** Matches Strings which contain the provided value */
    contains?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches Strings which end with the provided value */
    endsWith?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are equal to the provided value */
    eq?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are greater than the provided value */
    gt?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are greater than or equal to the provided value */
    gte?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are equal to any of the provided values */
    in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    /** Matches values which are lesser than the provided value */
    lt?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches values which are lesser than or equal to the provided value */
    lte?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches Strings using the provided RegEx */
    matches?: InputMaybe<Scalars["String"]["input"]>;
    /** Matches Strings which start with the provided value */
    startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

/** Input to create a StrokeStyle */
export type StrokeStyleInput = {
    /** The color of the stroke */
    color?: InputMaybe<Scalars["String"]["input"]>;
    /** The dash pattern of the stroke */
    dash?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

/** Input to create a SubTemplate */
export type SubTemplateInput = {
    /** The description of the NamedNode */
    description: Scalars["String"]["input"];
    /** The initial value of the extension fields */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The name of the NamedNode, must not be blank */
    name: Scalars["String"]["input"];
    /**
     * Additional initial templateFieldSpecifications, should be a JSON schema JSON.
     *         Must be disjoint with templateFieldSpecifications of templates this template extends.
     *
     */
    templateFieldSpecifications?: InputMaybe<Array<JsonFieldInput>>;
};

/** Filter used to filter TimelineItem */
export type TimelineItemFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<TimelineItemFilterInput>>;
    /** Filter by createdAt */
    createdAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    createdBy?: InputMaybe<UserFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filters for nodes where the related node match this filter */
    issue?: InputMaybe<IssueFilterInput>;
    /** Filter by lastModifiedAt */
    lastModifiedAt?: InputMaybe<DateTimeFilterInput>;
    /** Filters for nodes where the related node match this filter */
    lastModifiedBy?: InputMaybe<UserFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<TimelineItemFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<TimelineItemFilterInput>>;
    /** Filters for nodes where the related node match this filter */
    parentItem?: InputMaybe<ParentTimelineItemFilterInput>;
    /** Filter for specific timeline items. Entries are joined by OR */
    timelineItemTypes?: InputMaybe<Array<TimelineItemType>>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type TimelineItemListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<TimelineItemFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<TimelineItemFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<TimelineItemFilterInput>;
};

/** Defines the order of a TimelineItem list */
export type TimelineItemOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<TimelineItemOrderField>;
};

/** Fields a list of TimelineItem can be sorted by */
export enum TimelineItemOrderField {
    /** Order by createdAt */
    CreatedAt = "CREATED_AT",
    /** Order by id */
    Id = "ID",
    /** Order by lastModifiedAt */
    LastModifiedAt = "LAST_MODIFIED_AT"
}

/** All timeline items types */
export enum TimelineItemType {
    /** AbstractTypeChangedEvent timeline item */
    AbstractTypeChangedEvent = "ABSTRACT_TYPE_CHANGED_EVENT",
    /** AddedAffectedEntityEvent timeline item */
    AddedAffectedEntityEvent = "ADDED_AFFECTED_ENTITY_EVENT",
    /** AddedArtefactEvent timeline item */
    AddedArtefactEvent = "ADDED_ARTEFACT_EVENT",
    /** AddedLabelEvent timeline item */
    AddedLabelEvent = "ADDED_LABEL_EVENT",
    /** AddedToPinnedIssuesEvent timeline item */
    AddedToPinnedIssuesEvent = "ADDED_TO_PINNED_ISSUES_EVENT",
    /** AddedToTrackableEvent timeline item */
    AddedToTrackableEvent = "ADDED_TO_TRACKABLE_EVENT",
    /** Assignment timeline item */
    Assignment = "ASSIGNMENT",
    /** AssignmentTypeChangedEvent timeline item */
    AssignmentTypeChangedEvent = "ASSIGNMENT_TYPE_CHANGED_EVENT",
    /** Body timeline item */
    Body = "BODY",
    /** Comment timeline item */
    Comment = "COMMENT",
    /** DueDateChangedEvent timeline item */
    DueDateChangedEvent = "DUE_DATE_CHANGED_EVENT",
    /** EstimatedTimeChangedEvent timeline item */
    EstimatedTimeChangedEvent = "ESTIMATED_TIME_CHANGED_EVENT",
    /** IncomingRelationTypeChangedEvent timeline item */
    IncomingRelationTypeChangedEvent = "INCOMING_RELATION_TYPE_CHANGED_EVENT",
    /** IssueComment timeline item */
    IssueComment = "ISSUE_COMMENT",
    /** IssueRelation timeline item */
    IssueRelation = "ISSUE_RELATION",
    /** OutgoingRelationTypeChangedEvent timeline item */
    OutgoingRelationTypeChangedEvent = "OUTGOING_RELATION_TYPE_CHANGED_EVENT",
    /** ParentTimelineItem timeline item */
    ParentTimelineItem = "PARENT_TIMELINE_ITEM",
    /** PriorityChangedEvent timeline item */
    PriorityChangedEvent = "PRIORITY_CHANGED_EVENT",
    /** PublicTimelineItem timeline item */
    PublicTimelineItem = "PUBLIC_TIMELINE_ITEM",
    /** RelatedByIssueEvent timeline item */
    RelatedByIssueEvent = "RELATED_BY_ISSUE_EVENT",
    /** RelationTypeChangedEvent timeline item */
    RelationTypeChangedEvent = "RELATION_TYPE_CHANGED_EVENT",
    /** RemovedAffectedEntityEvent timeline item */
    RemovedAffectedEntityEvent = "REMOVED_AFFECTED_ENTITY_EVENT",
    /** RemovedArtefactEvent timeline item */
    RemovedArtefactEvent = "REMOVED_ARTEFACT_EVENT",
    /** RemovedAssignmentEvent timeline item */
    RemovedAssignmentEvent = "REMOVED_ASSIGNMENT_EVENT",
    /** RemovedFromPinnedIssuesEvent timeline item */
    RemovedFromPinnedIssuesEvent = "REMOVED_FROM_PINNED_ISSUES_EVENT",
    /** RemovedFromTrackableEvent timeline item */
    RemovedFromTrackableEvent = "REMOVED_FROM_TRACKABLE_EVENT",
    /** RemovedIncomingRelationEvent timeline item */
    RemovedIncomingRelationEvent = "REMOVED_INCOMING_RELATION_EVENT",
    /** RemovedLabelEvent timeline item */
    RemovedLabelEvent = "REMOVED_LABEL_EVENT",
    /** RemovedOutgoingRelationEvent timeline item */
    RemovedOutgoingRelationEvent = "REMOVED_OUTGOING_RELATION_EVENT",
    /** RemovedRelationEvent timeline item */
    RemovedRelationEvent = "REMOVED_RELATION_EVENT",
    /** RemovedTemplatedFieldEvent timeline item */
    RemovedTemplatedFieldEvent = "REMOVED_TEMPLATED_FIELD_EVENT",
    /** SpentTimeChangedEvent timeline item */
    SpentTimeChangedEvent = "SPENT_TIME_CHANGED_EVENT",
    /** StartDateChangedEvent timeline item */
    StartDateChangedEvent = "START_DATE_CHANGED_EVENT",
    /** StateChangedEvent timeline item */
    StateChangedEvent = "STATE_CHANGED_EVENT",
    /** TemplatedFieldChangedEvent timeline item */
    TemplatedFieldChangedEvent = "TEMPLATED_FIELD_CHANGED_EVENT",
    /** TemplateChangedEvent timeline item */
    TemplateChangedEvent = "TEMPLATE_CHANGED_EVENT",
    /** TimelineItem timeline item */
    TimelineItem = "TIMELINE_ITEM",
    /** TitleChangedEvent timeline item */
    TitleChangedEvent = "TITLE_CHANGED_EVENT",
    /** TypeChangedEvent timeline item */
    TypeChangedEvent = "TYPE_CHANGED_EVENT"
}

/** Filter used to filter Trackable */
export type TrackableFilterInput = {
    /** Filter by affectingIssues */
    affectingIssues?: InputMaybe<IssueListFilterInput>;
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<TrackableFilterInput>>;
    /** Filter by artefacts */
    artefacts?: InputMaybe<ArtefactListFilterInput>;
    /** Filter by description */
    description?: InputMaybe<StringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Filter by issues */
    issues?: InputMaybe<IssueListFilterInput>;
    /** Filter by labels */
    labels?: InputMaybe<LabelListFilterInput>;
    /** Filter by name */
    name?: InputMaybe<StringFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<TrackableFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<TrackableFilterInput>>;
    /** Filter by pinnedIssues */
    pinnedIssues?: InputMaybe<IssueListFilterInput>;
    /** Filters for AffectedByIssues which are related to a Trackable */
    relatedTo?: InputMaybe<Scalars["ID"]["input"]>;
    /** Filter by repositoryURL */
    repositoryURL?: InputMaybe<NullableStringFilterInput>;
    /** Filter by syncsTo */
    syncsTo?: InputMaybe<ImsProjectListFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type TrackableListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<TrackableFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<TrackableFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<TrackableFilterInput>;
};

/** Defines the order of a Trackable list */
export type TrackableOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<TrackableOrderField>;
};

/** Fields a list of Trackable can be sorted by */
export enum TrackableOrderField {
    /** Order by id */
    Id = "ID",
    /** Order by name */
    Name = "NAME"
}

/** Input to map an old type to a new type */
export type TypeMappingInput = {
    /** The new type, null representing no type */
    newType?: InputMaybe<Scalars["ID"]["input"]>;
    /** The old type, null representing no type */
    oldType: Scalars["ID"]["input"];
};

/** Input for the updateArtefact mutation */
export type UpdateArtefactInput = {
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The new file of the Artefact */
    file?: InputMaybe<Scalars["URL"]["input"]>;
    /** The new value of the from field of the Artefact */
    from?: InputMaybe<Scalars["Int"]["input"]>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /**
     * If provided, the id of the new template for the Artefact
     *         Use `templatedFields` to update fields so that they conform with the new specifications.
     *         No longer needed fields are automatically removed.
     *
     */
    template?: InputMaybe<Scalars["ID"]["input"]>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The new value of the to field of the Artefact */
    to?: InputMaybe<Scalars["Int"]["input"]>;
    /** New version of the Artefact */
    version?: InputMaybe<Scalars["String"]["input"]>;
};

/** Input for the updateBody mutation */
export type UpdateBodyInput = {
    /** The body of the Comment */
    body?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
};

/** Input for the updateComponent mutation */
export type UpdateComponentInput = {
    /** Ids of permissions to add, must be disjoint with removedPermissions. */
    addedPermissions?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /**
     * Values for templatedFields of ComponentVersions to update.
     *         Only evaluated if `template` is provided!
     *         Affect all ComponentVersions of the updated Component
     *
     */
    componentVersionTemplatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /**
     * Ids of permissions to remove, must be disjoint with addedPermissions.
     *         There must always be at least one permissions granting ADMIN to some GropiusUser left.
     *
     */
    removedPermissions?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The repositoryURL of the named node */
    repositoryURL?: InputMaybe<Scalars["URL"]["input"]>;
    /**
     * If provided, the id of the new template for the Component
     *         Use `templatedFields` to update fields so that they conform with the new specifications.
     *         Use `componentVersionTemplatedFields` to update the `templatedFields` of ALL ComponentVersions
     *         No longer needed fields are automatically removed.
     *
     */
    template?: InputMaybe<Scalars["ID"]["input"]>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the updateComponentPermission mutation */
export type UpdateComponentPermissionInput = {
    /** Permission entries to add, must be disjoint with removedEntries */
    addedEntries?: InputMaybe<Array<ComponentPermissionEntry>>;
    /** Ids of affected users to add */
    addedUsers?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The new value for allUsers */
    allUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** The description of the BasePermission */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Permission entries to remove, must be disjoint with addedEntries */
    removedEntries?: InputMaybe<Array<ComponentPermissionEntry>>;
    /** Ids of affected users to remove */
    removedUsers?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

/** Input for the updateComponentVersion mutation */
export type UpdateComponentVersionInput = {
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /** New version of the ComponentVersion */
    version?: InputMaybe<Scalars["String"]["input"]>;
};

/** Input for the updateExtensionFields mutation */
export type UpdateExtensionFieldsInput = {
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
};

/** Input for the updateGlobalPermission mutation */
export type UpdateGlobalPermissionInput = {
    /** Permission entries to add, must be disjoint with removedEntries */
    addedEntries?: InputMaybe<Array<PermissionEntry>>;
    /** Ids of affected users to add */
    addedUsers?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The new value for allUsers */
    allUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** The description of the BasePermission */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Permission entries to remove, must be disjoint with addedEntries */
    removedEntries?: InputMaybe<Array<PermissionEntry>>;
    /** Ids of affected users to remove */
    removedUsers?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

/** Input for the updateGropiusUserMutation */
export type UpdateGropiusUserInput = {
    /** The new avatar of the user */
    avatar?: InputMaybe<Scalars["URL"]["input"]>;
    /** The new displayName of the User to update */
    displayName?: InputMaybe<Scalars["String"]["input"]>;
    /** The new email of the User to update */
    email?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new value for isAdmin of the GropiusUser to update */
    isAdmin?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Input for the updateIMS mutation */
export type UpdateImsInput = {
    /** Ids of permissions to add, must be disjoint with removedPermissions. */
    addedPermissions?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /**
     * Ids of permissions to remove, must be disjoint with addedPermissions.
     *         There must always be at least one permissions granting ADMIN to some GropiusUser left.
     *
     */
    removedPermissions?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the updateImsPermission mutation */
export type UpdateImsPermissionInput = {
    /** Permission entries to add, must be disjoint with removedEntries */
    addedEntries?: InputMaybe<Array<ImsPermissionEntry>>;
    /** Ids of affected users to add */
    addedUsers?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The new value for allUsers */
    allUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** The description of the BasePermission */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Permission entries to remove, must be disjoint with addedEntries */
    removedEntries?: InputMaybe<Array<ImsPermissionEntry>>;
    /** Ids of affected users to remove */
    removedUsers?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

/** Input for the updateIMSProject mutation */
export type UpdateImsProjectInput = {
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the updateInterfaceDefinition mutation */
export type UpdateInterfaceDefinitionInput = {
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the updateInterface mutation */
export type UpdateInterfaceInput = {
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the updateInterfacePart mutation */
export type UpdateInterfacePartInput = {
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the updateInterfaceSpecification mutation */
export type UpdateInterfaceSpecificationInput = {
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /**
     * Values for templatedFields of InterfaceDefinitions to update.
     *         Only evaluated if `template` is provided!
     *         Affect all InterfaceDefinitions of the updated InterfaceSpecification
     *
     */
    interfaceDefinitionTemplatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /**
     * Values for templatedFields of InterfaceParts to update.
     *         Only evaluated if `template` is provided!
     *         Affect all InterfaceParts of the updated InterfaceSpecification
     *
     */
    interfacePartTemplatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /**
     * Values for templatedFields of InterfaceSpecificationVersions to update.
     *         Only evaluated if `template` is provided!
     *         Affect all InterfaceSpecificationVersions of the updated InterfaceSpecification
     *
     */
    interfaceSpecificationVersionTemplatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /**
     * Values for templatedFields of Interfaces to update.
     *         Only evaluated if `template` is provided!
     *         Affect all Interfaces of the updated InterfaceSpecification
     *
     */
    interfaceTemplatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /**
     * If provided, the id of the new template for the Component
     *         Use `templatedFields` to update fields so that they conform with the new specifications.
     *         No longer needed fields are automatically removed.
     *
     */
    template?: InputMaybe<Scalars["ID"]["input"]>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the updateInterfaceSpecificationVersion mutation */
export type UpdateInterfaceSpecificationVersionInput = {
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
    /** New version of the InterfaceSpecificationVersion */
    version?: InputMaybe<Scalars["String"]["input"]>;
};

/** Input for the updateIntraComponentDependencySpecification mutation */
export type UpdateIntraComponentDependencySpecificationInput = {
    /** Added incomingParticipants */
    addedIncomingParticipants?: InputMaybe<Array<IntraComponentDependencyParticipantInput>>;
    /** Added outgoingParticipants */
    addedOutgoingParticipants?: InputMaybe<Array<IntraComponentDependencyParticipantInput>>;
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Ids of incomingParticipants to remove / delete */
    removedIncomingParticipants?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** Ids of outgoingParticipants to remove / delete */
    removedOutgoingParticipants?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

/** Input for the updateIssueComment mutation */
export type UpdateIssueCommentInput = {
    /** Ids of Artefacts which should be added to `referencedArtefacts` */
    addedReferencedArtefacts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The body of the Comment */
    body?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** Ids of Artefacts which should be removed from `referencedArtefacts` */
    removedReferencedArtefacts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

/** Input for the updateLabel mutation */
export type UpdateLabelInput = {
    /** The new color of the Label */
    color?: InputMaybe<Scalars["String"]["input"]>;
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Input for the updateProject mutation */
export type UpdateProjectInput = {
    /** Ids of permissions to add, must be disjoint with removedPermissions. */
    addedPermissions?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The description of the NamedNode */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /**
     * Ids of permissions to remove, must be disjoint with addedPermissions.
     *         There must always be at least one permissions granting ADMIN to some GropiusUser left.
     *
     */
    removedPermissions?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The repositoryURL of the named node */
    repositoryURL?: InputMaybe<Scalars["URL"]["input"]>;
};

/** Input for the updateProjectPermission mutation */
export type UpdateProjectPermissionInput = {
    /** Permission entries to add, must be disjoint with removedEntries */
    addedEntries?: InputMaybe<Array<ProjectPermissionEntry>>;
    /** Ids of affected users to add */
    addedUsers?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** The new value for allUsers */
    allUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** The description of the BasePermission */
    description?: InputMaybe<Scalars["String"]["input"]>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new name of the NamedNode, must not be empty */
    name?: InputMaybe<Scalars["String"]["input"]>;
    /** Permission entries to remove, must be disjoint with addedEntries */
    removedEntries?: InputMaybe<Array<ProjectPermissionEntry>>;
    /** Ids of affected users to remove */
    removedUsers?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

/** Input for the updateRelation mutation */
export type UpdateRelationInput = {
    /** Ids of InterfaceParts of the `end` Interface to add to `endParts` */
    addedEndParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** Ids of InterfaceParts of the `start` Interface to add to `startParts` */
    addedStartParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** Extension fields to update. To remove, provide no value */
    extensionFields?: InputMaybe<Array<JsonFieldInput>>;
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** Ids of InterfaceParts of the `end` Interface to remove from `endParts` */
    removedEndParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /** Ids of InterfaceParts of the `start` Interface to remove from `startParts` */
    removedStartParts?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    /**
     * If provided, the id of the new template for the Component
     *         Use `templatedFields` to update fields so that they conform with the new specifications.
     *         No longer needed fields are automatically removed.
     *         Caution: the chosen Template must be compatible with the Templates of the start and end of the Relation.
     *
     */
    template?: InputMaybe<Scalars["ID"]["input"]>;
    /** Values for templatedFields to update */
    templatedFields?: InputMaybe<Array<JsonFieldInput>>;
};

/** Input for the updateTemplateDeprecationStatus mutation */
export type UpdateTemplateDeprecationStatusInput = {
    /** The id of the node to update */
    id: Scalars["ID"]["input"];
    /** The new deprecation status of the template */
    isDeprecated: Scalars["Boolean"]["input"];
};

/** Filter used to filter User */
export type UserFilterInput = {
    /** Connects all subformulas via and */
    and?: InputMaybe<Array<UserFilterInput>>;
    /** Filter by assignments */
    assignments?: InputMaybe<AssignmentListFilterInput>;
    /** Filter by createdNodes */
    createdNodes?: InputMaybe<AuditedNodeListFilterInput>;
    /** Filter by displayName */
    displayName?: InputMaybe<StringFilterInput>;
    /** Filter by email */
    email?: InputMaybe<NullableStringFilterInput>;
    /** Filter by id */
    id?: InputMaybe<IdFilterInput>;
    /** Negates the subformula */
    not?: InputMaybe<UserFilterInput>;
    /** Connects all subformulas via or */
    or?: InputMaybe<Array<UserFilterInput>>;
    /** Filter by participatedIssues */
    participatedIssues?: InputMaybe<IssueListFilterInput>;
    /** Filter by username */
    username?: InputMaybe<NullableStringFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type UserListFilterInput = {
    /** Filters for nodes where all of the related nodes match this filter */
    all?: InputMaybe<UserFilterInput>;
    /** Filters for nodes where any of the related nodes match this filter */
    any?: InputMaybe<UserFilterInput>;
    /** Filters for nodes where none of the related nodes match this filter */
    none?: InputMaybe<UserFilterInput>;
};

/** Defines the order of a User list */
export type UserOrder = {
    /** The direction to order by, defaults to ASC */
    direction?: InputMaybe<OrderDirection>;
    /** The field to order by, defaults to ID */
    field?: InputMaybe<UserOrderField>;
};

/** Fields a list of User can be sorted by */
export enum UserOrderField {
    /** Order by displayName */
    DisplayName = "DISPLAY_NAME",
    /** Order by email */
    Email = "EMAIL",
    /** Order by id */
    Id = "ID",
    /** Order by username */
    Username = "USERNAME"
}

type BaseTemplateInfo_ArtefactTemplate_Fragment = {
    __typename?: "ArtefactTemplate";
    id: string;
    name: string;
    description: string;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

type BaseTemplateInfo_ComponentTemplate_Fragment = {
    __typename?: "ComponentTemplate";
    id: string;
    name: string;
    description: string;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

type BaseTemplateInfo_ComponentVersionTemplate_Fragment = {
    __typename?: "ComponentVersionTemplate";
    id: string;
    name: string;
    description: string;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

type BaseTemplateInfo_ImsIssueTemplate_Fragment = {
    __typename?: "IMSIssueTemplate";
    id: string;
    name: string;
    description: string;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

type BaseTemplateInfo_ImsProjectTemplate_Fragment = {
    __typename?: "IMSProjectTemplate";
    id: string;
    name: string;
    description: string;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

type BaseTemplateInfo_ImsTemplate_Fragment = {
    __typename?: "IMSTemplate";
    id: string;
    name: string;
    description: string;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

type BaseTemplateInfo_ImsUserTemplate_Fragment = {
    __typename?: "IMSUserTemplate";
    id: string;
    name: string;
    description: string;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

type BaseTemplateInfo_InterfaceDefinitionTemplate_Fragment = {
    __typename?: "InterfaceDefinitionTemplate";
    id: string;
    name: string;
    description: string;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

type BaseTemplateInfo_InterfacePartTemplate_Fragment = {
    __typename?: "InterfacePartTemplate";
    id: string;
    name: string;
    description: string;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

type BaseTemplateInfo_InterfaceSpecificationTemplate_Fragment = {
    __typename?: "InterfaceSpecificationTemplate";
    id: string;
    name: string;
    description: string;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

type BaseTemplateInfo_InterfaceSpecificationVersionTemplate_Fragment = {
    __typename?: "InterfaceSpecificationVersionTemplate";
    id: string;
    name: string;
    description: string;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

type BaseTemplateInfo_InterfaceTemplate_Fragment = {
    __typename?: "InterfaceTemplate";
    id: string;
    name: string;
    description: string;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

type BaseTemplateInfo_IssueTemplate_Fragment = {
    __typename?: "IssueTemplate";
    id: string;
    name: string;
    description: string;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

type BaseTemplateInfo_RelationTemplate_Fragment = {
    __typename?: "RelationTemplate";
    id: string;
    name: string;
    description: string;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

export type BaseTemplateInfoFragment =
    | BaseTemplateInfo_ArtefactTemplate_Fragment
    | BaseTemplateInfo_ComponentTemplate_Fragment
    | BaseTemplateInfo_ComponentVersionTemplate_Fragment
    | BaseTemplateInfo_ImsIssueTemplate_Fragment
    | BaseTemplateInfo_ImsProjectTemplate_Fragment
    | BaseTemplateInfo_ImsTemplate_Fragment
    | BaseTemplateInfo_ImsUserTemplate_Fragment
    | BaseTemplateInfo_InterfaceDefinitionTemplate_Fragment
    | BaseTemplateInfo_InterfacePartTemplate_Fragment
    | BaseTemplateInfo_InterfaceSpecificationTemplate_Fragment
    | BaseTemplateInfo_InterfaceSpecificationVersionTemplate_Fragment
    | BaseTemplateInfo_InterfaceTemplate_Fragment
    | BaseTemplateInfo_IssueTemplate_Fragment
    | BaseTemplateInfo_RelationTemplate_Fragment;

type RelationPartnerTemplateInfo_ComponentTemplate_Fragment = {
    __typename?: "ComponentTemplate";
    shapeRadius?: number | null;
    shapeType: ShapeType;
    id: string;
    name: string;
    description: string;
    fill?: { __typename?: "FillStyle"; id: string; color: string } | null;
    stroke?: { __typename?: "StrokeStyle"; id: string; color?: string | null; dash?: Array<number> | null } | null;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

type RelationPartnerTemplateInfo_InterfaceSpecificationTemplate_Fragment = {
    __typename?: "InterfaceSpecificationTemplate";
    shapeRadius?: number | null;
    shapeType: ShapeType;
    id: string;
    name: string;
    description: string;
    fill?: { __typename?: "FillStyle"; id: string; color: string } | null;
    stroke?: { __typename?: "StrokeStyle"; id: string; color?: string | null; dash?: Array<number> | null } | null;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

export type RelationPartnerTemplateInfoFragment =
    | RelationPartnerTemplateInfo_ComponentTemplate_Fragment
    | RelationPartnerTemplateInfo_InterfaceSpecificationTemplate_Fragment;

export type FullIssueTemplateInfoFragment = {
    __typename?: "IssueTemplate";
    id: string;
    name: string;
    description: string;
    extends: { __typename?: "IssueTemplateConnection"; nodes: Array<{ __typename?: "IssueTemplate"; id: string }> };
    assignmentTypes: {
        __typename?: "AssignmentTypeConnection";
        nodes: Array<{ __typename?: "AssignmentType"; id: string; name: string; description: string }>;
    };
    issueTypes: {
        __typename?: "IssueTypeConnection";
        nodes: Array<{ __typename?: "IssueType"; id: string; name: string; description: string; iconPath: string }>;
    };
    issueStates: {
        __typename?: "IssueStateConnection";
        nodes: Array<{ __typename?: "IssueState"; id: string; name: string; description: string; isOpen: boolean }>;
    };
    issuePriorities: {
        __typename?: "IssuePriorityConnection";
        nodes: Array<{ __typename?: "IssuePriority"; id: string; name: string; description: string; value: number }>;
    };
    relationTypes: {
        __typename?: "IssueRelationTypeConnection";
        nodes: Array<{
            __typename?: "IssueRelationType";
            id: string;
            name: string;
            inverseName: string;
            description: string;
        }>;
    };
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

export type FullComponentTemplateInfoFragment = {
    __typename?: "ComponentTemplate";
    shapeRadius?: number | null;
    shapeType: ShapeType;
    id: string;
    name: string;
    description: string;
    extends: {
        __typename?: "ComponentTemplateConnection";
        nodes: Array<{ __typename?: "ComponentTemplate"; id: string }>;
    };
    componentVersionTemplate: {
        __typename?: "ComponentVersionTemplate";
        id: string;
        name: string;
        description: string;
        templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
    };
    fill?: { __typename?: "FillStyle"; id: string; color: string } | null;
    stroke?: { __typename?: "StrokeStyle"; id: string; color?: string | null; dash?: Array<number> | null } | null;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

export type FullInterfaceSpecificationTemplateInfoFragment = {
    __typename?: "InterfaceSpecificationTemplate";
    shapeRadius?: number | null;
    shapeType: ShapeType;
    id: string;
    name: string;
    description: string;
    extends: {
        __typename?: "InterfaceSpecificationTemplateConnection";
        nodes: Array<{ __typename?: "InterfaceSpecificationTemplate"; id: string }>;
    };
    canBeVisibleOnComponents: {
        __typename?: "ComponentTemplateConnection";
        nodes: Array<{ __typename?: "ComponentTemplate"; id: string }>;
    };
    canBeInvisibleOnComponents: {
        __typename?: "ComponentTemplateConnection";
        nodes: Array<{ __typename?: "ComponentTemplate"; id: string }>;
    };
    interfaceSpecificationVersionTemplate: {
        __typename?: "InterfaceSpecificationVersionTemplate";
        id: string;
        name: string;
        description: string;
        templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
    };
    interfaceDefinitionTemplate: {
        __typename?: "InterfaceDefinitionTemplate";
        id: string;
        name: string;
        description: string;
        templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
    };
    interfaceTemplate: {
        __typename?: "InterfaceTemplate";
        id: string;
        name: string;
        description: string;
        templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
    };
    interfacePartTemplate: {
        __typename?: "InterfacePartTemplate";
        id: string;
        name: string;
        description: string;
        templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
    };
    fill?: { __typename?: "FillStyle"; id: string; color: string } | null;
    stroke?: { __typename?: "StrokeStyle"; id: string; color?: string | null; dash?: Array<number> | null } | null;
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

export type FullArtefactTemplateInfoFragment = {
    __typename?: "ArtefactTemplate";
    id: string;
    name: string;
    description: string;
    extends: {
        __typename?: "ArtefactTemplateConnection";
        nodes: Array<{ __typename?: "ArtefactTemplate"; id: string }>;
    };
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

export type FullRelationTemplateInfoFragment = {
    __typename?: "RelationTemplate";
    markerType: MarkerType;
    id: string;
    name: string;
    description: string;
    extends: {
        __typename?: "RelationTemplateConnection";
        nodes: Array<{ __typename?: "RelationTemplate"; id: string }>;
    };
    stroke?: { __typename?: "StrokeStyle"; id: string; color?: string | null; dash?: Array<number> | null } | null;
    relationConditions: {
        __typename?: "RelationConditionConnection";
        nodes: Array<{
            __typename?: "RelationCondition";
            from: {
                __typename?: "RelationPartnerTemplateConnection";
                nodes: Array<
                    | { __typename?: "ComponentTemplate"; id: string }
                    | { __typename?: "InterfaceSpecificationTemplate"; id: string }
                >;
            };
            to: {
                __typename?: "RelationPartnerTemplateConnection";
                nodes: Array<
                    | { __typename?: "ComponentTemplate"; id: string }
                    | { __typename?: "InterfaceSpecificationTemplate"; id: string }
                >;
            };
            interfaceSpecificationDerivationConditions: {
                __typename?: "InterfaceSpecificationDerivationConditionConnection";
                nodes: Array<{
                    __typename?: "InterfaceSpecificationDerivationCondition";
                    derivesInvisibleDerived: boolean;
                    derivesInvisibleSelfDefined: boolean;
                    derivesVisibleDerived: boolean;
                    derivesVisibleSelfDefined: boolean;
                    isInvisibleDerived: boolean;
                    isVisibleDerived: boolean;
                    derivableInterfaceSpecifications: {
                        __typename?: "InterfaceSpecificationTemplateConnection";
                        nodes: Array<{ __typename?: "InterfaceSpecificationTemplate"; id: string }>;
                    };
                }>;
            };
        }>;
    };
    templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
};

export type GetFullIssueTemplateQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;

export type GetFullIssueTemplateQuery = {
    __typename?: "Query";
    node?:
        | { __typename?: "AddedAffectedEntityEvent" }
        | { __typename?: "AddedArtefactEvent" }
        | { __typename?: "AddedLabelEvent" }
        | { __typename?: "AddedToPinnedIssuesEvent" }
        | { __typename?: "AddedToTrackableEvent" }
        | { __typename?: "AggregatedIssue" }
        | { __typename?: "AggregatedIssueRelation" }
        | { __typename?: "Artefact" }
        | { __typename?: "ArtefactTemplate" }
        | { __typename?: "Assignment" }
        | { __typename?: "AssignmentType" }
        | { __typename?: "AssignmentTypeChangedEvent" }
        | { __typename?: "Body" }
        | { __typename?: "Component" }
        | { __typename?: "ComponentPermission" }
        | { __typename?: "ComponentTemplate" }
        | { __typename?: "ComponentVersion" }
        | { __typename?: "ComponentVersionTemplate" }
        | { __typename?: "DueDateChangedEvent" }
        | { __typename?: "EstimatedTimeChangedEvent" }
        | { __typename?: "FillStyle" }
        | { __typename?: "GlobalPermission" }
        | { __typename?: "GropiusUser" }
        | { __typename?: "IMS" }
        | { __typename?: "IMSIssue" }
        | { __typename?: "IMSIssueTemplate" }
        | { __typename?: "IMSPermission" }
        | { __typename?: "IMSProject" }
        | { __typename?: "IMSProjectTemplate" }
        | { __typename?: "IMSTemplate" }
        | { __typename?: "IMSUser" }
        | { __typename?: "IMSUserTemplate" }
        | { __typename?: "IncomingRelationTypeChangedEvent" }
        | { __typename?: "Interface" }
        | { __typename?: "InterfaceDefinition" }
        | { __typename?: "InterfaceDefinitionTemplate" }
        | { __typename?: "InterfacePart" }
        | { __typename?: "InterfacePartTemplate" }
        | { __typename?: "InterfaceSpecification" }
        | { __typename?: "InterfaceSpecificationDerivationCondition" }
        | { __typename?: "InterfaceSpecificationTemplate" }
        | { __typename?: "InterfaceSpecificationVersion" }
        | { __typename?: "InterfaceSpecificationVersionTemplate" }
        | { __typename?: "InterfaceTemplate" }
        | { __typename?: "IntraComponentDependencyParticipant" }
        | { __typename?: "IntraComponentDependencySpecification" }
        | { __typename?: "Issue" }
        | { __typename?: "IssueComment" }
        | { __typename?: "IssuePriority" }
        | { __typename?: "IssueRelation" }
        | { __typename?: "IssueRelationType" }
        | { __typename?: "IssueState" }
        | {
              __typename?: "IssueTemplate";
              id: string;
              name: string;
              description: string;
              extends: {
                  __typename?: "IssueTemplateConnection";
                  nodes: Array<{ __typename?: "IssueTemplate"; id: string }>;
              };
              assignmentTypes: {
                  __typename?: "AssignmentTypeConnection";
                  nodes: Array<{ __typename?: "AssignmentType"; id: string; name: string; description: string }>;
              };
              issueTypes: {
                  __typename?: "IssueTypeConnection";
                  nodes: Array<{
                      __typename?: "IssueType";
                      id: string;
                      name: string;
                      description: string;
                      iconPath: string;
                  }>;
              };
              issueStates: {
                  __typename?: "IssueStateConnection";
                  nodes: Array<{
                      __typename?: "IssueState";
                      id: string;
                      name: string;
                      description: string;
                      isOpen: boolean;
                  }>;
              };
              issuePriorities: {
                  __typename?: "IssuePriorityConnection";
                  nodes: Array<{
                      __typename?: "IssuePriority";
                      id: string;
                      name: string;
                      description: string;
                      value: number;
                  }>;
              };
              relationTypes: {
                  __typename?: "IssueRelationTypeConnection";
                  nodes: Array<{
                      __typename?: "IssueRelationType";
                      id: string;
                      name: string;
                      inverseName: string;
                      description: string;
                  }>;
              };
              templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
          }
        | { __typename?: "IssueType" }
        | { __typename?: "Label" }
        | { __typename?: "MetaAggregatedIssueRelation" }
        | { __typename?: "OutgoingRelationTypeChangedEvent" }
        | { __typename?: "PriorityChangedEvent" }
        | { __typename?: "Project" }
        | { __typename?: "ProjectPermission" }
        | { __typename?: "RelatedByIssueEvent" }
        | { __typename?: "Relation" }
        | { __typename?: "RelationCondition" }
        | { __typename?: "RelationTemplate" }
        | { __typename?: "RemovedAffectedEntityEvent" }
        | { __typename?: "RemovedArtefactEvent" }
        | { __typename?: "RemovedAssignmentEvent" }
        | { __typename?: "RemovedFromPinnedIssuesEvent" }
        | { __typename?: "RemovedFromTrackableEvent" }
        | { __typename?: "RemovedIncomingRelationEvent" }
        | { __typename?: "RemovedLabelEvent" }
        | { __typename?: "RemovedOutgoingRelationEvent" }
        | { __typename?: "RemovedTemplatedFieldEvent" }
        | { __typename?: "SpentTimeChangedEvent" }
        | { __typename?: "StartDateChangedEvent" }
        | { __typename?: "StateChangedEvent" }
        | { __typename?: "StrokeStyle" }
        | { __typename?: "TemplateChangedEvent" }
        | { __typename?: "TemplatedFieldChangedEvent" }
        | { __typename?: "TitleChangedEvent" }
        | { __typename?: "TypeChangedEvent" }
        | null;
};

export type GetFullComponentTemplateQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;

export type GetFullComponentTemplateQuery = {
    __typename?: "Query";
    node?:
        | { __typename?: "AddedAffectedEntityEvent" }
        | { __typename?: "AddedArtefactEvent" }
        | { __typename?: "AddedLabelEvent" }
        | { __typename?: "AddedToPinnedIssuesEvent" }
        | { __typename?: "AddedToTrackableEvent" }
        | { __typename?: "AggregatedIssue" }
        | { __typename?: "AggregatedIssueRelation" }
        | { __typename?: "Artefact" }
        | { __typename?: "ArtefactTemplate" }
        | { __typename?: "Assignment" }
        | { __typename?: "AssignmentType" }
        | { __typename?: "AssignmentTypeChangedEvent" }
        | { __typename?: "Body" }
        | { __typename?: "Component" }
        | { __typename?: "ComponentPermission" }
        | {
              __typename?: "ComponentTemplate";
              shapeRadius?: number | null;
              shapeType: ShapeType;
              id: string;
              name: string;
              description: string;
              extends: {
                  __typename?: "ComponentTemplateConnection";
                  nodes: Array<{ __typename?: "ComponentTemplate"; id: string }>;
              };
              componentVersionTemplate: {
                  __typename?: "ComponentVersionTemplate";
                  id: string;
                  name: string;
                  description: string;
                  templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
              };
              fill?: { __typename?: "FillStyle"; id: string; color: string } | null;
              stroke?: {
                  __typename?: "StrokeStyle";
                  id: string;
                  color?: string | null;
                  dash?: Array<number> | null;
              } | null;
              templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
          }
        | { __typename?: "ComponentVersion" }
        | { __typename?: "ComponentVersionTemplate" }
        | { __typename?: "DueDateChangedEvent" }
        | { __typename?: "EstimatedTimeChangedEvent" }
        | { __typename?: "FillStyle" }
        | { __typename?: "GlobalPermission" }
        | { __typename?: "GropiusUser" }
        | { __typename?: "IMS" }
        | { __typename?: "IMSIssue" }
        | { __typename?: "IMSIssueTemplate" }
        | { __typename?: "IMSPermission" }
        | { __typename?: "IMSProject" }
        | { __typename?: "IMSProjectTemplate" }
        | { __typename?: "IMSTemplate" }
        | { __typename?: "IMSUser" }
        | { __typename?: "IMSUserTemplate" }
        | { __typename?: "IncomingRelationTypeChangedEvent" }
        | { __typename?: "Interface" }
        | { __typename?: "InterfaceDefinition" }
        | { __typename?: "InterfaceDefinitionTemplate" }
        | { __typename?: "InterfacePart" }
        | { __typename?: "InterfacePartTemplate" }
        | { __typename?: "InterfaceSpecification" }
        | { __typename?: "InterfaceSpecificationDerivationCondition" }
        | { __typename?: "InterfaceSpecificationTemplate" }
        | { __typename?: "InterfaceSpecificationVersion" }
        | { __typename?: "InterfaceSpecificationVersionTemplate" }
        | { __typename?: "InterfaceTemplate" }
        | { __typename?: "IntraComponentDependencyParticipant" }
        | { __typename?: "IntraComponentDependencySpecification" }
        | { __typename?: "Issue" }
        | { __typename?: "IssueComment" }
        | { __typename?: "IssuePriority" }
        | { __typename?: "IssueRelation" }
        | { __typename?: "IssueRelationType" }
        | { __typename?: "IssueState" }
        | { __typename?: "IssueTemplate" }
        | { __typename?: "IssueType" }
        | { __typename?: "Label" }
        | { __typename?: "MetaAggregatedIssueRelation" }
        | { __typename?: "OutgoingRelationTypeChangedEvent" }
        | { __typename?: "PriorityChangedEvent" }
        | { __typename?: "Project" }
        | { __typename?: "ProjectPermission" }
        | { __typename?: "RelatedByIssueEvent" }
        | { __typename?: "Relation" }
        | { __typename?: "RelationCondition" }
        | { __typename?: "RelationTemplate" }
        | { __typename?: "RemovedAffectedEntityEvent" }
        | { __typename?: "RemovedArtefactEvent" }
        | { __typename?: "RemovedAssignmentEvent" }
        | { __typename?: "RemovedFromPinnedIssuesEvent" }
        | { __typename?: "RemovedFromTrackableEvent" }
        | { __typename?: "RemovedIncomingRelationEvent" }
        | { __typename?: "RemovedLabelEvent" }
        | { __typename?: "RemovedOutgoingRelationEvent" }
        | { __typename?: "RemovedTemplatedFieldEvent" }
        | { __typename?: "SpentTimeChangedEvent" }
        | { __typename?: "StartDateChangedEvent" }
        | { __typename?: "StateChangedEvent" }
        | { __typename?: "StrokeStyle" }
        | { __typename?: "TemplateChangedEvent" }
        | { __typename?: "TemplatedFieldChangedEvent" }
        | { __typename?: "TitleChangedEvent" }
        | { __typename?: "TypeChangedEvent" }
        | null;
};

export type GetFullInterfaceSpecificationTemplateQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;

export type GetFullInterfaceSpecificationTemplateQuery = {
    __typename?: "Query";
    node?:
        | { __typename?: "AddedAffectedEntityEvent" }
        | { __typename?: "AddedArtefactEvent" }
        | { __typename?: "AddedLabelEvent" }
        | { __typename?: "AddedToPinnedIssuesEvent" }
        | { __typename?: "AddedToTrackableEvent" }
        | { __typename?: "AggregatedIssue" }
        | { __typename?: "AggregatedIssueRelation" }
        | { __typename?: "Artefact" }
        | { __typename?: "ArtefactTemplate" }
        | { __typename?: "Assignment" }
        | { __typename?: "AssignmentType" }
        | { __typename?: "AssignmentTypeChangedEvent" }
        | { __typename?: "Body" }
        | { __typename?: "Component" }
        | { __typename?: "ComponentPermission" }
        | { __typename?: "ComponentTemplate" }
        | { __typename?: "ComponentVersion" }
        | { __typename?: "ComponentVersionTemplate" }
        | { __typename?: "DueDateChangedEvent" }
        | { __typename?: "EstimatedTimeChangedEvent" }
        | { __typename?: "FillStyle" }
        | { __typename?: "GlobalPermission" }
        | { __typename?: "GropiusUser" }
        | { __typename?: "IMS" }
        | { __typename?: "IMSIssue" }
        | { __typename?: "IMSIssueTemplate" }
        | { __typename?: "IMSPermission" }
        | { __typename?: "IMSProject" }
        | { __typename?: "IMSProjectTemplate" }
        | { __typename?: "IMSTemplate" }
        | { __typename?: "IMSUser" }
        | { __typename?: "IMSUserTemplate" }
        | { __typename?: "IncomingRelationTypeChangedEvent" }
        | { __typename?: "Interface" }
        | { __typename?: "InterfaceDefinition" }
        | { __typename?: "InterfaceDefinitionTemplate" }
        | { __typename?: "InterfacePart" }
        | { __typename?: "InterfacePartTemplate" }
        | { __typename?: "InterfaceSpecification" }
        | { __typename?: "InterfaceSpecificationDerivationCondition" }
        | {
              __typename?: "InterfaceSpecificationTemplate";
              shapeRadius?: number | null;
              shapeType: ShapeType;
              id: string;
              name: string;
              description: string;
              extends: {
                  __typename?: "InterfaceSpecificationTemplateConnection";
                  nodes: Array<{ __typename?: "InterfaceSpecificationTemplate"; id: string }>;
              };
              canBeVisibleOnComponents: {
                  __typename?: "ComponentTemplateConnection";
                  nodes: Array<{ __typename?: "ComponentTemplate"; id: string }>;
              };
              canBeInvisibleOnComponents: {
                  __typename?: "ComponentTemplateConnection";
                  nodes: Array<{ __typename?: "ComponentTemplate"; id: string }>;
              };
              interfaceSpecificationVersionTemplate: {
                  __typename?: "InterfaceSpecificationVersionTemplate";
                  id: string;
                  name: string;
                  description: string;
                  templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
              };
              interfaceDefinitionTemplate: {
                  __typename?: "InterfaceDefinitionTemplate";
                  id: string;
                  name: string;
                  description: string;
                  templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
              };
              interfaceTemplate: {
                  __typename?: "InterfaceTemplate";
                  id: string;
                  name: string;
                  description: string;
                  templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
              };
              interfacePartTemplate: {
                  __typename?: "InterfacePartTemplate";
                  id: string;
                  name: string;
                  description: string;
                  templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
              };
              fill?: { __typename?: "FillStyle"; id: string; color: string } | null;
              stroke?: {
                  __typename?: "StrokeStyle";
                  id: string;
                  color?: string | null;
                  dash?: Array<number> | null;
              } | null;
              templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
          }
        | { __typename?: "InterfaceSpecificationVersion" }
        | { __typename?: "InterfaceSpecificationVersionTemplate" }
        | { __typename?: "InterfaceTemplate" }
        | { __typename?: "IntraComponentDependencyParticipant" }
        | { __typename?: "IntraComponentDependencySpecification" }
        | { __typename?: "Issue" }
        | { __typename?: "IssueComment" }
        | { __typename?: "IssuePriority" }
        | { __typename?: "IssueRelation" }
        | { __typename?: "IssueRelationType" }
        | { __typename?: "IssueState" }
        | { __typename?: "IssueTemplate" }
        | { __typename?: "IssueType" }
        | { __typename?: "Label" }
        | { __typename?: "MetaAggregatedIssueRelation" }
        | { __typename?: "OutgoingRelationTypeChangedEvent" }
        | { __typename?: "PriorityChangedEvent" }
        | { __typename?: "Project" }
        | { __typename?: "ProjectPermission" }
        | { __typename?: "RelatedByIssueEvent" }
        | { __typename?: "Relation" }
        | { __typename?: "RelationCondition" }
        | { __typename?: "RelationTemplate" }
        | { __typename?: "RemovedAffectedEntityEvent" }
        | { __typename?: "RemovedArtefactEvent" }
        | { __typename?: "RemovedAssignmentEvent" }
        | { __typename?: "RemovedFromPinnedIssuesEvent" }
        | { __typename?: "RemovedFromTrackableEvent" }
        | { __typename?: "RemovedIncomingRelationEvent" }
        | { __typename?: "RemovedLabelEvent" }
        | { __typename?: "RemovedOutgoingRelationEvent" }
        | { __typename?: "RemovedTemplatedFieldEvent" }
        | { __typename?: "SpentTimeChangedEvent" }
        | { __typename?: "StartDateChangedEvent" }
        | { __typename?: "StateChangedEvent" }
        | { __typename?: "StrokeStyle" }
        | { __typename?: "TemplateChangedEvent" }
        | { __typename?: "TemplatedFieldChangedEvent" }
        | { __typename?: "TitleChangedEvent" }
        | { __typename?: "TypeChangedEvent" }
        | null;
};

export type GetFullArtefactTemplateQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;

export type GetFullArtefactTemplateQuery = {
    __typename?: "Query";
    node?:
        | { __typename?: "AddedAffectedEntityEvent" }
        | { __typename?: "AddedArtefactEvent" }
        | { __typename?: "AddedLabelEvent" }
        | { __typename?: "AddedToPinnedIssuesEvent" }
        | { __typename?: "AddedToTrackableEvent" }
        | { __typename?: "AggregatedIssue" }
        | { __typename?: "AggregatedIssueRelation" }
        | { __typename?: "Artefact" }
        | {
              __typename?: "ArtefactTemplate";
              id: string;
              name: string;
              description: string;
              extends: {
                  __typename?: "ArtefactTemplateConnection";
                  nodes: Array<{ __typename?: "ArtefactTemplate"; id: string }>;
              };
              templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
          }
        | { __typename?: "Assignment" }
        | { __typename?: "AssignmentType" }
        | { __typename?: "AssignmentTypeChangedEvent" }
        | { __typename?: "Body" }
        | { __typename?: "Component" }
        | { __typename?: "ComponentPermission" }
        | { __typename?: "ComponentTemplate" }
        | { __typename?: "ComponentVersion" }
        | { __typename?: "ComponentVersionTemplate" }
        | { __typename?: "DueDateChangedEvent" }
        | { __typename?: "EstimatedTimeChangedEvent" }
        | { __typename?: "FillStyle" }
        | { __typename?: "GlobalPermission" }
        | { __typename?: "GropiusUser" }
        | { __typename?: "IMS" }
        | { __typename?: "IMSIssue" }
        | { __typename?: "IMSIssueTemplate" }
        | { __typename?: "IMSPermission" }
        | { __typename?: "IMSProject" }
        | { __typename?: "IMSProjectTemplate" }
        | { __typename?: "IMSTemplate" }
        | { __typename?: "IMSUser" }
        | { __typename?: "IMSUserTemplate" }
        | { __typename?: "IncomingRelationTypeChangedEvent" }
        | { __typename?: "Interface" }
        | { __typename?: "InterfaceDefinition" }
        | { __typename?: "InterfaceDefinitionTemplate" }
        | { __typename?: "InterfacePart" }
        | { __typename?: "InterfacePartTemplate" }
        | { __typename?: "InterfaceSpecification" }
        | { __typename?: "InterfaceSpecificationDerivationCondition" }
        | { __typename?: "InterfaceSpecificationTemplate" }
        | { __typename?: "InterfaceSpecificationVersion" }
        | { __typename?: "InterfaceSpecificationVersionTemplate" }
        | { __typename?: "InterfaceTemplate" }
        | { __typename?: "IntraComponentDependencyParticipant" }
        | { __typename?: "IntraComponentDependencySpecification" }
        | { __typename?: "Issue" }
        | { __typename?: "IssueComment" }
        | { __typename?: "IssuePriority" }
        | { __typename?: "IssueRelation" }
        | { __typename?: "IssueRelationType" }
        | { __typename?: "IssueState" }
        | { __typename?: "IssueTemplate" }
        | { __typename?: "IssueType" }
        | { __typename?: "Label" }
        | { __typename?: "MetaAggregatedIssueRelation" }
        | { __typename?: "OutgoingRelationTypeChangedEvent" }
        | { __typename?: "PriorityChangedEvent" }
        | { __typename?: "Project" }
        | { __typename?: "ProjectPermission" }
        | { __typename?: "RelatedByIssueEvent" }
        | { __typename?: "Relation" }
        | { __typename?: "RelationCondition" }
        | { __typename?: "RelationTemplate" }
        | { __typename?: "RemovedAffectedEntityEvent" }
        | { __typename?: "RemovedArtefactEvent" }
        | { __typename?: "RemovedAssignmentEvent" }
        | { __typename?: "RemovedFromPinnedIssuesEvent" }
        | { __typename?: "RemovedFromTrackableEvent" }
        | { __typename?: "RemovedIncomingRelationEvent" }
        | { __typename?: "RemovedLabelEvent" }
        | { __typename?: "RemovedOutgoingRelationEvent" }
        | { __typename?: "RemovedTemplatedFieldEvent" }
        | { __typename?: "SpentTimeChangedEvent" }
        | { __typename?: "StartDateChangedEvent" }
        | { __typename?: "StateChangedEvent" }
        | { __typename?: "StrokeStyle" }
        | { __typename?: "TemplateChangedEvent" }
        | { __typename?: "TemplatedFieldChangedEvent" }
        | { __typename?: "TitleChangedEvent" }
        | { __typename?: "TypeChangedEvent" }
        | null;
};

export type GetFullRelationTemplateQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;

export type GetFullRelationTemplateQuery = {
    __typename?: "Query";
    node?:
        | { __typename?: "AddedAffectedEntityEvent" }
        | { __typename?: "AddedArtefactEvent" }
        | { __typename?: "AddedLabelEvent" }
        | { __typename?: "AddedToPinnedIssuesEvent" }
        | { __typename?: "AddedToTrackableEvent" }
        | { __typename?: "AggregatedIssue" }
        | { __typename?: "AggregatedIssueRelation" }
        | { __typename?: "Artefact" }
        | { __typename?: "ArtefactTemplate" }
        | { __typename?: "Assignment" }
        | { __typename?: "AssignmentType" }
        | { __typename?: "AssignmentTypeChangedEvent" }
        | { __typename?: "Body" }
        | { __typename?: "Component" }
        | { __typename?: "ComponentPermission" }
        | { __typename?: "ComponentTemplate" }
        | { __typename?: "ComponentVersion" }
        | { __typename?: "ComponentVersionTemplate" }
        | { __typename?: "DueDateChangedEvent" }
        | { __typename?: "EstimatedTimeChangedEvent" }
        | { __typename?: "FillStyle" }
        | { __typename?: "GlobalPermission" }
        | { __typename?: "GropiusUser" }
        | { __typename?: "IMS" }
        | { __typename?: "IMSIssue" }
        | { __typename?: "IMSIssueTemplate" }
        | { __typename?: "IMSPermission" }
        | { __typename?: "IMSProject" }
        | { __typename?: "IMSProjectTemplate" }
        | { __typename?: "IMSTemplate" }
        | { __typename?: "IMSUser" }
        | { __typename?: "IMSUserTemplate" }
        | { __typename?: "IncomingRelationTypeChangedEvent" }
        | { __typename?: "Interface" }
        | { __typename?: "InterfaceDefinition" }
        | { __typename?: "InterfaceDefinitionTemplate" }
        | { __typename?: "InterfacePart" }
        | { __typename?: "InterfacePartTemplate" }
        | { __typename?: "InterfaceSpecification" }
        | { __typename?: "InterfaceSpecificationDerivationCondition" }
        | { __typename?: "InterfaceSpecificationTemplate" }
        | { __typename?: "InterfaceSpecificationVersion" }
        | { __typename?: "InterfaceSpecificationVersionTemplate" }
        | { __typename?: "InterfaceTemplate" }
        | { __typename?: "IntraComponentDependencyParticipant" }
        | { __typename?: "IntraComponentDependencySpecification" }
        | { __typename?: "Issue" }
        | { __typename?: "IssueComment" }
        | { __typename?: "IssuePriority" }
        | { __typename?: "IssueRelation" }
        | { __typename?: "IssueRelationType" }
        | { __typename?: "IssueState" }
        | { __typename?: "IssueTemplate" }
        | { __typename?: "IssueType" }
        | { __typename?: "Label" }
        | { __typename?: "MetaAggregatedIssueRelation" }
        | { __typename?: "OutgoingRelationTypeChangedEvent" }
        | { __typename?: "PriorityChangedEvent" }
        | { __typename?: "Project" }
        | { __typename?: "ProjectPermission" }
        | { __typename?: "RelatedByIssueEvent" }
        | { __typename?: "Relation" }
        | { __typename?: "RelationCondition" }
        | {
              __typename?: "RelationTemplate";
              markerType: MarkerType;
              id: string;
              name: string;
              description: string;
              extends: {
                  __typename?: "RelationTemplateConnection";
                  nodes: Array<{ __typename?: "RelationTemplate"; id: string }>;
              };
              stroke?: {
                  __typename?: "StrokeStyle";
                  id: string;
                  color?: string | null;
                  dash?: Array<number> | null;
              } | null;
              relationConditions: {
                  __typename?: "RelationConditionConnection";
                  nodes: Array<{
                      __typename?: "RelationCondition";
                      from: {
                          __typename?: "RelationPartnerTemplateConnection";
                          nodes: Array<
                              | { __typename?: "ComponentTemplate"; id: string }
                              | { __typename?: "InterfaceSpecificationTemplate"; id: string }
                          >;
                      };
                      to: {
                          __typename?: "RelationPartnerTemplateConnection";
                          nodes: Array<
                              | { __typename?: "ComponentTemplate"; id: string }
                              | { __typename?: "InterfaceSpecificationTemplate"; id: string }
                          >;
                      };
                      interfaceSpecificationDerivationConditions: {
                          __typename?: "InterfaceSpecificationDerivationConditionConnection";
                          nodes: Array<{
                              __typename?: "InterfaceSpecificationDerivationCondition";
                              derivesInvisibleDerived: boolean;
                              derivesInvisibleSelfDefined: boolean;
                              derivesVisibleDerived: boolean;
                              derivesVisibleSelfDefined: boolean;
                              isInvisibleDerived: boolean;
                              isVisibleDerived: boolean;
                              derivableInterfaceSpecifications: {
                                  __typename?: "InterfaceSpecificationTemplateConnection";
                                  nodes: Array<{ __typename?: "InterfaceSpecificationTemplate"; id: string }>;
                              };
                          }>;
                      };
                  }>;
              };
              templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
          }
        | { __typename?: "RemovedAffectedEntityEvent" }
        | { __typename?: "RemovedArtefactEvent" }
        | { __typename?: "RemovedAssignmentEvent" }
        | { __typename?: "RemovedFromPinnedIssuesEvent" }
        | { __typename?: "RemovedFromTrackableEvent" }
        | { __typename?: "RemovedIncomingRelationEvent" }
        | { __typename?: "RemovedLabelEvent" }
        | { __typename?: "RemovedOutgoingRelationEvent" }
        | { __typename?: "RemovedTemplatedFieldEvent" }
        | { __typename?: "SpentTimeChangedEvent" }
        | { __typename?: "StartDateChangedEvent" }
        | { __typename?: "StateChangedEvent" }
        | { __typename?: "StrokeStyle" }
        | { __typename?: "TemplateChangedEvent" }
        | { __typename?: "TemplatedFieldChangedEvent" }
        | { __typename?: "TitleChangedEvent" }
        | { __typename?: "TypeChangedEvent" }
        | null;
};

export type GetFullTemplateQueryVariables = Exact<{
    id: Scalars["ID"]["input"];
}>;

export type GetFullTemplateQuery = {
    __typename?: "Query";
    node?:
        | { __typename?: "AddedAffectedEntityEvent" }
        | { __typename?: "AddedArtefactEvent" }
        | { __typename?: "AddedLabelEvent" }
        | { __typename?: "AddedToPinnedIssuesEvent" }
        | { __typename?: "AddedToTrackableEvent" }
        | { __typename?: "AggregatedIssue" }
        | { __typename?: "AggregatedIssueRelation" }
        | { __typename?: "Artefact" }
        | {
              __typename?: "ArtefactTemplate";
              id: string;
              name: string;
              description: string;
              extends: {
                  __typename?: "ArtefactTemplateConnection";
                  nodes: Array<{ __typename?: "ArtefactTemplate"; id: string }>;
              };
              templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
          }
        | { __typename?: "Assignment" }
        | { __typename?: "AssignmentType" }
        | { __typename?: "AssignmentTypeChangedEvent" }
        | { __typename?: "Body" }
        | { __typename?: "Component" }
        | { __typename?: "ComponentPermission" }
        | {
              __typename?: "ComponentTemplate";
              shapeRadius?: number | null;
              shapeType: ShapeType;
              id: string;
              name: string;
              description: string;
              extends: {
                  __typename?: "ComponentTemplateConnection";
                  nodes: Array<{ __typename?: "ComponentTemplate"; id: string }>;
              };
              componentVersionTemplate: {
                  __typename?: "ComponentVersionTemplate";
                  id: string;
                  name: string;
                  description: string;
                  templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
              };
              fill?: { __typename?: "FillStyle"; id: string; color: string } | null;
              stroke?: {
                  __typename?: "StrokeStyle";
                  id: string;
                  color?: string | null;
                  dash?: Array<number> | null;
              } | null;
              templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
          }
        | { __typename?: "ComponentVersion" }
        | { __typename?: "ComponentVersionTemplate" }
        | { __typename?: "DueDateChangedEvent" }
        | { __typename?: "EstimatedTimeChangedEvent" }
        | { __typename?: "FillStyle" }
        | { __typename?: "GlobalPermission" }
        | { __typename?: "GropiusUser" }
        | { __typename?: "IMS" }
        | { __typename?: "IMSIssue" }
        | { __typename?: "IMSIssueTemplate" }
        | { __typename?: "IMSPermission" }
        | { __typename?: "IMSProject" }
        | { __typename?: "IMSProjectTemplate" }
        | { __typename?: "IMSTemplate" }
        | { __typename?: "IMSUser" }
        | { __typename?: "IMSUserTemplate" }
        | { __typename?: "IncomingRelationTypeChangedEvent" }
        | { __typename?: "Interface" }
        | { __typename?: "InterfaceDefinition" }
        | { __typename?: "InterfaceDefinitionTemplate" }
        | { __typename?: "InterfacePart" }
        | { __typename?: "InterfacePartTemplate" }
        | { __typename?: "InterfaceSpecification" }
        | { __typename?: "InterfaceSpecificationDerivationCondition" }
        | {
              __typename?: "InterfaceSpecificationTemplate";
              shapeRadius?: number | null;
              shapeType: ShapeType;
              id: string;
              name: string;
              description: string;
              extends: {
                  __typename?: "InterfaceSpecificationTemplateConnection";
                  nodes: Array<{ __typename?: "InterfaceSpecificationTemplate"; id: string }>;
              };
              canBeVisibleOnComponents: {
                  __typename?: "ComponentTemplateConnection";
                  nodes: Array<{ __typename?: "ComponentTemplate"; id: string }>;
              };
              canBeInvisibleOnComponents: {
                  __typename?: "ComponentTemplateConnection";
                  nodes: Array<{ __typename?: "ComponentTemplate"; id: string }>;
              };
              interfaceSpecificationVersionTemplate: {
                  __typename?: "InterfaceSpecificationVersionTemplate";
                  id: string;
                  name: string;
                  description: string;
                  templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
              };
              interfaceDefinitionTemplate: {
                  __typename?: "InterfaceDefinitionTemplate";
                  id: string;
                  name: string;
                  description: string;
                  templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
              };
              interfaceTemplate: {
                  __typename?: "InterfaceTemplate";
                  id: string;
                  name: string;
                  description: string;
                  templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
              };
              interfacePartTemplate: {
                  __typename?: "InterfacePartTemplate";
                  id: string;
                  name: string;
                  description: string;
                  templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
              };
              fill?: { __typename?: "FillStyle"; id: string; color: string } | null;
              stroke?: {
                  __typename?: "StrokeStyle";
                  id: string;
                  color?: string | null;
                  dash?: Array<number> | null;
              } | null;
              templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
          }
        | { __typename?: "InterfaceSpecificationVersion" }
        | { __typename?: "InterfaceSpecificationVersionTemplate" }
        | { __typename?: "InterfaceTemplate" }
        | { __typename?: "IntraComponentDependencyParticipant" }
        | { __typename?: "IntraComponentDependencySpecification" }
        | { __typename?: "Issue" }
        | { __typename?: "IssueComment" }
        | { __typename?: "IssuePriority" }
        | { __typename?: "IssueRelation" }
        | { __typename?: "IssueRelationType" }
        | { __typename?: "IssueState" }
        | {
              __typename?: "IssueTemplate";
              id: string;
              name: string;
              description: string;
              extends: {
                  __typename?: "IssueTemplateConnection";
                  nodes: Array<{ __typename?: "IssueTemplate"; id: string }>;
              };
              assignmentTypes: {
                  __typename?: "AssignmentTypeConnection";
                  nodes: Array<{ __typename?: "AssignmentType"; id: string; name: string; description: string }>;
              };
              issueTypes: {
                  __typename?: "IssueTypeConnection";
                  nodes: Array<{
                      __typename?: "IssueType";
                      id: string;
                      name: string;
                      description: string;
                      iconPath: string;
                  }>;
              };
              issueStates: {
                  __typename?: "IssueStateConnection";
                  nodes: Array<{
                      __typename?: "IssueState";
                      id: string;
                      name: string;
                      description: string;
                      isOpen: boolean;
                  }>;
              };
              issuePriorities: {
                  __typename?: "IssuePriorityConnection";
                  nodes: Array<{
                      __typename?: "IssuePriority";
                      id: string;
                      name: string;
                      description: string;
                      value: number;
                  }>;
              };
              relationTypes: {
                  __typename?: "IssueRelationTypeConnection";
                  nodes: Array<{
                      __typename?: "IssueRelationType";
                      id: string;
                      name: string;
                      inverseName: string;
                      description: string;
                  }>;
              };
              templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
          }
        | { __typename?: "IssueType" }
        | { __typename?: "Label" }
        | { __typename?: "MetaAggregatedIssueRelation" }
        | { __typename?: "OutgoingRelationTypeChangedEvent" }
        | { __typename?: "PriorityChangedEvent" }
        | { __typename?: "Project" }
        | { __typename?: "ProjectPermission" }
        | { __typename?: "RelatedByIssueEvent" }
        | { __typename?: "Relation" }
        | { __typename?: "RelationCondition" }
        | {
              __typename?: "RelationTemplate";
              markerType: MarkerType;
              id: string;
              name: string;
              description: string;
              extends: {
                  __typename?: "RelationTemplateConnection";
                  nodes: Array<{ __typename?: "RelationTemplate"; id: string }>;
              };
              stroke?: {
                  __typename?: "StrokeStyle";
                  id: string;
                  color?: string | null;
                  dash?: Array<number> | null;
              } | null;
              relationConditions: {
                  __typename?: "RelationConditionConnection";
                  nodes: Array<{
                      __typename?: "RelationCondition";
                      from: {
                          __typename?: "RelationPartnerTemplateConnection";
                          nodes: Array<
                              | { __typename?: "ComponentTemplate"; id: string }
                              | { __typename?: "InterfaceSpecificationTemplate"; id: string }
                          >;
                      };
                      to: {
                          __typename?: "RelationPartnerTemplateConnection";
                          nodes: Array<
                              | { __typename?: "ComponentTemplate"; id: string }
                              | { __typename?: "InterfaceSpecificationTemplate"; id: string }
                          >;
                      };
                      interfaceSpecificationDerivationConditions: {
                          __typename?: "InterfaceSpecificationDerivationConditionConnection";
                          nodes: Array<{
                              __typename?: "InterfaceSpecificationDerivationCondition";
                              derivesInvisibleDerived: boolean;
                              derivesInvisibleSelfDefined: boolean;
                              derivesVisibleDerived: boolean;
                              derivesVisibleSelfDefined: boolean;
                              isInvisibleDerived: boolean;
                              isVisibleDerived: boolean;
                              derivableInterfaceSpecifications: {
                                  __typename?: "InterfaceSpecificationTemplateConnection";
                                  nodes: Array<{ __typename?: "InterfaceSpecificationTemplate"; id: string }>;
                              };
                          }>;
                      };
                  }>;
              };
              templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
          }
        | { __typename?: "RemovedAffectedEntityEvent" }
        | { __typename?: "RemovedArtefactEvent" }
        | { __typename?: "RemovedAssignmentEvent" }
        | { __typename?: "RemovedFromPinnedIssuesEvent" }
        | { __typename?: "RemovedFromTrackableEvent" }
        | { __typename?: "RemovedIncomingRelationEvent" }
        | { __typename?: "RemovedLabelEvent" }
        | { __typename?: "RemovedOutgoingRelationEvent" }
        | { __typename?: "RemovedTemplatedFieldEvent" }
        | { __typename?: "SpentTimeChangedEvent" }
        | { __typename?: "StartDateChangedEvent" }
        | { __typename?: "StateChangedEvent" }
        | { __typename?: "StrokeStyle" }
        | { __typename?: "TemplateChangedEvent" }
        | { __typename?: "TemplatedFieldChangedEvent" }
        | { __typename?: "TitleChangedEvent" }
        | { __typename?: "TypeChangedEvent" }
        | null;
};

export type CreateIssueTemplateMutationVariables = Exact<{
    input: CreateIssueTemplateInput;
}>;

export type CreateIssueTemplateMutation = {
    __typename?: "Mutation";
    createIssueTemplate: {
        __typename?: "CreateIssueTemplatePayload";
        issueTemplate: {
            __typename?: "IssueTemplate";
            id: string;
            name: string;
            description: string;
            extends: {
                __typename?: "IssueTemplateConnection";
                nodes: Array<{ __typename?: "IssueTemplate"; id: string }>;
            };
            assignmentTypes: {
                __typename?: "AssignmentTypeConnection";
                nodes: Array<{ __typename?: "AssignmentType"; id: string; name: string; description: string }>;
            };
            issueTypes: {
                __typename?: "IssueTypeConnection";
                nodes: Array<{
                    __typename?: "IssueType";
                    id: string;
                    name: string;
                    description: string;
                    iconPath: string;
                }>;
            };
            issueStates: {
                __typename?: "IssueStateConnection";
                nodes: Array<{
                    __typename?: "IssueState";
                    id: string;
                    name: string;
                    description: string;
                    isOpen: boolean;
                }>;
            };
            issuePriorities: {
                __typename?: "IssuePriorityConnection";
                nodes: Array<{
                    __typename?: "IssuePriority";
                    id: string;
                    name: string;
                    description: string;
                    value: number;
                }>;
            };
            relationTypes: {
                __typename?: "IssueRelationTypeConnection";
                nodes: Array<{
                    __typename?: "IssueRelationType";
                    id: string;
                    name: string;
                    inverseName: string;
                    description: string;
                }>;
            };
            templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
        };
    };
};

export type CreateComponentTemplateMutationVariables = Exact<{
    input: CreateComponentTemplateInput;
}>;

export type CreateComponentTemplateMutation = {
    __typename?: "Mutation";
    createComponentTemplate: {
        __typename?: "CreateComponentTemplatePayload";
        componentTemplate: {
            __typename?: "ComponentTemplate";
            shapeRadius?: number | null;
            shapeType: ShapeType;
            id: string;
            name: string;
            description: string;
            extends: {
                __typename?: "ComponentTemplateConnection";
                nodes: Array<{ __typename?: "ComponentTemplate"; id: string }>;
            };
            componentVersionTemplate: {
                __typename?: "ComponentVersionTemplate";
                id: string;
                name: string;
                description: string;
                templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
            };
            fill?: { __typename?: "FillStyle"; id: string; color: string } | null;
            stroke?: {
                __typename?: "StrokeStyle";
                id: string;
                color?: string | null;
                dash?: Array<number> | null;
            } | null;
            templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
        };
    };
};

export type CreateInterfaceSpecificationTemplateMutationVariables = Exact<{
    input: CreateInterfaceSpecificationTemplateInput;
}>;

export type CreateInterfaceSpecificationTemplateMutation = {
    __typename?: "Mutation";
    createInterfaceSpecificationTemplate: {
        __typename?: "CreateInterfaceSpecificationTemplatePayload";
        interfaceSpecificationTemplate: {
            __typename?: "InterfaceSpecificationTemplate";
            shapeRadius?: number | null;
            shapeType: ShapeType;
            id: string;
            name: string;
            description: string;
            extends: {
                __typename?: "InterfaceSpecificationTemplateConnection";
                nodes: Array<{ __typename?: "InterfaceSpecificationTemplate"; id: string }>;
            };
            canBeVisibleOnComponents: {
                __typename?: "ComponentTemplateConnection";
                nodes: Array<{ __typename?: "ComponentTemplate"; id: string }>;
            };
            canBeInvisibleOnComponents: {
                __typename?: "ComponentTemplateConnection";
                nodes: Array<{ __typename?: "ComponentTemplate"; id: string }>;
            };
            interfaceSpecificationVersionTemplate: {
                __typename?: "InterfaceSpecificationVersionTemplate";
                id: string;
                name: string;
                description: string;
                templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
            };
            interfaceDefinitionTemplate: {
                __typename?: "InterfaceDefinitionTemplate";
                id: string;
                name: string;
                description: string;
                templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
            };
            interfaceTemplate: {
                __typename?: "InterfaceTemplate";
                id: string;
                name: string;
                description: string;
                templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
            };
            interfacePartTemplate: {
                __typename?: "InterfacePartTemplate";
                id: string;
                name: string;
                description: string;
                templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
            };
            fill?: { __typename?: "FillStyle"; id: string; color: string } | null;
            stroke?: {
                __typename?: "StrokeStyle";
                id: string;
                color?: string | null;
                dash?: Array<number> | null;
            } | null;
            templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
        };
    };
};

export type CreateArtefactTemplateMutationVariables = Exact<{
    input: CreateArtefactTemplateInput;
}>;

export type CreateArtefactTemplateMutation = {
    __typename?: "Mutation";
    createArtefactTemplate: {
        __typename?: "CreateArtefactTemplatePayload";
        artefactTemplate: {
            __typename?: "ArtefactTemplate";
            id: string;
            name: string;
            description: string;
            extends: {
                __typename?: "ArtefactTemplateConnection";
                nodes: Array<{ __typename?: "ArtefactTemplate"; id: string }>;
            };
            templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
        };
    };
};

export type CreateRelationTemplateMutationVariables = Exact<{
    input: CreateRelationTemplateInput;
}>;

export type CreateRelationTemplateMutation = {
    __typename?: "Mutation";
    createRelationTemplate: {
        __typename?: "CreateRelationTemplatePayload";
        relationTemplate: {
            __typename?: "RelationTemplate";
            markerType: MarkerType;
            id: string;
            name: string;
            description: string;
            extends: {
                __typename?: "RelationTemplateConnection";
                nodes: Array<{ __typename?: "RelationTemplate"; id: string }>;
            };
            stroke?: {
                __typename?: "StrokeStyle";
                id: string;
                color?: string | null;
                dash?: Array<number> | null;
            } | null;
            relationConditions: {
                __typename?: "RelationConditionConnection";
                nodes: Array<{
                    __typename?: "RelationCondition";
                    from: {
                        __typename?: "RelationPartnerTemplateConnection";
                        nodes: Array<
                            | { __typename?: "ComponentTemplate"; id: string }
                            | { __typename?: "InterfaceSpecificationTemplate"; id: string }
                        >;
                    };
                    to: {
                        __typename?: "RelationPartnerTemplateConnection";
                        nodes: Array<
                            | { __typename?: "ComponentTemplate"; id: string }
                            | { __typename?: "InterfaceSpecificationTemplate"; id: string }
                        >;
                    };
                    interfaceSpecificationDerivationConditions: {
                        __typename?: "InterfaceSpecificationDerivationConditionConnection";
                        nodes: Array<{
                            __typename?: "InterfaceSpecificationDerivationCondition";
                            derivesInvisibleDerived: boolean;
                            derivesInvisibleSelfDefined: boolean;
                            derivesVisibleDerived: boolean;
                            derivesVisibleSelfDefined: boolean;
                            isInvisibleDerived: boolean;
                            isVisibleDerived: boolean;
                            derivableInterfaceSpecifications: {
                                __typename?: "InterfaceSpecificationTemplateConnection";
                                nodes: Array<{ __typename?: "InterfaceSpecificationTemplate"; id: string }>;
                            };
                        }>;
                    };
                }>;
            };
            templateFieldSpecifications: Array<{ __typename?: "JSONField"; name: string; value?: any | null }>;
        };
    };
};

export const BaseTemplateInfoFragmentDoc = gql`
    fragment BaseTemplateInfo on BaseTemplate {
        id
        name
        description
        templateFieldSpecifications {
            name
            value
        }
    }
`;
export const FullIssueTemplateInfoFragmentDoc = gql`
    fragment FullIssueTemplateInfo on IssueTemplate {
        ...BaseTemplateInfo
        extends {
            nodes {
                id
            }
        }
        assignmentTypes {
            nodes {
                id
                name
                description
            }
        }
        issueTypes {
            nodes {
                id
                name
                description
                iconPath
            }
        }
        issueStates {
            nodes {
                id
                name
                description
                isOpen
            }
        }
        issuePriorities {
            nodes {
                id
                name
                description
                value
            }
        }
        relationTypes {
            nodes {
                id
                name
                inverseName
                description
            }
        }
    }
    ${BaseTemplateInfoFragmentDoc}
`;
export const RelationPartnerTemplateInfoFragmentDoc = gql`
    fragment RelationPartnerTemplateInfo on RelationPartnerTemplate {
        ...BaseTemplateInfo
        shapeRadius
        shapeType
        fill {
            id
            color
        }
        stroke {
            id
            color
            dash
        }
    }
    ${BaseTemplateInfoFragmentDoc}
`;
export const FullComponentTemplateInfoFragmentDoc = gql`
    fragment FullComponentTemplateInfo on ComponentTemplate {
        ...RelationPartnerTemplateInfo
        extends {
            nodes {
                id
            }
        }
        componentVersionTemplate {
            ...BaseTemplateInfo
        }
    }
    ${RelationPartnerTemplateInfoFragmentDoc}
    ${BaseTemplateInfoFragmentDoc}
`;
export const FullInterfaceSpecificationTemplateInfoFragmentDoc = gql`
    fragment FullInterfaceSpecificationTemplateInfo on InterfaceSpecificationTemplate {
        ...RelationPartnerTemplateInfo
        extends {
            nodes {
                id
            }
        }
        canBeVisibleOnComponents {
            nodes {
                id
            }
        }
        canBeInvisibleOnComponents {
            nodes {
                id
            }
        }
        interfaceSpecificationVersionTemplate {
            ...BaseTemplateInfo
        }
        interfaceDefinitionTemplate {
            ...BaseTemplateInfo
        }
        interfaceTemplate {
            ...BaseTemplateInfo
        }
        interfacePartTemplate {
            ...BaseTemplateInfo
        }
    }
    ${RelationPartnerTemplateInfoFragmentDoc}
    ${BaseTemplateInfoFragmentDoc}
`;
export const FullArtefactTemplateInfoFragmentDoc = gql`
    fragment FullArtefactTemplateInfo on ArtefactTemplate {
        ...BaseTemplateInfo
        extends {
            nodes {
                id
            }
        }
    }
    ${BaseTemplateInfoFragmentDoc}
`;
export const FullRelationTemplateInfoFragmentDoc = gql`
    fragment FullRelationTemplateInfo on RelationTemplate {
        ...BaseTemplateInfo
        extends {
            nodes {
                id
            }
        }
        markerType
        stroke {
            id
            color
            dash
        }
        relationConditions {
            nodes {
                from {
                    nodes {
                        id
                    }
                }
                to {
                    nodes {
                        id
                    }
                }
                interfaceSpecificationDerivationConditions {
                    nodes {
                        derivesInvisibleDerived
                        derivesInvisibleSelfDefined
                        derivesVisibleDerived
                        derivesVisibleSelfDefined
                        isInvisibleDerived
                        isVisibleDerived
                        derivableInterfaceSpecifications {
                            nodes {
                                id
                            }
                        }
                    }
                }
            }
        }
    }
    ${BaseTemplateInfoFragmentDoc}
`;
export const GetFullIssueTemplateDocument = gql`
    query getFullIssueTemplate($id: ID!) {
        node(id: $id) {
            ... on IssueTemplate {
                ...FullIssueTemplateInfo
            }
        }
    }
    ${FullIssueTemplateInfoFragmentDoc}
`;
export const GetFullComponentTemplateDocument = gql`
    query getFullComponentTemplate($id: ID!) {
        node(id: $id) {
            ... on ComponentTemplate {
                ...FullComponentTemplateInfo
            }
        }
    }
    ${FullComponentTemplateInfoFragmentDoc}
`;
export const GetFullInterfaceSpecificationTemplateDocument = gql`
    query getFullInterfaceSpecificationTemplate($id: ID!) {
        node(id: $id) {
            ... on InterfaceSpecificationTemplate {
                ...FullInterfaceSpecificationTemplateInfo
            }
        }
    }
    ${FullInterfaceSpecificationTemplateInfoFragmentDoc}
`;
export const GetFullArtefactTemplateDocument = gql`
    query getFullArtefactTemplate($id: ID!) {
        node(id: $id) {
            ... on ArtefactTemplate {
                ...FullArtefactTemplateInfo
            }
        }
    }
    ${FullArtefactTemplateInfoFragmentDoc}
`;
export const GetFullRelationTemplateDocument = gql`
    query getFullRelationTemplate($id: ID!) {
        node(id: $id) {
            ... on RelationTemplate {
                ...FullRelationTemplateInfo
            }
        }
    }
    ${FullRelationTemplateInfoFragmentDoc}
`;
export const GetFullTemplateDocument = gql`
    query getFullTemplate($id: ID!) {
        node(id: $id) {
            ... on IssueTemplate {
                ...FullIssueTemplateInfo
            }
            ... on ComponentTemplate {
                ...FullComponentTemplateInfo
            }
            ... on InterfaceSpecificationTemplate {
                ...FullInterfaceSpecificationTemplateInfo
            }
            ... on ArtefactTemplate {
                ...FullArtefactTemplateInfo
            }
            ... on RelationTemplate {
                ...FullRelationTemplateInfo
            }
        }
    }
    ${FullIssueTemplateInfoFragmentDoc}
    ${FullComponentTemplateInfoFragmentDoc}
    ${FullInterfaceSpecificationTemplateInfoFragmentDoc}
    ${FullArtefactTemplateInfoFragmentDoc}
    ${FullRelationTemplateInfoFragmentDoc}
`;
export const CreateIssueTemplateDocument = gql`
    mutation createIssueTemplate($input: CreateIssueTemplateInput!) {
        createIssueTemplate(input: $input) {
            issueTemplate {
                ...FullIssueTemplateInfo
            }
        }
    }
    ${FullIssueTemplateInfoFragmentDoc}
`;
export const CreateComponentTemplateDocument = gql`
    mutation createComponentTemplate($input: CreateComponentTemplateInput!) {
        createComponentTemplate(input: $input) {
            componentTemplate {
                ...FullComponentTemplateInfo
            }
        }
    }
    ${FullComponentTemplateInfoFragmentDoc}
`;
export const CreateInterfaceSpecificationTemplateDocument = gql`
    mutation createInterfaceSpecificationTemplate($input: CreateInterfaceSpecificationTemplateInput!) {
        createInterfaceSpecificationTemplate(input: $input) {
            interfaceSpecificationTemplate {
                ...FullInterfaceSpecificationTemplateInfo
            }
        }
    }
    ${FullInterfaceSpecificationTemplateInfoFragmentDoc}
`;
export const CreateArtefactTemplateDocument = gql`
    mutation createArtefactTemplate($input: CreateArtefactTemplateInput!) {
        createArtefactTemplate(input: $input) {
            artefactTemplate {
                ...FullArtefactTemplateInfo
            }
        }
    }
    ${FullArtefactTemplateInfoFragmentDoc}
`;
export const CreateRelationTemplateDocument = gql`
    mutation createRelationTemplate($input: CreateRelationTemplateInput!) {
        createRelationTemplate(input: $input) {
            relationTemplate {
                ...FullRelationTemplateInfo
            }
        }
    }
    ${FullRelationTemplateInfoFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
    action: (requestHeaders?: Record<string, string>) => Promise<T>,
    operationName: string,
    operationType?: string,
    variables?: any
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
    return {
        getFullIssueTemplate(
            variables: GetFullIssueTemplateQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<GetFullIssueTemplateQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<GetFullIssueTemplateQuery>(GetFullIssueTemplateDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "getFullIssueTemplate",
                "query",
                variables
            );
        },
        getFullComponentTemplate(
            variables: GetFullComponentTemplateQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<GetFullComponentTemplateQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<GetFullComponentTemplateQuery>(GetFullComponentTemplateDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "getFullComponentTemplate",
                "query",
                variables
            );
        },
        getFullInterfaceSpecificationTemplate(
            variables: GetFullInterfaceSpecificationTemplateQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<GetFullInterfaceSpecificationTemplateQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<GetFullInterfaceSpecificationTemplateQuery>(
                        GetFullInterfaceSpecificationTemplateDocument,
                        variables,
                        { ...requestHeaders, ...wrappedRequestHeaders }
                    ),
                "getFullInterfaceSpecificationTemplate",
                "query",
                variables
            );
        },
        getFullArtefactTemplate(
            variables: GetFullArtefactTemplateQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<GetFullArtefactTemplateQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<GetFullArtefactTemplateQuery>(GetFullArtefactTemplateDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "getFullArtefactTemplate",
                "query",
                variables
            );
        },
        getFullRelationTemplate(
            variables: GetFullRelationTemplateQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<GetFullRelationTemplateQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<GetFullRelationTemplateQuery>(GetFullRelationTemplateDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "getFullRelationTemplate",
                "query",
                variables
            );
        },
        getFullTemplate(
            variables: GetFullTemplateQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<GetFullTemplateQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<GetFullTemplateQuery>(GetFullTemplateDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "getFullTemplate",
                "query",
                variables
            );
        },
        createIssueTemplate(
            variables: CreateIssueTemplateMutationVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<CreateIssueTemplateMutation> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<CreateIssueTemplateMutation>(CreateIssueTemplateDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "createIssueTemplate",
                "mutation",
                variables
            );
        },
        createComponentTemplate(
            variables: CreateComponentTemplateMutationVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<CreateComponentTemplateMutation> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<CreateComponentTemplateMutation>(CreateComponentTemplateDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "createComponentTemplate",
                "mutation",
                variables
            );
        },
        createInterfaceSpecificationTemplate(
            variables: CreateInterfaceSpecificationTemplateMutationVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<CreateInterfaceSpecificationTemplateMutation> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<CreateInterfaceSpecificationTemplateMutation>(
                        CreateInterfaceSpecificationTemplateDocument,
                        variables,
                        { ...requestHeaders, ...wrappedRequestHeaders }
                    ),
                "createInterfaceSpecificationTemplate",
                "mutation",
                variables
            );
        },
        createArtefactTemplate(
            variables: CreateArtefactTemplateMutationVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<CreateArtefactTemplateMutation> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<CreateArtefactTemplateMutation>(CreateArtefactTemplateDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "createArtefactTemplate",
                "mutation",
                variables
            );
        },
        createRelationTemplate(
            variables: CreateRelationTemplateMutationVariables,
            requestHeaders?: GraphQLClientRequestHeaders
        ): Promise<CreateRelationTemplateMutation> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<CreateRelationTemplateMutation>(CreateRelationTemplateDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders
                    }),
                "createRelationTemplate",
                "mutation",
                variables
            );
        }
    };
}
export type Sdk = ReturnType<typeof getSdk>;
