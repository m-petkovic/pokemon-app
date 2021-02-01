import { useContext } from "react";
import PokemonContext from "../PokemonContext";
import { Action, State } from "../types/reducer.types";

const PokemonFilter = () => {
    const { state: { filter }, dispatch } = useContext(PokemonContext) as { state: State; dispatch: React.Dispatch<Action>; };

    return (
        <input
            value={filter}
            onChange={e => dispatch({
                type: 'SET_FILTER',
                payload: e.target.value
            })}
        />
    )
};

export default PokemonFilter;