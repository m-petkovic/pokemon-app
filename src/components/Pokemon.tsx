import { IPokemon } from "../types/pokemon.types";

const Pokemon = ({
    pokemon,
    onSelect
}: {
    pokemon: IPokemon;
    onSelect: (pokemon: IPokemon) => void;
}) => (
    <>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(", ")}</td>
        <td>
            <button onClick={() => onSelect(pokemon)}>More info</button>
        </td>
    </>
);

export default Pokemon;