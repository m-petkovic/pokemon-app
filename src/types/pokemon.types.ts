export interface PokemonBase {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefence: number;
    speed: number;
}

export interface PokemonName {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
}

export interface IPokemon {
    id: number;
    name: PokemonName;
    type: string[];
    base: PokemonBase;
}