import {configureStore} from '@reduxjs/toolkit'
import loadersReducer from './loadersSilce'
import userReducer from './userSilce'

const store = configureStore({
    reducer : {
        loader : loadersReducer,
        user : userReducer
    }
})

export default store