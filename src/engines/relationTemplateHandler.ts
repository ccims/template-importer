import { FullRelationTemplateInfoFragment, MarkerType, RelationConditionInput } from "../graphql/generated";
import { RelationTemplateDefinition } from "../model/relationTemplateDefinition";
import { RelationPartnerTemplateHandler } from "./relationPartnerTemplateHandler";
import { Context, TemplateHandler } from "./templateHandler";

export class RelationTemplateHandler extends TemplateHandler<
    RelationTemplateDefinition,
    FullRelationTemplateInfoFragment
> {
    async getRelationConditions(definition: RelationTemplateDefinition): Promise<RelationConditionInput[]> {
        const res: RelationConditionInput[] = [];
        if (definition.relationConditions != undefined) {
            for (const condition of definition.relationConditions) {
                const mappedCondition = {
                    from: (await this.getTemplates(condition.from ?? [])).map((template) => template.id),
                    to: (await this.getTemplates(condition.to ?? [])).map((template) => template.id),
                    interfaceSpecificationDerivationConditions: (
                        condition.interfaceSpecificationDerivationConditions ?? []
                    ).map((derivationCondition) => ({
                        derivesInvisibleDerived: derivationCondition.derivesInvisibleDerived ?? false,
                        derivesInvisibleSelfDefined: derivationCondition.derivesInvisibleSelfDefined ?? false,
                        derivesVisibleDerived: derivationCondition.derivesVisibleDerived ?? false,
                        derivesVisibleSelfDefined: derivationCondition.derivesVisibleSelfDefined ?? false,
                        isInvisibleDerived: derivationCondition.isInvisibleDerived ?? false,
                        isVisibleDerived: derivationCondition.isVisibleDerived ?? false,
                        derivableInterfaceSpecifications: []
                    }))
                };
                res.push(mappedCondition);
            }
        }
        return res;
    }

    async createTemplate(definition: RelationTemplateDefinition): Promise<FullRelationTemplateInfoFragment> {
        const defaultValue = await this.getDefault(definition);
        const context = { definition, defaultValue };

        const res = await this.engine.client.createRelationTemplate({
            input: {
                ...(await this.getBaseFields(context)),
                markerType: definition.markerType ?? defaultValue?.markerType ?? MarkerType.Arrow,
                stroke: definition.stroke ?? this.mapStroke(defaultValue?.stroke ?? undefined),
                relationConditions: await this.getRelationConditions(definition)
            }
        });
        return res.createRelationTemplate!.relationTemplate!;
    }
}
