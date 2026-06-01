import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import TrainerPage from "./pages/home";
import Pokemons from "./pages/cards";
import Pokemon from "./pages/card";
import Pokemon2 from "./pages/card2";
import Pokemon3 from "./pages/card3";

function App(){
   return(
       <BrowserRouter>
       <Routes>
           <Route  path="/" exact element = {< TrainerPage />}/>
           <Route  path="/pokemon/:id" element = {< Pokemon />} />
           <Route  path="/pokemons" element = {< Pokemons />} />

           </Routes>
       </BrowserRouter>
   )
}

export default App;