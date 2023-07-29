import {configureStore} from '@reduxjs/toolkit'
import contaReduce from '../recursos/conta/contaSlice'
/*ultima alteracao */
export default configureStore({
    reducer: {
        conta: contaReduce
    }
})