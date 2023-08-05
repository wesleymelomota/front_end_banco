import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { useState } from 'react'
import axios from 'axios'
import {setSessao, login} from '../../recursos/conta/contaSlice'
import {useDispatch} from 'react-redux'

export default () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const getUserName = (e) => {
        setUserName(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const  logar = () => {
        if(username && password != ''){
            axios.post('http://localhost:8080/banco/login', {username, password})
                .then(response => {dispatch(setSessao(response.data)) })
            navigate('/transferencias')
        }
    }

    return(
        <div className="main">
            <div className="card">
                <div className="card-body">
                    <h4>Entrar</h4>
                <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-2 col-form-label text-dark fs-5">Nome de Usuario</label>
                        <div class="col-sm-10">
                        <input type="text" onChange={getUserName} readonly class="form-control" id="" />
                        </div>
                </div>
                <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-2 col-form-label text-dark fs-5">Senha</label>
                        <div class="col-sm-10">
                        <input type="password" onChange={getPassword} readonly class="form-control" id="" />
                        </div>
                </div>
                </div>
                <div className="btns">
                    <button className='btn btn-success m-2' onClick={logar}>Entrar</button>
                    <Link to="/"><button className="btn btn-secondary m-2">Cancelar</button></Link>
                </div>
                <p>Não tem Conta ? <Link className='text-decoration-none' to='/conta'>Criar</Link></p>
            </div>
        </div>
    )
}