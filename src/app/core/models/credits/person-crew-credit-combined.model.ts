import { PersonCreditInterface } from '@app/core/models/interfaces/person-credit.interface';

export class PersonCrewCreditCombinedModel  implements PersonCreditInterface {
  id: string;
  backdrop_path: string;
  title: string;
  character?: string;
  name?: string;
  job: string; // trick for credit combined
  overview: string;
  media_type: string;
  episode_count: number;
  vote_average: number;
  vote_count: number;
  release_date: string;
  popularity;
  poster_path: string;
}
