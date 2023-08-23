import { createSlice } from "@reduxjs/toolkit";

export const contaSlice = createSlice({
    name: 'conta',
    initialState: {
        transactions: [],
        sessao: {
            userName: '',
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
        usuario: {
            id: '',
            name: '',
            username: '', 
            email: ''
        }
    },
    reducers: {
        setConta: (state, actions) => {
            state.sessao.conta = actions.payload
        },

       setListTransactions: (state, actions)=> {
            state.sessao.conta.transacoes = actions.payload
        },
        setSessao: (state, actions)=> {
            state.sessao = actions.payload
            state.transactions = actions.payload.conta.transacoes
            state.sessao.isLoggedIn = true;  
       },
       setSaldoConta: (state, actions) => {
            state.sessao.conta.saldo.saldo = actions.payload
       },
       
       logout: (state, actions)=> {
        state.sessao.token = ''
        state.sessao.isLoggedIn = false
        state.sessao.conta = {idConta: null,
            nomeResponsavel: '',
            numeroConta: null,
            transacoes: [],
            saldo: {id: null, saldo: null}}
       },
       setUsuario: (state, actions) => {
        state.usuario = actions.payload
       }, 
       updateUsername: (state, actions)=> {
        state.sessao.userName = actions.payload
       }

    }
})

export const { setConta, setListTransactions, setSessao, logout, setSaldoConta, setUsuario, updateUsername } = contaSlice.actions
export default contaSlice.reducer