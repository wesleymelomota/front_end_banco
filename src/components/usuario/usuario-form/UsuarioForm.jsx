import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {serviceGetUsuario, serviceUpdateUser} from "../../../api/serviceUsuario"
import { useState } from "react"
import { setUsuario, updateUsername } from "../../../recursos/conta/contaSlice"
import { Link } from "react-router-dom"

export default () => {
    
    const usernameUser = useSelector((state )=> state.conta.sessao.userName)
    const token = useSelector((state)=> state.conta.sessao.token)
    const usuario = useSelector(state => state.conta.usuario)
    const dispatch = useDispatch()
    const [id, setId] = useState(usuario.id)
    const [name, setName] = useState(usuario.name)
    const [username, setUsename] = useState(usuario.username)
    const [email, setEmail] = useState(usuario.email)
    
    useEffect(()=> {
        
        serviceGetUsuario(usernameUser, token).then(response => {dispatch(setUsuario(response.data))}) 
        .catch(err => console.log(err))
    },[usernameUser])
    
    const update = ()=> {
        serviceUpdateUser(id, name, username, email, token).then(response => {dispatch(updateUsername(response.data.username))})
        
    }
    
    const updateFieldName = (e) => {
        setName(e.target.value)
    }
    const updateFiledUsername = (e) => {
        setUsename(e.target.value)
    }
    const updateFieldEmail = (e) => {
        setEmail(e.target.value)
    }
    return(
        <div className="container">
            <h2>Atualizar informações de login</h2>
            <form>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label  fs-6">Nome</label>
                    <div class="col-sm-10">
                        <input type="text" value={name} onChange={updateFieldName}  name="name" readonly  class="form-control" id="staticEmail" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label  fs-6">Nome Usuário</label>
                    <div class="col-sm-10">
                        <input type="text" value={username} onChange={updateFiledUsername}  name="username" readonly  class="form-control" id="staticEmail" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label  fs-6">Email</label>
                    <div class="col-sm-10">
                        <input type="text"  value={email} onChange={updateFieldEmail} name="email" readonly  class="form-control" id="staticEmail" />
                    </div>
                </div>
                <div class="mb-3">
                    <button type="button" onClick={update} class="btn btn-success m-1">
                        Salvar
                    </button>
                    <Link to="/transferencias" >
                        <button type="button"  class="btn btn-secondary m-1" >
                            Cancelar
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}