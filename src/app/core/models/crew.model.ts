import { CreditInterface } from '@app/core/models/';
import { Gender } from '@app/core/models/enums';
export class Crew implements CreditInterface {
  gender: Gender;
  name: string;
  order: number;
  prfoile_path: string;
  job: string;
}
