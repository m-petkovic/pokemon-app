import React from "react";
import { IPokemon } from "../types/pokemon.types";
import { equalsIgnoreCase } from "../utils/string-utils";
import Pokemon from "./Pokemon";
import Table from "./Table";

const PokemonTable = ({
    filter,
    pokemons,
    setSelected
}: {
    filter: string;
    pokemons: IPokemon[];
    setSelected: (pokemon: IPokemon) => void
}) => (
    <div>
        <Table
            headers={["name", "type"]}
            items={pokemons.filter(pokemon => equalsIgnoreCase(pokemon.name.english, filter)).slice(0, 20)}
            render={pokemon => <Pokemon pokemon={pokemon} onSelect={pokemon => setSelected(pokemon)} />}
        />
    </div>
);

export default PokemonTable;