import { CreditInterface } from '@app/core/';
import { Gender } from '@app/core/';
export class Crew implements CreditInterface {
   id: string;
  gender: Gender;
  name: string;
  order: number;
  profile_path: string;
  job: string;
  character?: string;
}
