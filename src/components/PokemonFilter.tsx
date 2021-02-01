import { useContext } from "react";
import PokemonContext from "../PokemonContext";

const PokemonFilter = () => {
    const { filter, setFilter } = useContext(PokemonContext) as { filter: string; setFilter: (value: string) => void; };

    return (
        <input
            value={filter}
            onChange={e => setFilter(e.target.value)}
        />
    )
};

export default PokemonFilter;