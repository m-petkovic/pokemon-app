import { useEffect, useState } from 'react';
import './App.css';
import PokemonFilter from './components/PokemonFilter';
import PokemonInfo from './components/PokemonInfo';
import PokemonTable from './components/PokemonTable';
import { IPokemon } from './types/pokemon.types';

const App = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [filter, setFilter] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then(res => res.json())
      .then((pokemons: IPokemon[]) => setPokemons(pokemons));
  }, []);

  return (
    <div className="main">
      <h1 className="title">Pokemon Search</h1>
      <PokemonFilter filter={filter} onChange={setFilter} />
      <div className="container">
        <PokemonTable filter={filter} pokemons={pokemons} setSelected={setSelectedPokemon} />
        <PokemonInfo pokemon={selectedPokemon} />
      </div>
    </div>
  );
}

export default App;
