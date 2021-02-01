import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";
import { Action, State } from "../types/reducer.types";
import { equalsIgnoreCase } from "../utils/string-utils";
import Pokemon from "./Pokemon";
import Table from "./Table";

const PokemonTable = () => {
    const { state: { filter, pokemons }, dispatch } = useContext(PokemonContext) as { state: State; dispatch: React.Dispatch<Action>; };

    return (
        <div>
            <Table
                headers={["name", "type"]}
                items={pokemons.filter(pokemon => equalsIgnoreCase(pokemon.name.english, filter)).slice(0, 20)}
                render={pokemon => <Pokemon pokemon={pokemon} onSelect={pokemon => dispatch({
                    type: 'SET_SELECTED_POKEMON',
                    payload: pokemon
                })} />}
            />
        </div>
    );
};

export default PokemonTable;