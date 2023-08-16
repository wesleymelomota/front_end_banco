import axios from "axios";

function serviceDeposito(nomeResponsavelConta, numeroConta, valor, token){
    return axios.post('http://localhost:8080/banco/transaction/deposito', {nomeResponsavelConta, numeroConta, valor}, {headers: {Authorization: token}})
    
}

export default serviceDeposito;