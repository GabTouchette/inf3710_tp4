import {Parcel} from "./parcel.interface";

export interface Garden {
    _id: string;
    name: string;
    area: number
    parcels: Parcel[];
}