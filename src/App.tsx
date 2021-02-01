import React, { ReactNode, useEffect, useState } from 'react';
import './App.css';
import { capitalize, equalsIgnoreCase } from './utils/string-utils';

interface PokemonBase {
  hp: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDefence: number;
  speed: number;
}

interface PokemonName {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
}

interface IPokemon {
  id: number;
  name: PokemonName;
  type: string[];
  base: PokemonBase;
}

const Table = <TableItem,>({
  headers,
  items,
  render
}: {
  headers: string[];
  items: TableItem[];
  render: (item: TableItem) => ReactNode
}) => (
  <>
    <table>
      <thead>
        <tr>
          {headers.map(header => (
            <th>{capitalize(header)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key="index">
            {render(item)}
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

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
      <button onClick={() => onSelect(pokemon)}>Select</button>
    </td>
  </>
);

const PokemonInfo = ({
  name,
  base
}: {
  name: PokemonName;
  base: PokemonBase
}) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      {Object.keys(base).map(key => (
        <tr key={key}>
          <td>{key}</td>
          <td>{base[key as keyof PokemonBase]}</td>
        </tr>
      ))}
    </table>
  </div>
);

function App() {
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
      <input
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <div className="container">
        <div>
          <Table
            headers={["name", "type"]}
            items={pokemons.filter(pokemon => equalsIgnoreCase(pokemon.name.english, filter)).slice(0, 20)}
            render={pokemon => <Pokemon pokemon={pokemon} onSelect={pokemon => setSelectedPokemon(pokemon)} />}
          />
        </div>
        {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
      </div>
    </div>
  );
}

export default App;
