import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";
import { IPokemon } from "../types/pokemon.types";
import { equalsIgnoreCase } from "../utils/string-utils";
import Pokemon from "./Pokemon";
import Table from "./Table";

const PokemonTable = () => {
    const {filter, pokemons, setSelectedPokemon} = useContext(PokemonContext) as {
        filter: string;
        pokemons: IPokemon[];
        setSelectedPokemon: (pokemon: IPokemon) => void
    };
    
    return (
        <div>
            <Table
                headers={["name", "type"]}
                items={pokemons.filter(pokemon => equalsIgnoreCase(pokemon.name.english, filter)).slice(0, 20)}
                render={pokemon => <Pokemon pokemon={pokemon} onSelect={pokemon => setSelectedPokemon(pokemon)} />}
            />
        </div>
    );
};

export default PokemonTable;