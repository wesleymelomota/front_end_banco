import { useSelector } from "react-redux"
import Login from "../../login/Login";

import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const isLoggedIn = useSelector((state) => state.conta.sessao.isLoggedIn);
    const navigate = useNavigate();
    
    if(!isLoggedIn){
        return <Login/>
    }

    return children
}