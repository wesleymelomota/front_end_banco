import { createSlice } from "@reduxjs/toolkit";

export const contaSlice = createSlice({
    name: 'conta',
    initialState: {
        transactions: [],
        sessao: {
            username: '',
            token: '',
            conta: {
                idConta: null,
                nomeResponsavel: '',
                numeroConta: null,
                transacoes: [],
                saldo: {id: null, saldo: null}
            },
            isLoggedIn: false
           
        },
        isLoggedIn: false
    },
    reducers: {
        setConta: (state, actions) => {
            state.contaModel = actions.payload
        },
       setListTransactions: (state, actions)=> {
            state.transactions = actions.payload
        },
        setSessao: (state, actions)=> {
            state.sessao = actions.payload
            state.sessao.isLoggedIn = true;
            

       },
       login: (state, actions) => {
            state.isLoggedIn = true;
       },
       logout: (state, actions)=> {
        state.sessao.token = ''
        state.sessao.isLoggedIn = false
        state.sessao.conta = {idConta: null,
            nomeResponsavel: '',
            numeroConta: null,
            transacoes: [],
            saldo: {id: null, saldo: null}}
       }
    }
})

export const { setConta, setListTransactions, setSessao, logout, login } = contaSlice.actions
export default contaSlice.reducer