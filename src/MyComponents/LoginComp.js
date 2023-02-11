import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { activeUser, obtainToken } from './application/DBServices';

export var access_token = sessionStorage.getItem("access_token");

export default function LoginComp() {
    const {register, handleSubmit, reset, formState:{errors}}=useForm();



    const redirect=useNavigate();

    const loginData=async (event)=>{

        console.log(event)
        const resp = await obtainToken(event);
        console.log(resp.status)
        
        sessionStorage.setItem("refresh_token", resp.data.refresh);
        sessionStorage.setItem("access_token", resp.data.access);
        console.log(resp.data);

        console.log("access_token", sessionStorage.getItem("access_token"));
        access_token = sessionStorage.getItem("access_token");


        const actuser = await activeUser(event.email);
        console.log(actuser.data);

        reset();
        if(actuser.data.role === "loan_representative"){
            redirect("/newinquiry");
        }else if(actuser.data.role === "customer"){
          redirect(`/CustomerHome/${actuser.data.id}`);
        }else if(actuser.data.role === "operational_head"){
          redirect("/opsdashboard");
        }else if(actuser.data.role === "loan_sanctioning_officer"){
          redirect("/newloans");
        }else if(actuser.data.role === "account_head"){
          redirect("/displayloan");
        }else if(actuser.data.role === "admin"){
          redirect("/applications");
        }else{
            redirect("/home");
        }
        
    };


  return (
    <>
    <div className='container shadow p-3 mb-5 bg-body rounded border border-info'>
      <h1>Log In Form </h1>   
      <br></br>

      <form onSubmit={handleSubmit(loginData)}>
        <div className="mb-3 ">
            <label htmlFor="inputEmail" className="form-label">Email :</label>
            <input type="email" className="form-control" id="inputEmail" {...register("email")} required/>
        </div>
        <h6>{errors.email?.message}</h6>
        <div className="mb-3 ">
            <label htmlFor="inputPassword" className="form-label">Password :</label>
            <input type="password" className="form-control" id="inputPassword" {...register("password")} required/>
        </div>
        <h6>{errors.password?.message}</h6>
       

        <button type="submit" align="center" style={{"margin":"10px"}} className="btn btn-primary">Submit</button>
        </form>
    </div>
    </>
  )
}
