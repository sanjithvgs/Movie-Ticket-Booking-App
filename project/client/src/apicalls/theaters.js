import {axiosInstance} from './index';

export const addTheatre = async ()=>{
    try{
        const response = await axiosInstance.post('/api/theatres/add-theatre', payload)
        return response.data
    }catch(error){
        return error.message;
    }
}


export const updateTheatre = async ()=>{
    try{
        const response = await axiosInstance.put('/api/theatres/update-theatre', payload)
        return response.data
    }catch(error){
        return error.message;
    }
}


export const deleteTheatre = async ()=>{
    try{
        const response = await axiosInstance.delete('/api/theatres/delete-theatre', payload)
        return response.data
    }catch(error){
        return error.message;
    }
}