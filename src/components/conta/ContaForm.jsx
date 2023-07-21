import { useState } from "react"
import axios from "axios"
import './conta.css' 
export default () => {

    const [nomeResponsavel, setNome] = useState()
    const contaModel = {
        idConta: '',
        nomeResponsavel: '',
        numeroConta: '',
        saldo: '',
    }
    const [conta, setConta] = useState(contaModel)

    const getNomeResponsavel = (e)=> {
        setNome(e.target.value)
    }
    const submit = ()=> {
        axios.post("http://localhost:8080/banco/conta/cadastro", {nomeResponsavel})
        .then(resp => {setConta(resp.data)})
    } 
    
    return(
            <><div className="main">

                <div className="card m-5">
                    <h1>Crie Uma Conta</h1>
                    <div className="card-body d-block">
                        <div class="row">
                            <div class="col">
                                <input type="text" onChange={getNomeResponsavel}  class="form-control" placeholder="nome" aria-label="First name"/>
                            </div>
                        </div>
                        <button type="button" onClick={submit} class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Enviar
                        </button>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Seus dados</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <span>
                                    <p>Id: {conta.idConta}</p>
                                    <p>Numero Conta: {conta.numeroConta}</p>
                                    <p>Nome: {conta.nomeResponsavel}</p>
                                    <p>Saldo: {conta.saldo.saldo}</p>
                                </span>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                
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