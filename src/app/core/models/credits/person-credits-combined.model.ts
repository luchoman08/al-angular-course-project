import { PersonCastCreditCombinedModel } from '@app/core/models/credits/person-cast-credit-combined.model';
import { PersonCrewCreditCombinedModel } from '@app/core/models/credits/person-crew-credit-combined.model';
export class PersonCreditsCombinedModel {
  cast: PersonCastCreditCombinedModel[];
  crew: PersonCrewCreditCombinedModel[];
}
