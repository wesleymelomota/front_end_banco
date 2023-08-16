import axios from "axios";

function serviceSaque(nomeTitularConta, numeroConta, valor, token){
    return axios.post("http://localhost:8080/banco/saque", {nomeTitularConta, numeroConta, valor}, {headers: {Authorization: token}})
}

export default serviceSaque;