import axios from "axios";

const serviceLogin = async (username, password) => {
    return axios.post('http://localhost:8080/banco/login', {username, password})
                
}
export default serviceLogin;