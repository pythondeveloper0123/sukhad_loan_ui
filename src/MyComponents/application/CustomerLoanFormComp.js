import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { registerCustomerLoan, } from './DBServices';
import { application_id } from './CustomerApplicationFormComp';




export default function CustomerLoanFormComp() {
    const {register, handleSubmit, reset, formState:{errors}}=useForm();

    const redirect=useNavigate();

    const customerData=async (event)=>{
        console.log(event)

        event['application']=application_id;
        console.log(event)
        const resp = await registerCustomerLoan(event,);
        console.log(resp.data)

        reset();
        redirect("/custguarantor");
    };


  return (
    <>
    <div className='container shadow p-3 mb-5 bg-body rounded border border-info'>
      <h1>Customer Loan Required </h1>   
      <br></br>

      <form onSubmit={handleSubmit(customerData)}>
        <div className="mb-3 ">
        <label htmlFor="inputLoanPrincipalAmount" className="form-label">Loan Principal Amount :</label>
        <input type="number" className="form-control" id="inputLoanPrincipalAmount" {...register("loan_principal_amount")} required/>
        </div>
        <div className="mb-3">
        <label htmlFor="inputLoanTenureYears" className="form-label">Loan Tenure In Year :</label>
        <input type="number" className="form-control" id="inputLoanTenureYears" {...register("loan_tenure")} required/>
        </div>    
 


        <button type="submit" align="center" style={{"margin":"10px"}} className="btn btn-primary">Submit</button>
        <button type="reset" align="center" style={{"margin":"10px"}} className="btn btn-warning">Reset</button>
        </form>
    </div>
    </>
  )
}
