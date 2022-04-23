import {Parcel} from "./parcel.interface";

export interface Garden {
    idJardin: string;
    nom: string;
    surface: number;
    hauteurMax: number;
    typeSol: string;
    ornamentFlag: boolean;
    vergerFlag : boolean;
    potagerFlag : boolean;
    parcels: Parcel[];
}
