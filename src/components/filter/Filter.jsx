import {  useState } from "react"
import Transaction from "../tabela_transactions/Transaction"
import './filter.css' 
import { useDispatch, useSelector } from "react-redux"
import {setListTransactions} from '../../recursos/conta/contaSlice'
import serviceTransaction from '../../api/serviceTransaction'

export default () => {
    
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
    const [nomeOperador, setNomeOperador] = useState('');
    const token = useSelector((state) => state.conta.sessao.token)
    const dispatch = useDispatch();

    const pesquisar = () => {  
        if(dataInicio && dataFim  != ''){
            serviceTransaction(dataInicio, dataFim, nomeOperador, token).then(response =>{ dispatch(setListTransactions(response.data))})
        }else if(nomeOperador != ''){
            serviceTransaction(null, null, nomeOperador, token).then(response =>{ dispatch(setListTransactions(response.data))})
        }
        else{
            serviceTransaction(null, null, null, token).then(response =>{ dispatch(setListTransactions(response.data))})
        }
    }
    const getDataInicio = (e) => {
        setDataInicio(e.target.value)
       
    }
    const getDataFim = (e)=> {
        setDataFim(e.target.value)
    }
    const getNomeOperador = (e) => {
        setNomeOperador(e.target.value)
    }
    return(
        <div className="m-4 d-flex flex-column">
            <span className="d-flex justify-content-around flex-wrap">
                
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label text-dark">Data Inicio</label>
                        <input type="date" onChange={getDataInicio} value={dataInicio} className="form-control" id="exampleFormControlInput1" placeholder=""/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label text-dark">Data Fim</label>
                        <input type="date" onChange={getDataFim} value={dataFim} className="form-control" id="exampleFormControlInput1" placeholder=""/>
                    </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-dark">Nome Operador</label>
                    <input type="search" aria-label="Search" value={nomeOperador} onChange={getNomeOperador} class="form-control" id="exampleFormControlInput1" placeholder="nome"/>
                </div>
            </span>
            <span className="d-flex justify-content-end">
                <button type="button" onClick={pesquisar} className="btn btn-success ">Pesquisar</button>
            </span>
            <Transaction ></Transaction>
        </div>
    )
}