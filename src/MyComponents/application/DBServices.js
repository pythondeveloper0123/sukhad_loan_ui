import axios from "axios";
import { access_token } from "../LoginComp";




let url1="http://127.0.0.1:8000/application/inquiry/";
let url2="http://127.0.0.1:8000/application/user/";
let url3="http://127.0.0.1:8000/application/family/";
let url4="http://127.0.0.1:8000/application/bank/";
let url5="http://127.0.0.1:8000/application/application/";
let url6="http://127.0.0.1:8000/application/document/";
let url7="http://127.0.0.1:8000/application/loan/";
let url8="http://127.0.0.1:8000/application/guarantor/";
let url9="http://127.0.0.1:8000/application/vendor/";
let url10="http://127.0.0.1:8000/obtain_token/";
let url11="http://127.0.0.1:8000/blacklist_token/";
let url12="http://127.0.0.1:8000/application/activeuser/";

export const registerInquiry=(inq)=>{
    console.log(inq);
    return axios.post(url1,inq);
};
export const registerCustomerUser=(cobj,config)=>{
    console.log(cobj);
    return axios.post(url2,cobj,config);
};
export const registerCustomerFamily=(cobj)=>{
    console.log(cobj);
    return axios.post(url3,cobj);
};
export const registerCustomerBank=(cobj,config)=>{
    console.log(cobj);
    return axios.post(url4,cobj,config);
};
export const registerCustomerApplication=(cobj)=>{
    console.log(cobj);
    return axios.post(url5,cobj);
};
export const registerCustomerDocument=(cobj,config)=>{
    console.log(cobj);
    return axios.post(url6,cobj,config);
};
export const registerCustomerLoan=(cobj)=>{
    console.log(cobj);
    return axios.post(url7,cobj);
};
export const registerCustomerGuarantor=(cobj,config)=>{
    console.log(cobj);
    return axios.post(url8,cobj,config);
};
export const registerCustomerVendor=(cobj,config)=>{
    console.log(cobj);
    return axios.post(url9,cobj,config);
};





export const getInquiries=()=>{
    return axios.get(url1,{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const getInquiry=(id)=>{
    return axios.get(url1+id+"/",{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const patchInquiryStatus=(id,inqr)=>{
    return axios.patch(url1+id+"/",inqr,{ headers: { "Authorization": `Bearer ${access_token}` }});
};




export const getCustomerUsers=()=>{
    return axios.get(url2,{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const getCustomerUser=(id)=>{
    return axios.get(url2+id+"/",{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const getCustomerFamilies=()=>{
    return axios.get(url3,{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const getCustomerFamily=(id)=>{
    return axios.get(url3+id+"/",{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const getCustomerBanks=()=>{
    return axios.get(url4,{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const getCustomerBank=(id)=>{
    return axios.get(url4+id+"/",{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const getCustomerApplications=()=>{
    return axios.get(url5,{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const getCustomerApplication=(id)=>{
    return axios.get(url5+id+"/",{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const patchCustomerApplicationStatus=(id,apps)=>{
    return axios.patch(url5+id+"/",apps,{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const getCustomerDocuments=()=>{
    return axios.get(url6,{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const getCustomerDocument=(id)=>{
    return axios.get(url6+id+"/",{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const getCustomerLoans=()=>{
    return axios.get(url7,{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const getCustomerLoan=(id)=>{
    return axios.get(url7+id+"/",{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const getCustomerGuarantors=()=>{
    return axios.get(url8,{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const getCustomerGuarantor=(id)=>{
    return axios.get(url8+id+"/",{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const getCustomerVendors=()=>{
    return axios.get(url9,{ headers: { "Authorization": `Bearer ${access_token}` }});
};
export const getCustomerVendor=(id)=>{
    return axios.get(url9+id+"/",{ headers: { "Authorization": `Bearer ${access_token}` }});
};




export const obtainToken=(obj)=>{
    return axios.post(url10,obj);
};
export const activeUser=(email)=>{
    return axios.get(url12+email+"/",{ headers: { "Authorization": `Bearer ${access_token}` }});
};



export const getStudents=()=>{
    return axios.get(url1);
};
export const deleteStudent=(roll)=>{
    return axios.delete(url1+roll);
};
export const getStudent=(id)=>{
    return axios.get(url1+id);
};
export const updateStudent=(roll,studobj)=>{
    console.log(studobj);
    return axios.put(url1+roll+"/",studobj)
    
};