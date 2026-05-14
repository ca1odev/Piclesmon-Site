import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './card2.css';

function App() {

  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    const getData = async () => {

      try {

        const res = await axios.get(
          'https://pokeapi.co/api/v2/pokemon/treecko'
        );

        setPokemons(res.data);
        setLoading(false);

      } catch (err) {

        console.error("Erro ao carregar API", err);
        setLoading(false);
        setError(true);

      }

    };

    getData();

  }, []);

  if (loading) {
    return <div className="loader">Carregando Pokédex...</div>;
  }

  if (error) {
    return <div className="error">Ocorreu um erro inesperado</div>;
  }

  return (

    <div className="App2">

      <h1>Poke Card</h1>

      <div className="pokemon-container">

        <div className="pokemon-card2">

          <h3>{pokemons.name}</h3>

          <img
            src="./t.png"
            alt="treecko"
            className="pokemon"
          />

          <div className="stats">

            <p><strong>HP:</strong> {pokemons.stats[0].base_stat}</p>

            <p><strong>Attack:</strong> {pokemons.stats[1].base_stat}</p>

            <p><strong>Defense:</strong> {pokemons.stats[2].base_stat}</p>

            <p><strong>Speed:</strong> {pokemons.stats[5].base_stat}</p>

          </div>

          <div className="types">

            {pokemons.types.map((type, index) => (

              <span
                key={index}
                className={`type ${type.type.name}`}
              >
                {type.type.name}
              </span>

            ))}

          </div>

        </div>

      </div>

    </div>

  );
}

export default App;