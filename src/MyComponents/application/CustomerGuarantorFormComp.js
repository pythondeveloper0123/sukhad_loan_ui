import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { registerCustomerGuarantor } from './DBServices';
import { application_id } from './CustomerApplicationFormComp';


const files=[];
export default function CustomerGuarantorFormComp() {
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
        event['photo']=files[1];
        event['income_certificate']=files[2];
        event['passbook_copy']=files[3];
        event['application']=application_id;
        console.log(event)
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };
        const resp = await registerCustomerGuarantor(event, config);
        console.log(resp.data)


        reset();
        redirect("/custvendor");
    };




  return (
    <>
    <div className='container shadow p-3 mb-5 bg-body rounded border border-info'>
      <h1>Customer Guarantor Form </h1>   
      <br></br>

      <form onSubmit={handleSubmit(customerData)}>
        <div className="mb-3 ">
            <label htmlFor="inputRelationship" className="form-label">Relationship With Customer :</label>
            <input type="text" className="form-control" id="inputRelationship" {...register("relation_with_customer")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputName" className="form-label">Full Name :</label>
            <input type="text" className="form-control" id="inputName" {...register("name")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputDob" className="form-label">Date of Birth :</label>
            <input type="date" className="form-control" id="inputDob" {...register("dob")} required/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Gender</label>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" value="female" id="flexRadioDefault1" {...register("gender")}/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">Female</label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" value="male" id="flexRadioDefault2" {...register("gender")}/>
            <label className="form-check-label" htmlFor="flexRadioDefault2">Male</label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" value="transgender" id="flexRadioDefault3" {...register("gender")}/>
            <label className="form-check-label" htmlFor="flexRadioDefault3">Transgender</label>
            </div>
            <h6>{errors.gender?.message}</h6>
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
            <label htmlFor="inputProfession" className="form-label">Profession :</label>
            <input type="text" className="form-control" id="inputProfession" {...register("profession")} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputPhoto" className="form-label">Guarantor's Photo : </label>
            <input type="file" className="form-control" id="inputPhoto"  onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="inputSignature" className="form-label">Guarantor's Income Certificate : </label>
            <input type="file" className="form-control" id="inputSignature"  onChange={handleChange} />
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
