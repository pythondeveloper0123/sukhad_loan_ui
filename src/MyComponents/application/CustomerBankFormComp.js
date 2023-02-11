import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { registerCustomerBank } from './DBServices';
import { user_id } from './CustomerUserFormComp';


const files=[];
export default function CustomerBankFormComp() {
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
        event['user']=user_id;
        console.log(event)
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };
        const resp = await registerCustomerBank(event, config);
        console.log(resp.data)

        reset();
        redirect("/custapplication");
    };


  return (
    <>
    <div className='container shadow p-3 mb-5 bg-body rounded border border-info'>
      <h1>Customer Bank Details </h1>   
      <br></br>

      <form onSubmit={handleSubmit(customerData)}>
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
