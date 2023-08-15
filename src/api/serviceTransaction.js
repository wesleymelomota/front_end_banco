import axios from 'axios'

const obterTransactions = async ( dataInicio, dataFim, nomeOperador,  token) => {
    return axios.get("http://localhost:8080/banco/transactions",  {params: {dataInicio, dataFim, nomeOperador}, headers: {Authorization: token}})
        
}

export default obterTransactions;