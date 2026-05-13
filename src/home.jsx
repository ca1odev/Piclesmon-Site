import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import fundo from './fundo.jpg';
import pokebola from './pokebola.png';
import avatar from './avatar.png';
function TrainerPage() {
  return (
    <div
      className="main-bg"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <div className="container">
        <h1>Treinador Pokémon</h1>

        <div className="card">

<div className="avatar">
  <img src={avatar} alt="Avatar treinador" />
</div>

<p><strong>Nome: Andrey</strong></p>
<p><strong>Idade: 16</strong></p>
<p><strong>Nickname: Andreyzada</strong></p>
<p><strong>Pokemons: 2</strong></p>

<div className="pokebolas">
  <button className="bola">
  <Link to="/pokemon"><img src={pokebola} alt="Pokebola" /></Link> 
  </button>

  <button className="bola">
  <Link to="/pokemon2"><img src={pokebola} alt="Pokebola" /></Link> 
  </button>
</div>

<button className="pokebola">
  <Link to="/pokemons">VER TIME INTEIRO</Link>
</button>
</div>
      </div>
    </div>
  );
}

export default TrainerPage;