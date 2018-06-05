import { PersonCastCreditCombinedModel } from './person-cast-credit-combined.model';
import { PersonCrewCreditCombinedModel } from './person-crew-credit-combined.model';
export class PersonCreditsCombinedModel {
  cast: PersonCastCreditCombinedModel[];
  crew: PersonCrewCreditCombinedModel[];
}
