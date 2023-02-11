import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { registerCustomerFamily } from './DBServices';
import { user_id } from './CustomerUserFormComp';


export default function CustomerFamilyFormComp() {
    const {register, handleSubmit, reset, formState:{errors}}=useForm();

    const redirect=useNavigate();
    const customerData=async (event)=>{
        console.log(event)
        event['user']=user_id;
        console.log(event)
        const resp = await registerCustomerFamily(event);
        console.log(resp.data)
        reset();
        redirect("/custbank");
    };


    

  return (
    <>
    <div className='container shadow p-3 mb-5 bg-body rounded border border-info'>
      <h1>Customer Family Details</h1>   
      <br></br>

      <form onSubmit={handleSubmit(customerData)}>
        <div className="mb-3 ">
            <label htmlFor="inputFatherName" className="form-label">Father Name :</label>
            <input type="text" className="form-control" id="inputFatherName" {...register("father_name")} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputFatherProfession" className="form-label">Father Profession :</label>
            <input type="text" className="form-control" id="inputFatherProfession" {...register("father_profession")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputMotherName" className="form-label">Mother Name :</label>
            <input type="text" className="form-control" id="inputMotherName" {...register("mother_name")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputMotherProfession" className="form-label">Mother Profession :</label>
            <input type="text" className="form-control" id="inputMotherProfession" {...register("mother_profession")} required/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Marital Status</label>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="marital_status" value="married" id="flexRadioDefault1" {...register("marital_status")}/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">Married</label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="marital_status" value="unmarried" id="flexRadioDefault2" {...register("marital_status")}/>
            <label className="form-check-label" htmlFor="flexRadioDefault2">Unmarried</label>
            </div>
            <h6>{errors.marital_status?.message}</h6>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputSpouseName" className="form-label">Spouse Name :</label>
            <input type="text" className="form-control" id="inputSpouseName" {...register("spouse_name")}/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputPassword" className="form-label">Spouse Profession :</label>
            <input type="text" className="form-control" id="inputPassword" {...register("spouse_profession")}/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputMoblie" className="form-label">Mobile No. of Family :</label>
            <input type="number" className="form-control" id="inputMoblie" {...register("mobile")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputAddress" className="form-label">Address :</label>
            <input type="text" className="form-control" id="inputAddress" {...register("address")} required/>
        </div>

        <button type="submit" align="center" style={{"margin":"10px"}} className="btn btn-primary">Submit</button>
        <button type="reset" align="center" style={{"margin":"10px"}} className="btn btn-warning">Reset</button>
        </form>
    </div>
    </>
  )
}
