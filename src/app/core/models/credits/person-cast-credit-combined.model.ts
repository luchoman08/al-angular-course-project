import { PersonCreditInterface } from '@app/core/models/interfaces/person-credit.interface';

export class PersonCastCreditCombinedModel  implements PersonCreditInterface {
  id: string;
  backdrop_path: string;
  title: string;
  overview: string;
  character: string;
  job?: string; // trick for credit combined
  media_type: string;
  episode_count: number;
  vote_average: number;
  first_air_date: string;
  vote_count: number;
  release_date: string;
  popularity;
  poster_path: string;
}
