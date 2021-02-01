import { useContext } from "react";
import PokemonContext from "../PokemonContext";
import { IPokemon, PokemonBase } from "../types/pokemon.types";

const PokemonInfo = () => {
    const { selectedPokemon } = useContext(PokemonContext) as { selectedPokemon: IPokemon | null };

    return selectedPokemon ? (
        <div>
            <h1>{selectedPokemon.name.english}</h1>
            <table>
                <tbody>
                    {Object.keys(selectedPokemon.base).map(key => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{selectedPokemon.base[key as keyof PokemonBase]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ) : null;
};

export default PokemonInfo;