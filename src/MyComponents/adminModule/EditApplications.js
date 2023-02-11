import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getUpdatedUserData, getUserData } from './DBServices';
import { useForm } from 'react-hook-form';


function EditUser() {
    const {id}=useParams('id');
        const[user,setUser]=useState({});
        // const[file,setfiles]=useState({});
    
    useEffect(()=>{
        getUserById();
    },[])
    const {register,handleSubmit,setValue,}=useForm();

    const navi=useNavigate();

        const getUserById=async()=>{
                const getuser=await getUserData(id);

            setUser(getuser.data);


        }
    const updateUser=(updatedUser)=>{
      console.log("helloUser");
      
      getUpdatedUserData(updatedUser,id);
      console.log(updatedUser);
     navi("/applications");
    }

  return (<>
    

    <div className='container'>
     <form onSubmit={handleSubmit(updateUser)} encType='multipart/form-data'> 
    
    <div className='row' style={{width:'30%'}}>
    <h1 className='text-primary'>User Update</h1>

    <div className="mb-3">
     
     <input type="hidden" className="form-control" {...register("id")}{...setValue("id",user.id)} placeholder="User Id"></input>
     </div>

     <div className="mb-3">
     
     <input type="text" className="form-control" {...register("email")}{...setValue("email",user.email)} placeholder="Email"></input>
     </div>
     <div className="mb-3">
     
     <input type="text" className="form-control" {...register("password")}{...setValue("password",user.password)} placeholder="Password"></input>
     </div>

    <div className="mb-3">
     
     <input type="text" className="form-control" {...register("first_name")}{...setValue("first_name",user.first_name)} placeholder="First Name"></input>
     
     </div>
    <div className="mb-3">
     
      <input type="text" className="form-control" {...register("last_name")}{...setValue("last_name",user.last_name)}  placeholder="Last Name"></input>
    </div>
    <div className="mb-3">
     
      <input type="date" className="form-control" {...register("dob")} {...setValue("dob",user.dob)}  placeholder="Date Of Birth"></input>
    </div>
    <div className="mb-3">
     
      <input type="textArea" className="form-control" {...register("address")} {...setValue("address",user.address)}  placeholder="Address"></input>
    </div>
    <div className="mb-3">
     
     <input type="text" className="form-control" {...register("city")}{...setValue("city",user.city)} placeholder="City"></input>
     </div>
     <div className="mb-3">
     
     <input type="text" className="form-control" {...register("state")}{...setValue("state",user.state)} placeholder="State"></input>
     </div>
     <div className="mb-3">
     
     <input type="text" className="form-control" {...register("country")}{...setValue("country",user.country)} placeholder="Country"></input>
     </div>
     <div className="mb-3">
     
     <input type="number" className="form-control" {...register("pin_code")}{...setValue("pin_code",user.pin_code)} placeholder="Pin_Code"></input>
     </div>
     
     <div className="mb-3">
     
     <input type="number" className="form-control" {...register("mobile")}{...setValue("mobile",user.mobile)} placeholder="Mobile"></input>
     </div>
     
     {/* <div className="mb-3">
     
     <input type="file" className="form-control" {...register("photo")}{...setValue("photo",user.photo)} placeholder="Photo"></input>
     </div>
     
     <div className="mb-3">
     
     <input type="file" className="form-control" {...register("signature")}{...setValue("signature",user.signature)} placeholder="Signature"></input>
     </div> */}
{/* 
     <div className="mb-3">
     
     <input type="text" className="form-control" {...register("role")}{...setValue("role",user.role)} placeholder="Role"></input>
     </div> */}
     
     <div className="mb-3">
                                     <select {...register('role')} {...setValue('role', user.role)} >
                                        <option value=""></option>
                                        <option value="customer">customer</option>
                                        <option value="loan_representative">loan_representative</option>
                                        <option value="operational_head">operational_head</option>
                                        <option value="loan_sanctioning_officer">loan_sanctioning_officer</option>
                                        <option value="account_head">account_head</option>
                                        <option value="admin">admin</option>
                                    </select>
       </div>
    {/* <div className="mb-3 ">
     
      <input type="text" className="form-control" {...register("city")} {...setValue("city",user.city)} placeholder="City"></input>
    </div> */}

    <div className="mb-3 text-center">
     
      <input type="submit" className="btn btn-success" ></input>
    </div>

    </div>
    </form>
    </div>

    </>
  )
}



export default EditUser;