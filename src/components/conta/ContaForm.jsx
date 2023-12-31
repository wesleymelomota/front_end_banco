import { useState } from "react"
import './conta.css' 
import { Link } from "react-router-dom"
import serviceConta from "../../api/serviceConta"
/*alteração: add serviceConta */

export default () => {

    const [nomeResponsavel, setNome] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getNomeResponsavel = (e)=> {
        setNome(e.target.value)
    }
    const getUsername = (e) => {
        setUserName(e.target.value)
    }
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    const cleanFilds = () => {
        setNome('')
        setUserName('')
        setEmail('')
        setPassword('')
    }

    const criarConta = ()=> {
        if(nomeResponsavel && username && password && email != ''){
            serviceConta(nomeResponsavel, username, email, password).then(response => {}).catch(err => console.log(err))
           cleanFilds()
        }
    } 
    
    return(
            <><div className="main-conta">

                <div className="card m-5">
                    <h1>Crie Uma Conta</h1>
                    <div className="card-body d-block">
                        <div class="row m-1">
                            <label>Nome</label>
                            <div class="col">
                                <input type="text" onChange={getNomeResponsavel}  class="form-control" name="nomeResponsavel" aria-label="First name"/>
                            </div>
                        </div>
                        <div class="row m-1">
                            <label>Nome de Usuário</label>
                            <div class="col">
                                <input type="text" onChange={getUsername}  class="form-control" name="username" aria-label="First name"/>
                            </div>
                        </div>
                        <div class="row m-1">
                            <label>Senha</label>
                            <div class="col">
                                <input type="password" onChange={getPassword}  class="form-control" name="password" aria-label="First name"/>
                            </div>
                        </div>
                        <div class="row m-1">
                            <label>Email</label>
                            <div class="col">
                                <input type="text"  onChange={getEmail} class="form-control" name="email" aria-label="First name"/>
                            </div>
                        </div>
                        <button type="button" onClick={criarConta} class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Salvar
                        </button>
                        <Link to="/">
                            <button type="button"  class="btn btn-secondary m-2">
                                Cancelar
                            </button>
                        </Link>
                        <p>Tem uma Conta ? <Link to='/login'>Entrar</Link></p>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Dados salvos</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <span>
                                    <h1>Dados salvo com sucesso :)</h1>
                                    <p>Gostaria de entrar ?</p>
                                </span>
                            </div>
                            <div class="modal-footer">
                            <Link to="/conta"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button></Link>
                            <Link to="/login"><button className="btn btn-primary" data-bs-dismiss="modal">Entrar</button></Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}
/*

*/