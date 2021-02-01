import { Action, State } from "./types/reducer.types";

const pokemonReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload
        };
      case 'SET_POKEMONS':
        return {
          ...state,
          pokemons: action.payload
        };
      case 'SET_SELECTED_POKEMON':
        return {
          ...state,
          selectedPokemon: action.payload
        };
      default:
        throw new Error("No action");
    }
  };

  export default pokemonReducer;