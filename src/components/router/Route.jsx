import { Route, Routes, Navigate } from "react-router-dom"
import Main from "../main/Main"
import ContaForm from "../conta/ContaForm"
import TransferenciaForm from "../transferencia/TransferenciaForm"
import Deposito from "../deposito/Deposito"
import Saque from "../saque/Saque"
import Index from "../index/Index"
import Login from "../login/Login"
import {PrivateRoute} from "./routesPrivate/PrivateRoute"
import UsuarioForm from "../usuario/usuario-form/UsuarioForm"
    
    export default () => {

    return(
        <Routes>
        <Route  exact path="/index" element={<Index/>} />
        <Route path="/conta" element={<ContaForm/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/transferencia" element={<PrivateRoute><TransferenciaForm/></PrivateRoute>}/>
        <Route path="/transferencias" element={<PrivateRoute><Main/></PrivateRoute>}/>
        <Route path="/deposito" element={<PrivateRoute><Deposito/></PrivateRoute>}/>
        <Route path="/saque" element={<PrivateRoute><Saque/></PrivateRoute>}/>
        <Route path="/informacoes-conta" element={<PrivateRoute><UsuarioForm/></PrivateRoute>}/>
        <Route path="*" element={<Index/>} />
      
        </Routes>
    )
}