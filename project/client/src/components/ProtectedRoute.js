import React, { useEffect } from 'react'
import { showLoading, hideLoading } from '../redux/loadersSilce'
import { getCurrentUser } from '../apicalls/users';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser} from '../redux/userSilce'

function ProtectedRoute({children}){

    const { user } = useSelector((state)=> state.user)

    console.log(user)  // => this will display the detail of current use who logged in now.

    // Validate the user 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getValidUser = async() =>{
        try{
            dispatch(showLoading());
            const response = await getCurrentUser();
            console.log(response);
            dispatch(setUser(response.data));
            dispatch(hideLoading());
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(localStorage.getItem('token')){
            getValidUser();
        }else{
            navigate('/login')
        }
    },[])

    return(
    <>
    <div> {children} </div>  
    <h1> {user} </h1>   
    </>
        
    )
}

export default ProtectedRoute;

