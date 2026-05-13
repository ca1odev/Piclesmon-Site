import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import TrainerPage from "./home";
import Pokemons from "./cards"
import Pokemon from "./card";
import Pokemon2 from "./card2";

function App(){
   return(
       <BrowserRouter>
       <Routes>
           <Route  path="/" exact element = {< TrainerPage />}/>
           <Route  path="/pokemons" element = {< Pokemons />} />
           <Route  path="/pokemon" element = {< Pokemon />} />
           <Route  path="/pokemon2" element = {< Pokemon2 />} />
           </Routes>
       </BrowserRouter>
   )
}

export default App;