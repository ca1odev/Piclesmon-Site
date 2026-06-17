import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchPokeapi(poke) {
  console.log('iniciando construção da pagina')
  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [specie, setSpecie] = useState({});
  const [evolution, setEvolution] = useState({});
  const [myPokemon, setMyPokemon] = useState({});
  const [myType, setMyType] = useState('');


  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`);
      

        setPokemons(res.data);
        console.log('Success:', res.data);
        setLoading(false);
      }
      catch (err) {
        console.error("Erro ao carregar API", err);
        setLoading(false)
        setError(true)
      }
    };
   if(poke) getData();
  }, [poke]);

  useEffect(() => { //useEffect busca o pokemon da api, usando o pokemon da url
    const getSpecie = async () => {
      try {
        const res = await axios.get(pokemons.species.url, {});
        setSpecie(res.data);
        console.log("Sucesso:", res)
      } catch (err) {
        console.error("Erro ao carregar API", err);
      }
    };
    getSpecie();
 }, [pokemons]); 

 useEffect(() => { 
    const getEvolutions = async () => {
      try {
        const res = await axios.get(specie.evolution_chain.url, {});
        setEvolution(res.data);
        console.log("Sucesso:", res)
      } catch (err) {
        console.error("Erro ao carregar API", err);
      }
    };
    getEvolutions();
 }, [specie]);

 useEffect(() => {
  const getMyType = async () => {
    try {
    if(pokemons.types[0].type.name === 'normal' || pokemons.types[0].type.name === 'fighter'){
      setMyType  ('corpo');
    } else if(pokemons.types[0].type.name === 'psychic' || pokemons.types[0].type.name === 'fairy'){
    
      setMyType  ('mente');
    }else if(pokemons.types[0].type.name === 'ghost' || pokemons.types[0].type.name === 'dark'){
    
      setMyType  ('sombra');
   
    }else if(pokemons.types[0].type.name === 'grass' || pokemons.types[0].type.name === 'bug' || pokemons.types[0].type.name === 'poison'){
      setMyType('natureza');
    
    }else if(pokemons.types[0].type.name === 'water' || pokemons.types[0].type.name === 'ice'){
      setMyType('agua');
     
    }else if(pokemons.types[0].type.name === 'ground' || pokemons.types[0].type.name === 'steel' || pokemons.types[0].type.name === 'rock'){
      setMyType('terra');
      
    }else if(pokemons.types[0].type.name === 'electric' || pokemons.types[0].type.name === 'flying' || pokemons.types[0].type.name === 'dragon'){
      setMyType('tempestade');

    }else if(pokemons.types[0].type.name === 'fire'){
      setMyType('fogo');
    };
    } catch (err) {
      console.log(err);
    }
  };  
  getMyType();
}, [pokemons]);

 useEffect(() => {
  const myPokemon = async () => {
    try {
      setMyPokemon({
        nome: pokemons.name,
        vida: pokemons.stats[0].base_stat,
        ataque: pokemons.stats[1].base_stat,
        tipo: myType,
        evolucao: evolution.chain.species.name,
        imagem: pokemons.sprites.other['official-artwork'].front_default,
        imagemshiny: pokemons.sprites.front_shiny,
      });
    } catch (err) {
      console.error(err);
    }
  };

  myPokemon();
}, [evolution, pokemons, myType]);

  return { myPokemon, loading, error }
}

export default useFetchPokeapi;