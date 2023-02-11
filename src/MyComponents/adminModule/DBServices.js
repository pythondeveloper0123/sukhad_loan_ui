import axios from "axios";
import { access_token } from "../LoginComp";

// let url="http://127.0.0.1:3003/students/";

// let url1="http://127.0.0.1:8000/application/inquiry/";
// let url3="http://127.0.0.1:8000/application/family/";
// let url4="http://127.0.0.1:8000/application/bank/";
// let url6="http://127.0.0.1:8000/application/document/";
// let url7="http://127.0.0.1:8000/application/loan/";
// let url8="http://127.0.0.1:8000/application/guarantor/";
// let url9="http://127.0.0.1:8000/application/vendor/";

let url10 ="http://127.0.0.1:8000/admin_module/userdetails/";
let url2="http://127.0.0.1:8000/admin_module/user/";
let url5="http://127.0.0.1:8000/admin_module/application/";


// import { access_token } from "../MyComponents/application/LoginComp";

// let url11="http://127.0.0.1:8000/obtain_token/";
// let url11="http://127.0.0.1:8000/blacklist_token/";
// let url12="http://127.0.0.1:8000/application/activeuser/";
let url12="http://127.0.0.1:8000/admin_module/activeuser/";





// export const obtainToken=(obj)=>{
//     return axios.post(url11,obj);
// };
export const activeUser=(email)=>{
    return axios.get(url12+email+"/",{ headers: { "Authorization": `Bearer ${access_token}` }});
};




// export const registerInquiry=(inq)=>{
//     console.log(inq);
//     return axios.post(url1,inq);
// };

// export const Inquiry=()=>{
//     return axios.get(url1);
// };
// export const getInquriryByIdUser=(userID)=>{

//     return axios.get(url1+userID);
// }
// export const DeleteInquriryByIdUser=(userID)=>{
//     return axios.delete(url1+userID);
// }


//adminuser

// export const registerCustomerUser=(cobj,config)=>{
//     console.log(cobj);
//     return axios.post(url2,cobj,config);

// };
export const getUser=()=>{

    return axios.get(url2,{ headers: { "Authorization": `Bearer ${access_token}` }});
}

export const DeleteUserById=(userID)=>{
    return axios.delete(url2+userID);
}

export const getUserData=(userID,config)=>{

    return axios.get(url2+userID,config);
}

export const getUpdatedUserData=(userObj,config)=>{
    return axios.patch(url2+userObj.id+"/",userObj,config)};


//userdetails

// export const registerCustomerUser=(cobj,config)=>{
//     console.log(cobj);
//     return axios.post(url10,cobj,config);

// };
export const getUserDetailsById=()=>{

    return axios.get(url5,{ headers: { "Authorization": `Bearer ${access_token}` }});
}
// export const DeleteUserById=(userID)=>{
//     return axios.delete(url10+userID);
// }
 export const getUserDetailsByIds=(userID)=>{

    return axios.get(url10+userID+"/",{ headers: { "Authorization": `Bearer ${access_token}` }});
};

// export const getUpdatedUserData=(userObj,config)=>{
//     return axios.patch(url10+userObj.id+"/",userObj,config)};






// export const registerCustomerFamily=(cobj)=>{
//     console.log(cobj);
//     return axios.post(url3,cobj);
// };
// export const registerCustomerBank=(cobj,config)=>{
//     console.log(cobj);
//     return axios.post(url4,cobj,config);
// };
// export const registerCustomerApplication=(cobj)=>{
//     console.log(cobj);
//     return axios.post(url5,cobj);
// };
// export const registerCustomerDocument=(cobj,config)=>{
//     console.log(cobj);
//     return axios.post(url6,cobj,config);
// };
// export const registerCustomerLoan=(cobj)=>{
//     console.log(cobj);
//     return axios.post(url7,cobj);
// };
// export const registerCustomerGuarantor=(cobj,config)=>{
//     console.log(cobj);
//     return axios.post(url8,cobj,config);
// };
// export const registerCustomerVendor=(cobj,config)=>{
//     console.log(cobj);
//     return axios.post(url9,cobj,config);
// };





// export const getInquiries=()=>{
//     return axios.get(url1);
// };
// export const patchInquiryStatus=(id,inqr)=>{
//     return axios.patch(url1+id+"/",inqr);
// };