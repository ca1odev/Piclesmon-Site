import React, { useState, useEffect } from 'react';
import './card.css';
import useFetchpokeapi from '../hooks/userFetchpokeapi';
import { useParams } from 'react-router';


function App() {
  const {id} = useParams();
  const {myPokemon, loading, error} = useFetchpokeapi(id);

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
       <div className={`pokemon-card ${myPokemon.tipo}`} >
        <h3>{myPokemon.nome}</h3>
        <img src={myPokemon.imagem}  alt={myPokemon.nome} />
       
        <div className="stats">
      <p><strong>HP:</strong> {myPokemon.vida}</p>
      <p><strong>Attack:</strong> {myPokemon.ataque}</p>
    </div>  
        <div className="types">
          <p>{myPokemon.tipo}</p>

          </div>
        </div>
    </div>
  </div>
);
}

export default App;


// code pra puxar artwork oficial dos poke
// pokemons.sprites.other['official-artwork'].front_default} 
