import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { registerCustomerApplication, registerCustomerFamily } from './DBServices';
import { user_id } from './CustomerUserFormComp';


export let application_id = 0;
export default function CustomerApplicationFormComp() {
    const {register, handleSubmit, reset, formState:{errors}}=useForm();

    const redirect=useNavigate();
    const customerData=async (event)=>{
        console.log(event);
        event['user']=user_id;
        console.log(event);
        const resp = await registerCustomerApplication(event);
        console.log(resp.data);
        application_id=resp.data.id

        reset();
        redirect("/custdocument");
    };


    

  return (
    <>
    <div className='container shadow p-3 mb-5 bg-body rounded border border-info'>
      <h1>Customer Loan Application</h1>   
      <br></br>

      <form onSubmit={handleSubmit(customerData)}>
        <div className="mb-3 ">
            <label htmlFor="inputAadhaarNo" className="form-label">Aadhaar No. :</label>
            <input type="text" className="form-control" id="inputAadhaarNo" {...register("aadhaar_no")} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputPanNo" className="form-label">PAN No. :</label>
            <input type="text" className="form-control" id="inputPanNo" {...register("pan_no")} required/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Type Of Employment :</label>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="type_of_employment" value="self_employed" id="flexRadioDefault1" {...register("type_of_employment")}/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">Self Employed</label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="type_of_employment" value="salaried" id="flexRadioDefault2" {...register("type_of_employment")}/>
            <label className="form-check-label" htmlFor="flexRadioDefault2">Salaried</label>
            </div>
            <h6>{errors.type_of_employment?.message}</h6>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputBusinessTitle" className="form-label">Business Title :</label>
            <input type="text" className="form-control" id="inputBusinessTitle" {...register("business_title")} required/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Business Type: </label>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="business_type" value="manufacturing" id="inputBusinessType1" {...register("business_type")}/>
            <label className="form-check-label" htmlFor="inputBusinessType1">Manufacturing</label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="business_type" value="service" id="inputBusinessType2" {...register("business_type")}/>
            <label className="form-check-label" htmlFor="inputBusinessType2">Service</label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="business_type" value="trading" id="inputBusinessType3" {...register("business_type")}/>
            <label className="form-check-label" htmlFor="inputBusinessType3">Trading</label>
            </div>
            <h6>{errors.marital_status?.message}</h6>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputBusinessAddress" className="form-label">Business Address :</label>
            <input type="text" className="form-control" id="inputBusinessAddress" {...register("business_address")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputGstNo" className="form-label">GST Registration No. :</label>
            <input type="text" className="form-control" id="inputGstNo" {...register("gst_registration_no")} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputBusinessLicenseNo" className="form-label">Business License No. :</label>
            <input type="text" className="form-control" id="inputBusinessLicenseNo" {...register("business_license_no")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputAvgTurnover" className="form-label">Expected Average Annual Turnover :</label>
            <input type="text" className="form-control" id="inputAvgTurnover" {...register("expected_average_annual_turnover")} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputBusinessYears" className="form-label">Years in The Current Business :</label>
            <input type="number" className="form-control" id="inputBusinessYears" {...register("years_in_current_business")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputCollateral" className="form-label">Collateral :</label>
            <input type="text" className="form-control" id="inputCollateral" {...register("collateral")} required/>
        </div>

        <button type="submit" align="center" style={{"margin":"10px"}} className="btn btn-primary">Submit</button>
        <button type="reset" align="center" style={{"margin":"10px"}} className="btn btn-warning">Reset</button>
        </form>
    </div>
    </>
  )
}
