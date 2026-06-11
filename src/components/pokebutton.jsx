import pokebola from '../assets/pokebola.png';
import { Link } from "react-router-dom";


function Pokebutton(poke){ 
    return(
<Link to = {poke} className="bola"> <img src={pokebola} alt="Pokebola" />
</Link>)

}


export default Pokebutton;