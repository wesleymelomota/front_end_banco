import { useState } from 'react'
import './transferencia.css'
import axios from 'axios'

export default () => {
    
    const [valor, setValor] = useState()
    const [tipo, setTipo] = useState()
    const [nomeOperadorTransacao, setOperador] = useState()
    const [idConta, setIdConta] = useState()
    const [nomeResponsavel, setnomeResponsavel] = useState()
    const [numeroConta, setNumeroConta] = useState()
    const TransferenciaModel = {
        valor: valor,
        tipo: tipo,
        nomeOperadorTransacao: nomeOperadorTransacao,
        idConta: {idConta: Number.parseInt(idConta), nomeResponsavel: nomeResponsavel, numeroConta: Number.parseInt(numeroConta)}
        
    }
    const [transferencia, setTransferencia] = useState(TransferenciaModel)


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
       axios.post("http://localhost:8080/banco/transferencia", {valor, tipo, nomeOperadorTransacao, idConta, nomeResponsavel, numeroConta})
            .then(resp => {
                setTransferencia(resp.data)
            })
        console.log(valor)
    }
    return(
        <div className="form-content">
           <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Valor</label>
            <input type="number" name="valor" onChange={getValor} class="form-control" id="exampleFormControlInput1" placeholder="R$"/>
            </div>
           <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Tipo</label>
            <input type="text" onChange={getTipo} name="tipo" class="form-control" id="exampleFormControlInput1" placeholder="tipo transferencia"/>
            </div>
           <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nome Operador Transação</label>
            <input type="text" onChange={getNomeOperador} name="nomeOperadorTransferencia" class="form-control" id="exampleFormControlInput1" placeholder="quem recebe ?"/>
            </div>
           <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">contaId</label>
            <input type="number" onChange={getIdConta} name="contaId" class="form-control" id="exampleFormControlInput1" placeholder="id"/>
            </div>
           <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">nome Responsavel</label>
            <input type="text" onChange={getNomeResponsavel} name="nomeResponsavel" class="form-control" id="exampleFormControlInput1" placeholder=""/>
            </div>
           <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Numero Conta</label>
            <input type="number" onChange={getNumeroConta} name="numeroConta" class="form-control" id="exampleFormControlInput1" placeholder="numero da conta"/>
            </div>
           <div class="mb-3">
           <button type="button" onClick={tranferir} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Enviar
            </button>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Sua Transferencia</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label>Valor Transferido: {transferencia.valor}</label>
                            <label>tipo: : {transferencia.tipo}</label>
                            <label>Nome de Destino: {transferencia.tipo}</label>
                        
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