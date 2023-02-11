import axios from "axios";
import { access_token } from "../LoginComp";

const url = "http://127.0.0.1:8000/verification/userverify/";

export const getAllUser = () =>{
    return(
        axios.get(url, {headers: {"Authorization": `Bearer ${access_token}`}})
    )
}

export const displayUser = (userId) =>{
    return(
        axios.get(url+userId, {headers: {"Authorization": `Bearer ${access_token}`}})
    )
}

export const getUpdatedUserData = (userObj, userId) =>{
    return axios.patch(url+userId+'/', userObj, {headers: {"Authorization": `Bearer ${access_token}`}});
}