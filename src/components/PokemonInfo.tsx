import { IPokemon, PokemonBase } from "../types/pokemon.types";

const PokemonInfo = ({ pokemon }: { pokemon: IPokemon | null }) => pokemon && (
    <div>
        <h1>{pokemon.name.english}</h1>
        <table>
            <tbody>
                {Object.keys(pokemon.base).map(key => (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{pokemon.base[key as keyof PokemonBase]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default PokemonInfo;