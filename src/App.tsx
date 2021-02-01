import { useEffect, useReducer } from 'react';
import './App.css';
import { IPokemon } from './types/pokemon.types';
import PokemonFilter from './components/PokemonFilter';
import PokemonInfo from './components/PokemonInfo';
import PokemonTable from './components/PokemonTable';
import PokemonContext from './PokemonContext';
import pokemonReducer from './PokemonReducer';

const App = () => {
  const [state, dispatch] = useReducer(pokemonReducer, {
    filter: "",
    pokemons: [],
    selectedPokemon: null
  });

  useEffect(() => {
    fetch("http://localhost:3000/pokemon-app/pokemon.json")
      .then(res => res.json())
      .then((pokemons: IPokemon[]) => dispatch({
        type: 'SET_POKEMONS',
        payload: pokemons
      }));
  }, []);

  if (!state.pokemons) {
    return <div>Loading pokemons...</div>
  }

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
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
