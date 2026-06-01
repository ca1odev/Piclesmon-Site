import React, { useState, useEffect } from 'react';
import './card.css';
import useFetchpokeapi from '../hooks/userFetchpokeapi';

function App() {
  const {pokemons, loading, error} = useFetchpokeapi("mudkip");

  if (loading) return 
    <div 
      className="loader">Carregando Pokédex...
    </div>

  if (error) return 
    <div
      className="error">Ocorreu um erro inesperado
    </div>

  return (
    <div className="App">
     <h1>Poke Card</h1>
      <div className="pokemon-container">
         <div className="pokemon-card">
          <h3>{pokemons.name}</h3>
          <img src="./soculos.png" alt="mudkip" className="pokemon"/>
         
          <div className="stats">
        <p><strong>HP:</strong> {pokemons.stats[0].base_stat}</p>
        <p><strong>Attack:</strong> {pokemons.stats[1].base_stat}</p>
        <p><strong>Defense:</strong> {pokemons.stats[2].base_stat}</p>
        <p><strong>Speed:</strong> {pokemons.stats[5].base_stat}</p>
      </div>  
          <div className="types">

          {pokemons.types.map((type, index) => (
          <span key={index} className={`type ${type.type.name}`}>
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
