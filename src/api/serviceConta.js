import axios from "axios";

function serviceConta(nomeResponsavel, username, email, password){
    return axios.post("http://localhost:8080/banco/conta", {nomeResponsavel, username, email, password})
}
export default serviceConta;