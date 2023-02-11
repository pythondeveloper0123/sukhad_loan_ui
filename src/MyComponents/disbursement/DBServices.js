import axios from "axios";
import { access_token } from "../LoginComp";
const url_disbursement = "http://127.0.0.1:8000/disbursement/disbursement/"
const url_installment = "http://127.0.0.1:8000/disbursement/installment/"
const url_defaulter = "http://127.0.0.1:8000/disbursement/defaulter/"
const url_loan = "http://127.0.0.1:8000/disbursement/loan/"
const url_bankdetails = "http://127.0.0.1:8000/disbursement/bank/"
const url_applications = "http://127.0.0.1:8000/disbursement/application/"
const url_vendor = "http://127.0.0.1:8000/disbursement/vendor/"
let url10="http://127.0.0.1:8000/obtain_token/";
let url12="http://127.0.0.1:8000/disbursement/activeuser/";
///////////////disbursement//////////////

export const registerDisbursement=(disbursementObj, config)=>{
    return axios.post(url_disbursement, disbursementObj, config,{ headers: { "Authorization": `Bearer ${access_token}` }});
}

export const getAllDisbursement=()=>{
    return axios.get(url_disbursement,{ headers: { "Authorization": `Bearer ${access_token}` }});
}

export const disbursementDelete=(disbursementId)=>{
    return axios.delete(url_disbursement+disbursementId,{ headers: { "Authorization": `Bearer ${access_token}` }});
}

export const getDisbursement=(disbursementId)=>{
    return axios.get(url_disbursement+"/"+disbursementId,{ headers: { "Authorization": `Bearer ${access_token}` }});
}

export const getUpdatedDisbursementData=(disbursementObj)=>{
    return axios.put(url_disbursement+disbursementObj.id,disbursementObj,{ headers: { "Authorization": `Bearer ${access_token}` }})
}


////////////////////////////Installment//////////////////////


export const registerInstallment=(installmentObj,config)=>{
    return axios.post(url_installment,installmentObj,config,{ headers: { "Authorization": `Bearer ${access_token}` }});
}
export const getAllInstallment=()=>{
    return axios.get(url_installment,{ headers: { "Authorization": `Bearer ${access_token}` }});
}
export const installmentDelete=(installmentId)=>{
    return axios.delete(url_installment+installmentId,{ headers: { "Authorization": `Bearer ${access_token}` }});
}

export const getinstallment=(installmentId)=>{
    return axios.get(url_installment+"/"+installmentId,{ headers: { "Authorization": `Bearer ${access_token}` }});
}

export const getUpdatedinstallmentData=(installmentObj)=>{
    return axios.put(url_installment+"/"+installmentObj.id,installmentObj,{ headers: { "Authorization": `Bearer ${access_token}` }})
}


////////////////defaulter///////////////////////




export const registerDefaulter=(defaulterObj,config)=>{
    return axios.post(url_defaulter,defaulterObj,config,{ headers: {"Authorization": `Bearer ${access_token}`}});
}
export const getAllDefaulter=()=>{
    return axios.get(url_defaulter,{ headers: { "Authorization": `Bearer ${access_token}` }});
}
export const defaulterDelete=(defaulterId)=>{
    return axios.delete(url_defaulter+defaulterId,{ headers: { "Authorization": `Bearer ${access_token}` }});
}
export const getDefaulter=(defaulterId)=>{
    return axios.get(url_defaulter+defaulterId,{ headers: { "Authorization": `Bearer ${access_token}` }});
}

export const getUpdatedDefaulterData=(defaulterObj)=>{
    return axios.put(url_defaulter+defaulterObj.user,defaulterObj,{ headers: { "Authorization": `Bearer ${access_token}` }})
}



//////////////////loan///////////////////
export const getAllLoan=()=>{
    return axios.get(url_loan,{ headers: { "Authorization": `Bearer ${access_token}` }});
}

export const getLoan=(disbursementId)=>{
    return axios.get(url_disbursement+"/"+disbursementId,{ headers: { "Authorization": `Bearer ${access_token}` }});
}



//////////////////bankdetails//////////////

export const getAllbankdetails=()=>{
    return axios.get(url_bankdetails,{ headers: { "Authorization": `Bearer ${access_token}` }});
}
export const getBankDetails=(bankId)=>{
    return axios.get(url_bankdetails+"/"+bankId,{ headers: { "Authorization": `Bearer ${access_token}` }});
}


///////////////applications////////////////////

export const getAllApplications=()=>{
    return axios.get(url_applications,{ headers: { "Authorization": `Bearer ${access_token}` }});

}

//////////////VendorDetails////////////

export const getAllvendordetails=()=>{
    return axios.get(url_vendor,{ headers: { "Authorization": `Bearer ${access_token}` }});
}



export const obtainToken=(obj)=>{
    return axios.post(url10,obj);
};

export const activeUser=(email)=>{
    return axios.get(url12+email+"/",{ headers: { "Authorization": `Bearer ${access_token}` }});
};