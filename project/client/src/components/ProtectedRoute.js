import React, { useEffect } from 'react'
import { showLoading, hideLoading } from '../redux/loadersSilce'
import { getCurrentUser } from '../apicalls/users';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function ProtectedRoute({children}){

    // Validate the user 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getValidUser = async() =>{
        try{
            dispatch(showLoading)
            const response = await getCurrentUser()
            console.log(response)
            dispatch(hideLoading)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(localStorage.getItem('token')){
            getValidUser()
        }else{
            navigate('/login')
        }
    })

    return(
        <div> {children} </div>     
    )
}

export default ProtectedRoute

