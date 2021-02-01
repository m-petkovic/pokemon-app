import { useEffect, useState } from 'react';
import './App.css';
import { IPokemon } from './types/pokemon.types';
import PokemonFilter from './components/PokemonFilter';
import PokemonInfo from './components/PokemonInfo';
import PokemonTable from './components/PokemonTable';
import PokemonContext from './PokemonContext';

const App = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [filter, setFilter] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then(res => res.json())
      .then((pokemons: IPokemon[]) => setPokemons(pokemons));
  }, []);

  if (!pokemons) {
    return <div>Loading pokemons...</div>
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        filter,
        selectedPokemon,
        setPokemons,
        setFilter,
        setSelectedPokemon
      }}
    >
      <div className="main">
        <h1 className="title">Pokemon Search</h1>
        <PokemonFilter />
        <div className="container">
          <PokemonTable />
          <PokemonInfo />
        </div>
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
