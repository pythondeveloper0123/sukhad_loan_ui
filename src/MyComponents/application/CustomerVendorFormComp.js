import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { registerCustomerVendor } from './DBServices';
import { application_id } from './CustomerApplicationFormComp';


const files=[];
export default function CustomerVendorFormComp() {
    const {register, handleSubmit, reset, formState:{errors}}=useForm();

    const [file, setFile] = useState()

    function handleChange(event) {
      setFile(event.target.files[0])  
    };

    files.push(file);


    const redirect=useNavigate();

    const customerData=async (event)=>{
        console.log(event)
        console.log(file)
        event['passbook_copy']=files[1];
        event['application']=application_id;
        console.log(event)
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };
        const resp = await registerCustomerVendor(event, config);
        console.log(resp.data)


        reset();
        redirect("/Home");
    };




  return (
    <>
    <div className='container shadow p-3 mb-5 bg-body rounded border border-info'>
      <h1>Customer Vendor Form </h1>   
      <br></br>

      <form onSubmit={handleSubmit(customerData)}>
        <div className="mb-3 ">
            <label htmlFor="inputName" className="form-label">Vendor Name :</label>
            <input type="text" className="form-control" id="inputName" {...register("name")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputVendorType" className="form-label">Type Of Vendor :</label>
            <input type="text" className="form-control" id="inputVendorType" {...register("vendor_type")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputEmail" className="form-label">Email :</label>
            <input type="email" className="form-control" id="inputEmail" {...register("email")} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputMoblie" className="form-label">Mobile No. :</label>
            <input type="number" className="form-control" id="inputMoblie" {...register("mobile")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputAddress" className="form-label">Address :</label>
            <input type="text" className="form-control" id="inputAddress" {...register("address")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputCity" className="form-label">City :</label>
            <input type="text" className="form-control" id="inputCity" {...register("city")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputState" className="form-label">State :</label>
            <input type="text" className="form-control" id="inputState" {...register("state")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputCountry" className="form-label">Country :</label>
            <input type="text" className="form-control" id="inputCountry" {...register("country")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputPinCode" className="form-label">Pin Code :</label>
            <input type="number" className="form-control" id="inputPinCode" {...register("pin_code")} required/>
        </div>

        <div className="mb-3 ">
            <label htmlFor="inputBankName" className="form-label">Bank Name :</label>
            <input type="text" className="form-control" id="inputBankName" {...register("bank_name")} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputAccountNumber" className="form-label">Current Account No. :</label>
            <input type="text" className="form-control" id="inputAccountNumber" {...register("current_account_no")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputIfscCode" className="form-label">IFSC Code :</label>
            <input type="text" className="form-control" id="inputIfscCode" {...register("ifsc_code")} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputPassbookPhoto" className="form-label">Bank Passbook Photo : </label>
            <input type="file" className="form-control" id="inputPassbookPhoto"  onChange={handleChange} />
        </div>



        <button type="submit" align="center" style={{"margin":"10px"}} className="btn btn-primary">Submit</button>
        <button type="reset" align="center" style={{"margin":"10px"}} className="btn btn-warning">Reset</button>
        </form>
    </div>
    </>
  )
}
