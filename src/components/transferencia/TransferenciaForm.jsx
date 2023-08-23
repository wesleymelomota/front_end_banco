import {  useState } from 'react'
import './transferencia.css'
import { useSelector, useDispatch } from 'react-redux'
import { setConta } from '../../recursos/conta/contaSlice'
import serviceTransferencia from '../../api/serviceTransferencia'

export default () => {
    
    const [valor, setValor] = useState('')
    const [tipo, setTipo] = useState('')
    const [nomeOperadorTransferencia, setOperador] = useState('')
    const [idConta, setIdConta] = useState('')
    const [nomeResponsavel, setnomeResponsavel] = useState('')
    const [numeroConta, setNumeroConta] = useState('')
    const [dataTransferencia, setDataTransferencia] = useState('')
    const [checkedIn, setChecked] = useState(false)

    const token = useSelector((state) => state.conta.sessao.token)
    const conta = useSelector((state) => state.conta.sessao.conta)
    const dispatch = useDispatch()

    let form;
    
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
            serviceTransferencia(valor, tipo, nomeOperadorTransferencia, dataTransferencia,  transferenciaDto.conta, token)
                .then(response => {dispatch(setConta(response.data))})
                .catch(erro => {console.log(erro)})
            clean()
        }
        getSelectTipo()
    }
    const clean = () => {
        setValor('')
        setTipo('')
        setOperador('')
        setIdConta('')
        setnomeResponsavel('')
        setNumeroConta('')
        setDataTransferencia('')
        
    }
    
    const getTitularConta = (e) =>{
        setChecked(e.target.checked)
        if(e.target.checked == true){
            setIdConta(conta.idConta)
            setNumeroConta(conta.numeroConta)
            setnomeResponsavel(conta.nomeResponsavel)
            setOperador(conta.nomeResponsavel)
        }
        
    }
    if(checkedIn){
        form =  <>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label  fs-6">Valor</label>
                    <div class="col-sm-10">
                    <input type="number" readonly name='valor' value={valor} onChange={getValor} class="form-control" id="staticEmail" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label  fs-6">Tipo</label>
                    <div class="col-sm-10">
                        <select class="form-select" name='tipo' id='tipo' aria-label="Default select example">
                            <option value="transferencia-entrada" selected>Transferencia Entrada</option>
                            <option value="transferencia-saida" disabled>Transferencia Saida</option>
                        </select>
                    </div>
                </div>
                
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label  fs-6">Data Transferência</label>
                    <div class="col-sm-10">
                    <input type="date" value={dataTransferencia} onChange={getDataTransferencia} readonly name="dataTransferencia" class="form-control" />
                    </div>
                </div>
        </>
    }else{
        form =  <>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label  fs-6">Valor</label>
                    <div class="col-sm-10">
                    <input type="number" readonly value={valor} onChange={getValor} class="form-control" id="staticEmail" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label  fs-6">Tipo</label>
                    <div class="col-sm-10">
                        <select class="form-select" name='tipo' id='tipo' aria-label="Default select example">
                            <option value="transferencia-entrada" >Transferencia Entrada</option>
                            <option value="transferencia-saida" selected>Transferencia Saida</option>
                        </select>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label  fs-6">Nome Responsável Conta</label>
                    <div class="col-sm-10">
                    <input type="text" value={nomeOperadorTransferencia} readonly name="nomeOperadorTransferencia" onChange={getNomeOperador} class="form-control" id="" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label  fs-6">Id Conta</label>
                    <div class="col-sm-10">
                    <input type="number" value={idConta} readonly onChange={getIdConta} class="form-control" id="" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label  fs-6">Nome Destino</label>
                    <div class="col-sm-10">
                    <input type="text" readonly value={nomeResponsavel} onChange={getNomeResponsavel} class="form-control" id="" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label  fs-6">Numero Conta</label>
                    <div class="col-sm-10">
                    <input type="number" readonly value={numeroConta} onChange={getNumeroConta} class="form-control" id="" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label  fs-6">Data Transferência</label>
                    <div class="col-sm-10">
                    <input type="date" value={dataTransferencia} onChange={getDataTransferencia} readonly name="dataTransferencia" class="form-control" />
                    </div>
                </div>
        </>
    }
    return(
        <div className="form-content container">
            <div className="card ">
                <div className="card-body">

                    <div class="mb-3 row">
                            <label  for="staticEmail" class="col-sm-2 col-form-label  fs-6">
                                Conta Destino é minha ?
                            </label>
                        <div class="col-sm-10 d-flex ">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" onChange={getTitularConta} role="switch" id="flexSwitchCheckChecked"/>
                                <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                            </div>
                        </div>
                    </div>
                        {form}
                    <div class="mb-3">
                    
                        <button type="button" onClick={getSelectTipo} class="btn btn-success m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Transferir
                        </button>
                        <button type="button" onClick={clean} class="btn btn-secondary m-1">
                            Cancelar
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