import { Gender } from '@app/core/models/enums';
export interface CreditInterface {
    gender: Gender;
    name: string;
    order: number;
    prfoile_path: string;
}
