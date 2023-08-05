import { useState } from 'react';
import './saque.css'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setConta } from '../../recursos/conta/contaSlice';

export default () => {
    const [nomeTitularConta, setNome] = useState('');
    const [numeroConta, setNumeroConta] = useState('');
    const [valor, setValor] = useState('');
    const token = useSelector((state) => state.conta.sessao.token);
    const dispatch = useDispatch();

    const clean = ()=> {
        setNome('')
        setNumeroConta('')
        setValor('')
    }
    const sacar = () => {
        if(nomeTitularConta && numeroConta && valor != ''){
            axios.post("http://localhost:8080/banco/saque", {nomeTitularConta, numeroConta, valor}, {headers: {Authorization: token}})
                .then(response => {dispatch(setConta(response.data))})
        }
        clean()
    }
    const formatMoeda = (moeda) => {
        return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(moeda)
    }
    const getNomeTitular = (e)=> {
        setNome(e.target.value)
    }
    const getNumeroConta = (e)=> {
        setNumeroConta(e.target.value)
    }
    const getValor = (e)=> {
        setValor(e.target.value)
    }
    return(
        <div className="saque">
            <div className="container">
                <div className="formulario">
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label text-light fs-5">Nome Titular da conta</label>
                    <div class="col-sm-10">
                    <input type="text" onChange={getNomeTitular} readonly class="form-control" id="staticEmail" placeholder='nome'/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label text-light fs-5">Numero da Conta</label>
                    <div class="col-sm-10">
                    <input type="number" onChange={getNumeroConta} readonly class="form-control" id="staticEmail" placeholder='numero da conta'/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label text-light fs-5">Valor R$</label>
                    <div class="col-sm-10">
                    <input type="text" onChange={getValor} readonly class="form-control" id="staticEmail" placeholder='R$'/>
                    </div>
                </div>
                <div class="mb-3">
                
                <button type="button" class="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Sacar
                </button>
                <button type="button" onClick={clean} class="btn btn-secondary m-1" >
                    Cancelar
                </button>
                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Confirme os dados</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Titular da Conta:  {nomeTitularConta}</p>
                            <p>Numero da Conta:  {numeroConta}</p>
                            <p>Valor: {formatMoeda(valor)}</p>
                        
                        </div>
                        <div class="modal-footer">
                            <button type="button" onClick={clean} class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" onClick={sacar} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Confirmar
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};