import React, {useState, useEffect} from "react";
import {useForm} from 'react-hook-form';
import { registerDisbursement } from "./DBServices";
import { Navigate, useNavigate } from 'react-router-dom';

export let disb_id = 0;
const files=[];
export default function Disbursement() {
    const {register, handleSubmit, reset}=useForm();
   
  
    const [file, setFile] = useState()
    

    function handleChange(event) {
      setFile(event.target.files[0])  
    };
    files.push(file);

    
    const navigate = useNavigate();
    
    const DisbursementData=async(event)=>{
        console.log(event)
        console.log(file)
        event['insurance_doc']=files[1];
        event['receipt_doc']=files[2];
        console.log(event)
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };
        const resp = await registerDisbursement(event, config);
        console.log(resp.data)
        disb_id = resp.data.id

        reset();
         //redirect("/loandetails");
    };
   

  return (
    <>
    <div className='container shadow p-3 mb-5 bg-body rounded'  >
      <h1 style={{marginLeft:200}}> Loan Disbursement Form </h1>   
      <br></br>

      <form onSubmit={handleSubmit(DisbursementData)} style={{marginLeft:200}}>
        <div className="mb-3 ">
            <label className="form-label">LOAN ID :</label>
            <input type="number" className="form-control" id="inputLoanID" {...register("loan")} required/>
        </div>

        <div className="mb-3">
            <label htmlFor="inputPhoto" className="form-label">Insurance Document : </label>
            <input type="file" className="form-control" id="inputPhoto"  onChange={handleChange} />
        </div>

        <div className="mb-3">
            <label  className="form-label">Payment Mode</label>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="payment_mode" value="neft" id="flexRadioDefault1" {...register("payment_mode")}/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">NEFT</label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="payment_mode" value="rtgs" id="flexRadioDefault2" {...register("payment_mode")}/>
            <label className="form-check-label" htmlFor="flexRadioDefault2">RTGS</label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="payment_mode" value="imps" id="flexRadioDefault2" {...register("payment_mode")}/>
            <label className="form-check-label" htmlFor="flexRadioDefault2">IMPS</label>
            </div>
           
        </div>
        <div className="mb-3 ">
            <label className="form-label">net_disbursed_amount :</label>
            <input type="text" className="form-control" {...register("net_disbursed_amount")} required/>
        </div>
        <div className="mb-3 ">
            <label className="form-label">disbursed_to_account_no :</label>
            <input type="text" className="form-control" {...register("disbursed_to_account_no")} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputImage" className="form-label">Receipt Document : </label>
            <input type="file" className="form-control" id="inputImage"  onChange={handleChange} />
        </div>
      

        <div className="mb-3 ">
          <lable for="status">status :</lable><br/>
          <select  className="form-control" name="status" id="status" {...register("status")}> 
            <option   value="pending" id="1" >pending</option>
            <option   value="disbursed" id="2" >disbursed</option>
          </select>
        </div>

        <button type="submit" align="center" style={{"margin":"10px"}} className="btn btn-primary">Submit</button>
        <button type="reset" align="center" style={{"margin":"10px"}} className="btn btn-warning">Reset</button>
       
      </form>
    </div>
    </>
  )
}
