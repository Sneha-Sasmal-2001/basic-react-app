//step i: configure store
import {configureStore} from '@reduxjs/toolkit'
import todoSlice from '../features/todo/todoSlices'

export  const store = configureStore({
    //import reducer
    reducer: todoSlice 

})