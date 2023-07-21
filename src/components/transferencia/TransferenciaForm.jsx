import { useState } from 'react'
import './transferencia.css'
import axios from 'axios'

export default () => {
    
    const [valor, setValor] = useState()
    const [tipo, setTipo] = useState()
    const [nomeOperadorTransferencia, setOperador] = useState()
    const [idConta, setIdConta] = useState()
    const [nomeResponsavel, setnomeResponsavel] = useState()
    const [numeroConta, setNumeroConta] = useState()
    const transferenciaModel = {
        valor: valor,
        tipo: tipo,
        nomeOperadorTransferencia: nomeOperadorTransferencia,
        idConta: {idConta: Number.parseInt(idConta), nomeResponsavel: nomeResponsavel, numeroConta: Number.parseInt(numeroConta)}
        
    }
    const [transferencia, setTransferencia] = useState(transferenciaModel)


    const getValor = (e) => {
        setValor(parseFloat( e.target.value))
    }
    const getTipo = (e)=> {
        setTipo(e.target.value)
    }
    const getNomeOperador = (e) => {
        setOperador(e.target.value)
    }
    const getIdConta = (e) => {
        setIdConta(e.target.value)
    }
    const getNomeResponsavel = (e) => {
        setnomeResponsavel(e.target.value)
    }
    const getNumeroConta = (e) => {
        setNumeroConta(e.target.value)
    }
    
    const tranferir = () => {
       axios.post("http://localhost:8080/banco/transferencia", {valor, tipo, nomeOperadorTransferencia, idConta, nomeResponsavel, numeroConta})
            .then(resp => {
                setTransferencia(resp.data)
            })
        console.log(transferenciaModel)
    }
    return(
        <div className="form-content container">
            <div className="card formulario">
                <div className="card-body">

                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Valor</label>
                    <div class="col-sm-10">
                    <input type="number" readonly onChange={getValor} class="form-control" id="staticEmail" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Tipo</label>
                    <div class="col-sm-10">
                    <input type="text" readonly onChange={getTipo} class="form-control" id="" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Nome</label>
                    <div class="col-sm-10">
                    <input type="text" readonly name="nomeOperadorTransferencia" onChange={getNomeOperador} class="form-control" id="" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Id Conta</label>
                    <div class="col-sm-10">
                    <input type="number" readonly onChange={getIdConta} class="form-control" id="" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Nome Destino</label>
                    <div class="col-sm-10">
                    <input type="text" readonly onChange={getNomeResponsavel} class="form-control" id="" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Numero Conta</label>
                    <div class="col-sm-10">
                    <input type="number" readonly onChange={getNumeroConta} class="form-control" id="" />
                    </div>
                </div>
    
                <div class="mb-3">
                <button type="button" onClick={tranferir} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Enviar
                    </button>
                </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Sua Transferencia</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Valor Transferido: {transferencia.valor}</p>
                            <p>tipo: : {transferencia.tipo}</p>
                            <p>Nome de Destino: {transferencia.nomeOperadorTransferencia}</p>
                        
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}