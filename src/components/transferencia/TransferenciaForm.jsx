import { useState } from 'react'
import './transferencia.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setConta } from '../../recursos/conta/contaSlice'

export default () => {
    
    const [valor, setValor] = useState('')
    const [tipo, setTipo] = useState('')
    const [nomeOperadorTransferencia, setOperador] = useState('')
    const [idConta, setIdConta] = useState('')
    const [nomeResponsavel, setnomeResponsavel] = useState('')
    const [numeroConta, setNumeroConta] = useState('')
    const [dataTransferencia, setDataTransferencia] = useState('')
    const token = useSelector((state) => state.conta.sessao.token)
    const dispatch = useDispatch()
    
    const transferenciaDto = {
        valor: valor,
        tipo: tipo,
        nomeOperadorTransferencia: nomeOperadorTransferencia,
        dataTransferencia: dataTransferencia,
        conta: {idConta: Number.parseInt(idConta), nomeResponsavel: nomeResponsavel, numeroConta: Number.parseInt(numeroConta)}
        
    }
    const formatMoeda = (moeda) => {
        return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(moeda)
    }
    const getSelectTipo = ()=> {
        let select = document.getElementById('tipo')
        let textContent = select.options[select.selectedIndex].value
        setTipo(textContent)
    }
    const getValor = (e) => {
        setValor(parseFloat( e.target.value))
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
    const getDataTransferencia = (e) => {
        setDataTransferencia(e.target.value)
    }
    const tranferir = () => {
        if(valor && tipo && nomeOperadorTransferencia && idConta && nomeResponsavel && numeroConta && dataTransferencia != ''){
            axios.post("http://localhost:8080/banco/transferencia", {valor, tipo, nomeOperadorTransferencia, dataTransferencia, conta: transferenciaDto.conta}, 
            {headers: {Authorization: token, "Content-Type": "application/json"}})
            .then(response => {dispatch(setConta(response.data))})
            .catch(erro => {console.log(erro)})
            clean()
        }
        getSelectTipo()
    }
    const clean = () => {
        setIdConta('')
        setNumeroConta('')
        setOperador('')
        setTipo('')
        setValor('')
        setnomeResponsavel('')
    
    }
    return(
        <div className="form-content container">
            <div className="card formulario">
                <div className="card-body">

                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label text-light fs-5">Valor</label>
                    <div class="col-sm-10">
                    <input type="number" readonly onChange={getValor} class="form-control" id="staticEmail" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label text-light fs-5">Tipo</label>
                    <div class="col-sm-10">
                        <select name='tipo' id='tipo'>
                            <option value="transferencia-entrada" selected>Transferencia Entrada</option>
                            <option value="transferencia-saida">Transferencia Saida</option>
                        </select>
                    </div>
                </div>
                
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label text-light fs-5">Nome</label>
                    <div class="col-sm-10">
                    <input type="text" readonly name="nomeOperadorTransferencia" onChange={getNomeOperador} class="form-control" id="" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label text-light fs-5">Id Conta</label>
                    <div class="col-sm-10">
                    <input type="number" readonly onChange={getIdConta} class="form-control" id="" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label text-light fs-5">Nome Destino</label>
                    <div class="col-sm-10">
                    <input type="text" readonly onChange={getNomeResponsavel} class="form-control" id="" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label text-light fs-5">Numero Conta</label>
                    <div class="col-sm-10">
                    <input type="number" readonly onChange={getNumeroConta} class="form-control" id="" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label text-light fs-5">Data Transferência</label>
                    <div class="col-sm-10">
                    <input type="date" onChange={getDataTransferencia} readonly name="dataTransferencia" class="form-control" />
                    </div>
                </div>
    
                <div class="mb-3">
                
                <button type="button" onClick={getSelectTipo} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Transferir
                </button>
                </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Transferência</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Valor Transferido: {formatMoeda(valor)}</p>
                            <p>tipo:  {tipo}</p>
                            <p>Nome de Destino: {nomeResponsavel}</p>
                        
                        </div>
                        <div class="modal-footer">
                            <button type="button" onClick={clean} class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" onClick={tranferir} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Confirmar
                            </button>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}