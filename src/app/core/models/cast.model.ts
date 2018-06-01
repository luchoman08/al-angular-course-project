import { CreditInterface, Gender } from '@app/core/';
export class Cast implements CreditInterface {
  gender: Gender;
  name: string;
  order: number;
  prfoile_path: string;
  character: string;
}
