import { useEffect, useState } from 'react';
import './saque.css'
import { useSelector, useDispatch } from 'react-redux';
import { setConta } from '../../recursos/conta/contaSlice';
import serviceSaque from '../../api/serviceSaque';

export default () => {
    const [nomeTitularConta, setNome] = useState('');
    const [numeroConta, setNumeroConta] = useState('');
    const [valor, setValor] = useState('');
    
    const conta = useSelector((state) => state.conta.sessao.conta);
    const token = useSelector((state) => state.conta.sessao.token);
    const dispatch = useDispatch();
    
    useEffect(()=> {
        setNome(conta.nomeResponsavel)
        setNumeroConta(conta.numeroConta)
    })

    const clean = ()=> {
        setValor('')
    }
    const sacar = () => {
        if(nomeTitularConta && numeroConta && valor != ''){
             serviceSaque(nomeTitularConta, numeroConta, valor, token)   
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
                <h2 className=''>Saque</h2>
                <div className="card ">
                    <div className="card-body">

                        <div class="mb-3 row">
                            <label for="staticEmail" class="col-sm-2 col-form-label fs-5">Valor R$</label>
                            <div class="col-sm-10">
                            <input type="number" value={valor} onChange={getValor} readonly class="form-control" id="staticEmail" placeholder='R$'/>
                            </div>
                        </div>
                        <div class="mb-3">
                        
                        <button type="button" class="btn btn-success m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Sacar
                        </button>
                        <button type="button" onClick={clean} class="btn btn-secondary m-1" >
                            Cancelar
                        </button>
                        </div>
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