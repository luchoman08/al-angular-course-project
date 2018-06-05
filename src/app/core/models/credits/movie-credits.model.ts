import { Cast } from '@app/core';
import { Crew } from '@app/core';
export class CreditsModel {
  id: string;
  cast: Cast[];
  crew: Crew[];
}
