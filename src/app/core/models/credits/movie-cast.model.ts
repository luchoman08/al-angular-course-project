import { CreditInterface, Gender } from '@app/core';
export class Cast implements CreditInterface {
  gender: Gender;
  name: string;
  id: string;
  order: number;
  profile_path: string;
  character: string;
  job?: string;
}
