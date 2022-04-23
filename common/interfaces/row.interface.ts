import { Variete } from './variete.interface';

export interface Row {
    number: number;
    coords: number[];
    fallowPeriod: Date[];
    varietes: Variete[];
}
