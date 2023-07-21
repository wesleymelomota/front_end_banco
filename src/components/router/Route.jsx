import { Route, Routes } from "react-router-dom"
import Main from "../main/Main"
import ContaForm from "../conta/ContaForm"
import TransferenciaForm from "../transferencia/TransferenciaForm"

export default () => {
    return(
        <Routes>
        <Route  exact path="/" element={<Main/>} />
        <Route path="/conta" element={<ContaForm/>} />
        <Route path="/transferencia" element={<TransferenciaForm/>} />
        <Route path="/transferencias" element={<Main/>} />
        <Route path="/deposito" element={<TransferenciaForm/>} />
        <Route path="*" element={<Main/>} />
      
        </Routes>
    )
}