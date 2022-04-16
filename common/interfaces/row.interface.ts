import { PlantType } from './plant-type.interface';

export interface Row {
    number: number;
    coords: number[];
    fallowPeriod: Date[];
    plantTypes?: PlantType[];
}