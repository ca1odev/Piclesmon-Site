import React from "react";
import './home.css';
import fundo from '../assets/fundo.jpg';
import avatar from '../assets/avatar.png';
import Pokebutton from '../components/pokebutton'

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

<p><strong>Nome: Caio</strong></p>
<p><strong>Idade: 17</strong></p>
<p><strong>Nickname: csm</strong></p>
<p><strong>Pokemons: 3</strong></p>

<div className="pokebolas">
{Pokebutton("/pokemon/mudkip")}

{Pokebutton("/pokemon/geodude")}

{Pokebutton("/pokemon/staryu")}



</div>
</div>
      </div>
    </div>
  );
}

export default TrainerPage;