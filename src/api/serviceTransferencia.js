import axios from "axios";

function serviceTransferencia(valor, tipo, nomeOperadorTransferencia, dataTransferencia,  conta, token){
    return axios.post("http://localhost:8080/banco/transferencia", {valor, tipo, nomeOperadorTransferencia, dataTransferencia, conta: conta}, 
    {headers: {Authorization: token, "Content-Type": "application/json"}})
}

export default serviceTransferencia;