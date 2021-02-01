import { IPokemon } from "./pokemon.types";

export type State = {
    filter: string;
    pokemons: IPokemon[];
    selectedPokemon: IPokemon | null;
};

export type Action =
    | { type: 'SET_FILTER', payload: string; }
    | { type: 'SET_POKEMONS', payload: IPokemon[]; }
    | { type: 'SET_SELECTED_POKEMON', payload: IPokemon | null; };