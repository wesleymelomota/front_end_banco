import {configureStore} from '@reduxjs/toolkit'
import contaReduce from '../recursos/conta/contaSlice'

export default configureStore({
    reducer: {
        conta: contaReduce
    }
})