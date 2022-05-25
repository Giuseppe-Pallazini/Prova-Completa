import { Link } from "react-router-dom";

export default function Index(){
    return(
        <main> 
        <h1> home </h1>
        <ul>
            <li> <Link to='/corPrimaria'> CorPrimaria</Link>  </li>
            <li> <Link to='/frequencia'> frequecia</Link>  </li>
            <li> <Link to= '/ingresso'> ingresso</Link>  </li>
            <li> <Link to='/maiorNumero'> maiorNumero</Link>  </li>
        </ul>
        </main>
    )

}