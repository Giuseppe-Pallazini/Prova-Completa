import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './home'
import CorPrimaria from './corPrimaria'
import Frequencia from './frequencia'
import Ingresso from './ingresso'
import MaiorNumero from './maiorNumero'

export default function SitesRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path= '/' element={<Home/>} /> 
                <Route path= '/corPrimaria' element={<CorPrimaria/>} /> 
                <Route path= '/frequencia' element={<Frequencia/>} /> 
                <Route path= '/ingresso' element={<Ingresso/>} /> 
                <Route path= '/maiorNumero' element={<MaiorNumero/>} />

            </Routes>
        </BrowserRouter>
    )
}