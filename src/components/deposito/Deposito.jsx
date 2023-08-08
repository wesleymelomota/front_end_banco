import { useState } from 'react'
import './deposito.css'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setConta } from '../../recursos/conta/contaSlice';

export default () => {
    const [nomeResponsavelConta, setNome] = useState('');
    const [numeroConta, setNumeroConta] = useState('');
    const [valor, setValor] = useState('');
    const token = useSelector((state) => state.conta.sessao.token);
    const dispatch = useDispatch();

    const getNomeResponsavel = (e)=> {
        setNome(e.target.value)
    }
    const getNumeroConta = (e) => {
        setNumeroConta(e.target.value)
    }
    const getValor = (e) => {
        setValor(e.target.value)
    }
    const depositar = ()=> {
        if(nomeResponsavelConta && numeroConta && valor != ''){
            axios.post('http://localhost:8080/banco/transaction/deposito', {nomeResponsavelConta, numeroConta, valor}, {headers: {Authorization: token}})
                .then(response => {dispatch(setConta(response.data))})
                
            clean()
        }
    }
    const clean = () => {
        setNome('')
        setNumeroConta('')
        setValor('')
    }
    const formatMoeda = (moeda) => {
        return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(moeda)
    }
    return(
        <div className="container content ">
            <h2 className='text-white'>Deposito</h2>
            <div className="card ">
                <div className="card-body">
                    <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-2 col-form-label  fs-5">Nome</label>
                        <div class="col-sm-10">
                            <input type="text" value={nomeResponsavelConta} onChange={getNomeResponsavel} name="nomeResponsavelConta" readonly  class="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-2 col-form-label fs-5">Numero Conta</label>
                        <div class="col-sm-10">
                            <input type="number" value={numeroConta} onChange={getNumeroConta} name="numeroConta" readonly  class="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-2 col-form-label fs-5">Valor R$</label>
                        <div class="col-sm-10">
                            <input type="number" value={valor} onChange={getValor} name="valor" readonly  class="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <button type="button"  class="btn btn-success m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Depositar
                        </button>
                        <button type="button" onClick={clean} class="btn btn-secondary m-1"  >
                            Cancelar
                        </button>
                    </div>
                </div>
                    

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Depósito</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Nome do Beneficiário: {nomeResponsavelConta}</p>
                            <p>Valor Depositado: {formatMoeda(valor)}</p>
                            <p>Numero da Conta: {numeroConta}</p>
                        
                        </div>
                        <div class="modal-footer">
                            <button type="button" onClick={clean} class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" onClick={depositar}  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Confirmar
                            </button>
                        </div>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
}