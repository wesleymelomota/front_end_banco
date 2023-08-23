import axios from "axios";

export function serviceGetUsuario(username, token){
    return axios.get(`http://localhost:8080/banco/usuario/${username}`, {headers: {Authorization: token, "Content-Type": "application/json"}})
} 
export function serviceUpdateUser(id, name, username, email, token){
    return axios.put("http://localhost:8080/banco/usuario", {id, name, username, email}, {headers: {Authorization: token, "Content-Type": "application/json"}})
}

