import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { useState } from 'react'
import {setSessao} from '../../recursos/conta/contaSlice'
import {useDispatch} from 'react-redux'
import serviceLogin from '../../api/serviceLogin'

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
    const clean = ()=> {
        setUserName('')
        setPassword('')
    }
    const  logar = () => {
        if(username && password != ''){
            serviceLogin(username, password).then(response => {dispatch(setSessao(response.data)) }).catch(err => alert("Usuário ou senha invalido"))
            clean()
            navigate('/transferencias')
            
                }
            }
    
    
    return(
        <div className="main">
            <div className="card">
                <div className="card-body">
                    <h4>Entrar</h4>
                    
                    <form class="row g-3 needs-validation " novalidate>
                        <div class="col-md-6 position-relative">
                            <label for="validationTooltip01" class="form-label fs-5">Nome de usuário</label>
                            <input type="text" class="form-control" onChange={getUserName} id="validationTooltip01" value={username} required/>
                            <div class="valid-tooltip">
                                Muito Bem!
                            </div>
                        </div>
                        <div class="col-md-6 position-relative">
                            <label for="validationTooltip02" class="form-label fs-5">Senha</label>
                            <input type="password" class="form-control" onChange={getPassword} id="validationTooltip02" value={password} required/>
                            <div class="valid-tooltip">
                                Muito Bem!
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-success m-2" type="submit"  onClick={logar}>Entrar</button>
                            <Link to="/"><button className="btn btn-secondary m-2">Cancelar</button></Link>
                        </div>
                    </form>
                </div>
                
                <p>Não tem Conta ? <Link className='text-decoration-none' to='/conta'>Criar</Link></p>
            </div>
        </div>
    )
}