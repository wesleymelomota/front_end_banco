import { Route, Routes } from "react-router-dom"
import Main from "../main/Main"
import ContaForm from "../conta/ContaForm"
import TransferenciaForm from "../transferencia/TransferenciaForm"
import Deposito from "../deposito/Deposito"
import Saque from "../saque/Saque"


export default () => {
    return(
        <Routes>
        <Route  exact path="/" element={<Main/>} />
        <Route path="/conta" element={<ContaForm/>} />
        <Route path="/transferencia" element={<TransferenciaForm/>} />
        <Route path="/transferencias" element={<Main/>} />
        <Route path="/deposito" element={<Deposito/>} />
        <Route path="/saque" element={<Saque/>} />
        <Route path="*" element={<Main/>} />
      
        </Routes>
    )
}