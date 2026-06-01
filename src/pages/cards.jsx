import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cards.css';
import {useParams} from 'react-router-dom'
import useFetchPokeapi from '../hooks/userFetchpokeapi';


function App() {
  const {id}=useParams();
  const {pokemons}=useFetchPokeapi(id);
  const [mudkip, setMudkip] = useState(null);
  const [geodude, setGeodude] = useState(null);
  const [staryu, setStaryu] = useState(null);


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    const getData = async () => {

      try {

        const mudkipRes = await axios.get(
          'https://pokeapi.co/api/v2/pokemon/mudkip'
        );

        const geodudeRes = await axios.get(
          'https://pokeapi.co/api/v2/pokemon/geodude'
        );

        const staryuRes = await axios.get(
          'https://pokeapi.co/api/v2/pokemon/staryu'
        );


        setMudkip(mudkipRes.data);
        setGeodude(geodudeRes.data);
        setStaryu(staryuRes.data);

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

    <div className="Apps">

      <h1>TIME</h1>

      <div className="pokemon-container">

        {/* mudkip */}

        <div className="water-card">

          <h3>{mudkip.name}</h3>

          <img
            src="/soculos.png"
            alt="mudkip"
            className="pokemon"
          />

          <div className="stats">

            <p>
              <strong>HP:</strong>
              {' '}
              {mudkip.stats[0].base_stat}
            </p>

            <p>
              <strong>Attack:</strong>
              {' '}
              {mudkip.stats[1].base_stat}
            </p>

            <p>
              <strong>Defense:</strong>
              {' '}
              {mudkip.stats[2].base_stat}
            </p>

            <p>
              <strong>Speed:</strong>
              {' '}
              {mudkip.stats[5].base_stat}
            </p>

          </div>

          <div className="types">

            {mudkip.types.map((type, index) => (

              <span
                key={index}
                className={`type ${type.type.name}`}
              >
                {type.type.name}
              </span>

            ))}

          </div>

        </div>

        {/* Geodude */}

        <div className="rock-card">

          <h3>{geodude.name}</h3>

          <img
            src="/t.png"
            alt="geodude"
            className="pokemon"
          />

          <div className="stats">

            <p>
              <strong>HP:</strong>
              {' '}
              {geodude.stats[0].base_stat}
            </p>

            <p>
              <strong>Attack:</strong>
              {' '}
              {geodude.stats[1].base_stat}
            </p>

            <p>
              <strong>Defense:</strong>
              {' '}
              {geodude.stats[2].base_stat}
            </p>

            <p>
              <strong>Speed:</strong>
              {' '}
              {geodude.stats[5].base_stat}
            </p>

          </div>

          <div className="types">

            {geodude.types.map((type, index) => (

              <span
                key={index}
                className={`type ${type.type.name}`}
              >
                {type.type.name}
              </span>

            ))}

          </div>

        </div>

                {/* staryu */}

        <div className="water-card">

          <h3>{staryu.name}</h3>

          <img
            src="/staryyu.png"
            alt="staryu"
            className="pokemon"
          />

          <div className="stats">

            <p>
              <strong>HP:</strong>
              {' '}
              {staryu.stats[0].base_stat}
            </p>

            <p>
              <strong>Attack:</strong>
              {' '}
              {staryu.stats[1].base_stat}
            </p>

            <p>
              <strong>Defense:</strong>
              {' '}
              {staryu.stats[2].base_stat}
            </p>

            <p>
              <strong>Speed:</strong>
              {' '}
              {staryu.stats[5].base_stat}
            </p>

          </div>

          <div className="types">

            {staryu.types.map((type, index) => (

              <span
                key={index}
                className={`type ${type.type.name}`}
              >
                {type.type.name}
              </span>

            ))};

          </div>

        </div>

      </div>

    </div>

  );
}

export default App;