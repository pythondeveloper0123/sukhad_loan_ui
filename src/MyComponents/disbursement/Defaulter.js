import React, {useState, useEffect} from "react";
import {useForm} from 'react-hook-form';
import { registerDefaulter } from "./DBServices";
import { useNavigate } from 'react-router-dom';

export default function Defaulter() {
    const {register, handleSubmit, reset, formState:{errors}}=useForm();
  
    const DefaulterData=async (event)=>{
        console.log(event)
        const resp = await registerDefaulter(event);
        console.log(resp.data)

        reset();
        // redirect("/custguarantor");
    };


  return (
    <>
              <div className='container shadow p-3 mb-5 bg-body rounded'>
                <h1 style={{marginLeft:200}}> Defaulter Form </h1>   
                <br></br>

                <form onSubmit={handleSubmit(DefaulterData)} style={{marginLeft:200}}>
                  <div className="mb-3 ">
                      <label className="form-label">USER ID</label>
                      <input type="number" className="form-control" {...register("user")} required/>
                  </div>

                  <div className="mb-3 ">
                      <label className="form-label">default_amount :</label>
                      <input type="number" className="form-control" {...register("default_amount")} required/>
                  </div>

                  <div className="mb-3 ">
                      <label className="form-label">pending_since_date</label>
                      <input type="date" className="form-control" {...register("pending_since_date")} required/>
                  </div>

                  <button type="submit" align="center" style={{"margin":"10px"}} className="btn btn-primary">Submit</button>
                  <button type="reset" align="center" style={{"margin":"10px"}} className="btn btn-warning">Reset</button>
                  </form>
              </div>
    </>
  )
}