import pokebola from '../assets/pokebola.png';
import { Link } from "react-router-dom";


function Pokebutton(poke){ 
    return(
<button className="bola"> <img src={pokebola} alt="Pokebola" />
</button>)

}
//<Link to={poke}></Link> 

export default Pokebutton;