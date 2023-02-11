import axios from "axios";
import { access_token } from "../LoginComp";

let url13="http://127.0.0.1:8000/loan_sanction/loan_sanction/";
let url14="http://127.0.0.1:8000/loan_sanction/app_update/";


// ---------  LOAN FORM
export const loanForm=(obj)=>{
    console.log(obj);
    return axios.post(url13, obj);
}

// ---------  LOAN Details
export const getLoans=()=>{
    return axios.get(url13,{ headers: { "Authorization": `Bearer ${access_token}` }});
}
export const getLoanById=(id)=>{
    return axios.get(url13+id+"/",{ headers: { "Authorization": `Bearer ${access_token}` }});
}

export const patchLoanDetails=(id,obj)=>{
    const config = {
        headers: {
          "content-type": "multipart/form-data",
          "Authorization": `Bearer ${access_token}`,
        },
      };
    return axios.patch(url13+id+"/",obj,config);//config
}

// ---------  Application Details
export const getApplications=()=>{
    return axios.get(url14,{ headers: { "Authorization": `Bearer ${access_token}` }});
}
export const getApplicationById=(id)=>{
    return axios.get(url14+id+"/",{ headers: { "Authorization": `Bearer ${access_token}` }});
}
export const patchApplicationStatus=(id,obj)=>{
    return axios.patch(url14+id+"/",obj,{ headers: { "Authorization": `Bearer ${access_token}` }});
}

