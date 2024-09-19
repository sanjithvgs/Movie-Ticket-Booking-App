import {configureStore} from '@reduxjs/toolkit'
import loadersReducer from './loadersSilce'

const store = configureStore({
    reducer : {
        loader : loadersReducer
    }
})

export default store