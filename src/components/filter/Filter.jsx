import { Component, useEffect, useState } from "react"
import Transaction from "../tabela_transactions/Transaction"
import axios from 'axios'

export default () => {
    
    const [dataInicio, setDataInicio] = useState();
    const [dataFim, setDataFim] = useState();
    const [nomeOperador, setNomeOperador] = useState();
    const [transactions, setTransactions] = useState([])
       
    const pesquisar = () => {
        
        axios.get("http://localhost:8080/banco/transactions", {params: {dataInicio, dataFim, nomeOperador}})
        .then(response =>{ setTransactions(response.data)})
        
    }
    const getDataInicio = (e) => {
        setDataInicio(e.target.value)
       
    }
    const getDataFim = (e)=> {
        setDataFim(e.target.value)
    }
    const getNomeOperador = (e) => {
        setNomeOperador(e.target.value)
        console.log(e.target.value)
        
    }
    return(
        <div className="m-4 d-flex flex-column">
            <span className="d-flex justify-content-around flex-wrap">
                
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Data Inicio</label>
                        <input type="datetime-local" onChange={getDataInicio} value={dataInicio} className="form-control" id="exampleFormControlInput1" placeholder=""/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Data Fim</label>
                        <input type="datetime-local" onChange={getDataFim} value={dataFim} className="form-control" id="exampleFormControlInput1" placeholder=""/>
                    </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nome Operador</label>
                    <input type="search" aria-label="Search" value={nomeOperador} onChange={getNomeOperador} class="form-control" id="exampleFormControlInput1" placeholder="nome"/>
                </div>
            </span>
            <span className="d-flex justify-content-end">
                <button type="button" onClick={pesquisar} className="btn btn-success ">Pesquisar</button>
            </span>
            <Transaction transactions={transactions} ></Transaction>
        </div>
    )
}