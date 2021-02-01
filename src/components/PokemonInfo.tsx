import { useContext } from "react";
import PokemonContext from "../PokemonContext";
import { PokemonBase } from "../types/pokemon.types";
import { State } from "../types/reducer.types";

const PokemonInfo = () => {
    const { state: { selectedPokemon}} = useContext(PokemonContext) as { state: State };

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