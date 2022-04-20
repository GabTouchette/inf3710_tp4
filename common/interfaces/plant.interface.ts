import { Menace } from './menace.interface'

export interface Plant {
    name: string;
	latinName: string;
	category: string;
	type: string;
	subType: string
	plantType: string;
    menaces: Menace[];
}