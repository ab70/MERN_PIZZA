import axios from 'axios';

//urls
const URL = 'http://localhost:4000/api'

export const signUpUser = async (data)=>{
    try{
        return await axios.post(`${URL}/user/register`,data,{withCredentials: true })
    }
    catch(err){
        console.log('error while calling signup api from client', err);
    }
} 

export const signInUser = async (data)=>{
    try{
        return await axios.post(`${URL}/user/login`,data,{ withCredentials: true})
    }
    catch(err){
        console.log(err);
    }
}