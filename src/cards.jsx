import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cards.css';


function App() {

  const [squirtle, setSquirtle] = useState(null);
  const [treecko, setTreecko] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    const getData = async () => {

      try {

        const squirtleRes = await axios.get(
          'https://pokeapi.co/api/v2/pokemon/squirtle'
        );

        const treeckoRes = await axios.get(
          'https://pokeapi.co/api/v2/pokemon/treecko'
        );

        setSquirtle(squirtleRes.data);
        setTreecko(treeckoRes.data);

        setLoading(false);

      } catch (err) {

        console.error("Erro ao carregar API", err);

        setError(true);
        setLoading(false);

      }

    };

    getData();

  }, []);

  if (loading) {
    return (
      <div className="loader">
        Carregando Pokédex...
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        Ocorreu um erro inesperado
      </div>
    );
  }

  return (

    <div className="App">

      <h1></h1>

      <div className="pokemon-container">

        {/* Squirtle */}

        <div className="pokemon-card water-card">

          <h3>{squirtle.name}</h3>

          <img
            src="/soculos.png"
            alt="squirtle"
            className="pokemon"
          />

          <div className="stats">

            <p>
              <strong>HP:</strong>
              {' '}
              {squirtle.stats[0].base_stat}
            </p>

            <p>
              <strong>Attack:</strong>
              {' '}
              {squirtle.stats[1].base_stat}
            </p>

            <p>
              <strong>Defense:</strong>
              {' '}
              {squirtle.stats[2].base_stat}
            </p>

            <p>
              <strong>Speed:</strong>
              {' '}
              {squirtle.stats[5].base_stat}
            </p>

          </div>

          <div className="types">

            {squirtle.types.map((type, index) => (

              <span
                key={index}
                className={`type ${type.type.name}`}
              >
                {type.type.name}
              </span>

            ))}

          </div>

        </div>

        {/* Treecko */}

        <div className="pokemon-card grass-card">

          <h3>{treecko.name}</h3>

          <img
            src="/t.png"
            alt="squirtle"
            className="pokemon"
          />

          <div className="stats">

            <p>
              <strong>HP:</strong>
              {' '}
              {treecko.stats[0].base_stat}
            </p>

            <p>
              <strong>Attack:</strong>
              {' '}
              {treecko.stats[1].base_stat}
            </p>

            <p>
              <strong>Defense:</strong>
              {' '}
              {treecko.stats[2].base_stat}
            </p>

            <p>
              <strong>Speed:</strong>
              {' '}
              {treecko.stats[5].base_stat}
            </p>

          </div>

          <div className="types">

            {treecko.types.map((type, index) => (

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