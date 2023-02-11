import React, {useState, useEffect} from "react";
import {useForm} from 'react-hook-form';
import { registerInstallment } from "./DBServices";


export default function Installment() {
    const {register, handleSubmit, reset, formState:{errors}}=useForm();
  
    const InstallmentData=async (event)=>{
        console.log(event)
        const resp = await registerInstallment(event,);
        console.log(resp.data)

        reset();
        // redirect("/custguarantor");
    };


  return (
    <>
    <div className='container shadow p-3 mb-5 bg-body rounded'>
      <h1 style={{marginLeft:200}}> Installment Form </h1>   
      <br></br>

      <form onSubmit={handleSubmit(InstallmentData)} style={{marginLeft:200}}>
        <div className="mb-3 ">
            <label className="form-label">LOAN ID :</label>
            <input type="number" className="form-control" {...register("loan")} required/>
        </div>

        <div className="mb-3 ">
            <label className="form-label">remaining_amount :</label>
            <input type="number" className="form-control" {...register("remaining_amount")} required/>
        </div>

        <div className="mb-3 ">
            <label className="form-label">installment_no</label>
            <input type="number" className="form-control" {...register("installment_no")} required/>
        </div>

        <div className="mb-3 ">
            <label className="form-label">monthly_installment_amount</label>
            <input type="number" className="form-control" {...register("monthly_installment_amount")} required/>
        </div>

        <div className="mb-3 ">
            <label className="form-label">installment_expected_date :</label>
            <input type="date" className="form-control" {...register("installment_expected_date")} required/>
        </div>

        <div className="mb-3 ">
            <label className="form-label">installment_paid_date</label>
            <input type="date" className="form-control" {...register("installment_paid_date")} required/>
        </div>


        <div className="mb-3 ">
            <label className="form-label">penalty_amount :</label>
            <input type="number" className="form-control" {...register("penalty_amount")} required/>
        </div>


        
        <div className="mb-3 ">
          <lable for="status">status :</lable><br/>
          <select  className="form-control" name="status" id="status" {...register("status")}> 
            <option   value="ok" id="1" >ok</option>
            <option   value="pending" id="2" >pending</option>
            <option   value="late" id="3" >late</option>
          </select>
        </div>

        <button type="submit" align="center" style={{"margin":"10px"}} className="btn btn-primary">Submit</button>
        <button type="reset" align="center" style={{"margin":"10px"}} className="btn btn-warning">Reset</button>
        </form>
    </div>
    </>
  )
}