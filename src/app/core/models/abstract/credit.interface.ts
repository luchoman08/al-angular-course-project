import { Gender } from '@app/core';
export interface CreditInterface {
    id: string;
    gender: Gender;
    name: string;
    order: number;
    profile_path: string;
    job?: string;
    character?: string;

}
