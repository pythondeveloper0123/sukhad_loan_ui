import axios from "axios"
import { access_token } from "../LoginComp";

// Django Rest Framework integration url
let url1 = "http://127.0.0.1:8000/customer/userdetails";

let url10 = "http://127.0.0.1:8000/obtain_token/";
let url12 = "http://127.0.0.1:8000/customer/activeuser/";


export const getUser = (userId) => {
    return axios.get(url1 + "/" + userId + "/", { headers: { "Authorization": `Bearer ${access_token}` } })
};

export const obtainToken = (obj) => {
    return axios.post(url10, obj);
};

export const activeUser = (email) => {
    return axios.get(url12 + email + "/", { headers: { "Authorization": `Bearer ${access_token}` } });
};
