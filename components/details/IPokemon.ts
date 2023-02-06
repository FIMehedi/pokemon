export interface IPokemon {
	__typename: string;
	id: number;
	name: string;
	height: number;
	weight: number;
	types: TypeElement[];
	stats: Stat[];
	base_experience: number;
	abilities: AbilityElement[];
}

export interface AbilityElement {
	__typename: string;
	ability: StatClass;
}

export interface StatClass {
	__typename: string;
	name: string;
}

export interface Stat {
	__typename: string;
	stat: StatClass;
	base_stat: number;
}

export interface TypeElement {
	__typename: string;
	type: TypeType;
}

export interface TypeType {
	__typename: string;
	name: string;
}
