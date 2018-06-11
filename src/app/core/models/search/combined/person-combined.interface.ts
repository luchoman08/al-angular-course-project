import { CombinedInterface } from './combined.interface';

export interface PersonCombinedInterface extends CombinedInterface {
  adult: boolean;
  known_for: any;
  name: string;
  popularity: number;
  profile_path: string;
}
