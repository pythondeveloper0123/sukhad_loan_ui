import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { registerCustomerBank, registerCustomerDocument, } from './DBServices';
import { application_id } from './CustomerApplicationFormComp';



const files=[];
export default function CustomerDocumentFormComp() {
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
        event['aadhaar_card']=files[1];
        event['pan_card']=files[2];
        event['business_address_proof_or_copy_of_rent_agreement']=files[3];
        event['electric_bill']=files[4];
        event['msme_certificate']=files[5];
        event['gst_certificate']=files[6];
        event['udyog_aadhaar_registration']=files[7];
        event['business_license']=files[8];
        event['business_plan_or_proposal']=files[9];
        event['three_year_itr_with_balance_sheet']=files[10];
        event['collateral_document']=files[11];
        event['stamp_duty']=files[12];
        event['application']=application_id;
        console.log(event)
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };
        const resp = await registerCustomerDocument(event, config);
        console.log(resp.data)

        reset();
        redirect("/custloan");
    };


  return (
    <>
    <div className='container shadow p-3 mb-5 bg-body rounded border border-info'>
      <h1>Customer Documents </h1>   
      <br></br>

      <form onSubmit={handleSubmit(customerData)}>
        
        <div className="mb-3">
            <label htmlFor="aadhaar_card" className="form-label">Aadhaar Card : </label>
            <input type="file" className="form-control" id="aadhaar_card"  onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="pan_card" className="form-label">PAN Card : </label>
            <input type="file" className="form-control" id="pan_card"  onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="business_address_proof_or_copy_of_rent_agreement" className="form-label">Business Address Proof or Copy of Rent Agreement : </label>
            <input type="file" className="form-control" id="business_address_proof_or_copy_of_rent_agreement"  onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="electric_bill" className="form-label">Electric Bill : </label>
            <input type="file" className="form-control" id="electric_bill"  onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="msme_certificate" className="form-label">MSME Certificate : </label>
            <input type="file" className="form-control" id="msme_certificate"  onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="gst_certificate" className="form-label">GST Certificate: </label>
            <input type="file" className="form-control" id="gst_certificate"  onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="udyog_aadhaar_registration" className="form-label">Udyog Aadhaar Registration : </label>
            <input type="file" className="form-control" id="udyog_aadhaar_registration"  onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="business_license" className="form-label">Business License : </label>
            <input type="file" className="form-control" id="business_license"  onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="business_plan_or_proposal" className="form-label">Business Plan Proposal : </label>
            <input type="file" className="form-control" id="business_plan_or_proposal"  onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="three_year_itr_with_balance_sheet" className="form-label">Tree Year ITR with Balance Sheet : </label>
            <input type="file" className="form-control" id="three_year_itr_with_balance_sheet"  onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="collateral_document" className="form-label">Collateral Document : </label>
            <input type="file" className="form-control" id="collateral_document"  onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="stamp_duty" className="form-label">Stamp Duty : </label>
            <input type="file" className="form-control" id="stamp_duty"  onChange={handleChange} />
        </div>
        


        <button type="submit" align="center" style={{"margin":"10px"}} className="btn btn-primary">Submit</button>
        <button type="reset" align="center" style={{"margin":"10px"}} className="btn btn-warning">Reset</button>
        </form>
    </div>
    </>
  )
}
