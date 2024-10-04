import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name: 'loader',

    initialState:{
        loading : false
    },

    reducers:{
        showLoading : (state) =>{
            state.loading = false
        },  

        hideLoading : (state) =>{
            state.loading = false
        },
    }
})

const { showLoading, hideLoading } = loaderSlice.actions;

export default loaderSlice.reducer;