import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import { getCustomerApplication, getCustomerBank, getCustomerDocument, getCustomerFamily, getCustomerGuarantor, getCustomerLoan, getCustomerUser, getCustomerVendor, getInquiry, patchCustomerApplicationStatus, patchInquiryStatus } from './DBServices';
import LRSideBarComp from './LRSideBarComp';


export default function LRApplicationEditComp() {
    const {id}=useParams("id");

    const[user, getOneUser]=useState({});
    const[bank, getOneBank]=useState({});
    const[family, getOneFamily]=useState({});
    const[application, getOneApplication]=useState({});
    const[document, getOneDocument]=useState({});
    const[loan, getOneLoan]=useState({});
    const[guarantor, getOneGuarantor]=useState({});
    const[vendor, getOneVendor]=useState({});

    const callGetApplication=async()=>{
        const app=await getCustomerApplication(id);
        console.log("Application",app.data);
        getOneApplication(app.data);

        const usr=await getCustomerUser(app.data.user);
        console.log("User",usr.data);
        getOneUser(usr.data);

        const bnk=await getCustomerBank(app.data.user);
        console.log("Bank",bnk.data);
        getOneBank(bnk.data);

        const fmly=await getCustomerFamily(app.data.user);
        console.log("Family",fmly.data);
        getOneFamily(fmly.data);

        const doc=await getCustomerDocument(id);
        console.log("Document",doc.data);
        getOneDocument(doc.data);

        const lon=await getCustomerLoan(id);
        console.log("Loan",lon.data);
        getOneLoan(lon.data);

        const grnt=await getCustomerGuarantor(id);
        console.log("Guarantor",grnt.data);
        getOneGuarantor(grnt.data);

        const vndr=await getCustomerVendor(id);
        console.log("Vendor",vndr.data);
        getOneVendor(vndr.data);


        
    };

    useEffect(()=>{
        callGetApplication();
    },[])

    const redirect=useNavigate();
    const {register, handleSubmit, setValue, formState:{errors}}=useForm()
    const applicationStatus=async (ap)=>{
        console.log(ap);
        const resp = await patchCustomerApplicationStatus(id,ap);
        console.log(resp.data)
        redirect("/newapplications");

    }


  return (
    <>
    <div className='nav nav-tabs container shadow p-3 mb-5 bg-body rounded border border-info'>


        <LRSideBarComp/>



        <div className=" p-3 border border-info" style={{"width": "79%" }}>
        <h1>Update Application Status ID : {id}</h1>   
        <br></br>

        <div className="overflow-scroll" style={{"height": "500px" }}>
        

                <table className="table" style={{"width": "100%" }}>
                <thead>
                </thead>
                
                    
                
                <tbody>


                    <br></br>
                    <tr>
                    <th><h4>Personal Details </h4></th>
                    <th><h4></h4></th>
                    </tr>
                    <tr>
                    <td scope="row">Photo :</td>
                    <th><img src={user.photo} style={{"width": "150px","height": "150px" }} alt="Photo" /></th>
                    </tr>
                    <tr>
                    <td scope="row">Signature :</td>
                    <th><img src={user.signature} style={{"width": "100px","height": "100px" }} alt="Signature" /></th>
                    </tr>
                    <tr>
                    <td scope="row">First Name :</td>
                    <th>{user.first_name}</th>
                    </tr>
                    <tr>
                    <td scope="row">Last Name :</td>
                    <th>{user.last_name}</th>
                    </tr>
                    <tr>
                    <td scope="row">Date Of Birth :</td>
                    <th>{user.dob}</th>
                    </tr>
                    <tr>
                    <td scope="row">Gender :</td>
                    <th>{user.gender}</th>
                    </tr>
                    <tr>
                    <td scope="row">Email ID :</td>
                    <th>{user.email}</th>
                    </tr>
                    <tr>
                    <td scope="row">Mobile :</td>
                    <th>{user.mobile}</th>
                    </tr>
                    <tr>
                    <td scope="row">Address :</td>
                    <th>{user.address}</th>
                    </tr>
                    <tr>
                    <td scope="row">City :</td>
                    <th>{user.city}</th>
                    </tr>
                    <tr>
                    <td scope="row">State :</td>
                    <th>{user.state}</th>
                    </tr>
                    <tr>
                    <td scope="row">Country :</td>
                    <th>{user.country}</th>
                    </tr>
                    <tr>
                    <td scope="row">Pin Code :</td>
                    <th>{user.pin_code}</th>
                    </tr>



                    <br></br>
                    <tr>
                    <th><h4>Family Details</h4></th>
                    <th><h4></h4></th>
                    </tr>
                    <tr>
                    <td scope="row">Father Name :</td>
                    <th>{family.father_name}</th>
                    </tr>
                    <tr>
                    <td scope="row">Father Profession :</td>
                    <th>{family.father_profession}</th>
                    </tr>
                    <tr>
                    <td scope="row">Mother Name :</td>
                    <th>{family.mother_name}</th>
                    </tr>
                    <tr>
                    <td scope="row">Mother Profession :</td>
                    <th>{family.mother_profession}</th>
                    </tr>
                    <tr>
                    <td scope="row">Marital Status :</td>
                    <th>{family.marital_status}</th>
                    </tr>
                    <tr>
                    <td scope="row">Spouse Name :</td>
                    <th>{family.spouse_name}</th>
                    </tr>
                    <tr>
                    <td scope="row">Spouse Profession :</td>
                    <th>{family.spouse_profession}</th>
                    </tr>
                    <tr>
                    <td scope="row">Family Mobile :</td>
                    <th>{family.mobile}</th>
                    </tr>
                    <tr>
                    <td scope="row">Family Address :</td>
                    <th>{family.address}</th>
                    </tr>
                    

                    <br></br>
                    <tr>
                    <th><h4>Applicant Bank Details</h4></th>
                    <th><h4></h4></th>
                    </tr>
                    <tr>
                    <td scope="row">Bank Name :</td>
                    <th>{bank.bank_name}</th>
                    </tr>
                    <tr>
                    <td scope="row">Current Account No :</td>
                    <th>{bank.current_account_no}</th>
                    </tr>
                    <tr>
                    <td scope="row">IFSC Code :</td>
                    <th>{bank.ifsc_code}</th>
                    </tr>
                    <tr>
                    <td scope="row">Passbook Copy :</td>
                    <th><a href={bank.passbook_copy} target="_blank">Show Passbook Copy</a></th>
                    </tr>
                    

                    
                    


                    <br></br>
                    <tr>
                    <th><h4>Application Details</h4></th>
                    <th><h4></h4></th>
                    </tr>
                    <tr>
                    <td scope="row">Aadhaar No. :</td>
                    <th>{application.aadhaar_no}</th>
                    </tr>
                    <tr>
                    <td scope="row">PAN No. :</td>
                    <th>{application.pan_no}</th>
                    </tr>
                    <tr>
                    <td scope="row">Type Of Employment :</td>
                    <th>{application.type_of_employment}</th>
                    </tr>
                    <tr>
                    <td scope="row">Business Title :</td>
                    <th>{application.business_title}</th>
                    </tr>
                    <tr>
                    <td scope="row">Business Type :</td>
                    <th>{application.business_type}</th>
                    </tr>
                    <tr>
                    <td scope="row">Business Address :</td>
                    <th>{application.business_address}</th>
                    </tr>
                    <tr>
                    <td scope="row">GST Registration No :</td>
                    <th>{application.gst_registration_no}</th>
                    </tr>
                    <tr>
                    <td scope="row">Business License No :</td>
                    <th>{application.business_license_no}</th>
                    </tr>
                    <tr>
                    <td scope="row">Expected Average Annual Turnover :</td>
                    <th>{application.expected_average_annual_turnover}</th>
                    </tr>
                    <tr>
                    <td scope="row">Years In Current Business :</td>
                    <th>{application.years_in_current_business}</th>
                    </tr>
                    <tr>
                    <td scope="row">Collateral :</td>
                    <th>{application.collateral}</th>
                    </tr>
                    <tr>
                    <td scope="row">Application Timestamp :</td>
                    <th>{application.application_timestamp}</th>
                    </tr>


                    <br></br>
                    <tr>
                    <th><h4>Application Documents</h4></th>
                    <th><h4></h4></th>
                    </tr>
                    <tr>
                    <td scope="row">Aadhaar Card :</td>
                    <th><a href={document.aadhaar_card} target="_blank">Show Aadhaar Card</a></th>
                    </tr>
                    <tr>
                    <td scope="row">PAN Card :</td>
                    <th><a href={document.pan_card} target="_blank">Show PAN Card</a></th>
                    </tr>
                    <tr>
                    <td scope="row">Business Address Proof or Copy of Rent Agreement :</td>
                    <th><a href={document.business_address_proof_or_copy_of_rent_agreement} target="_blank">Show business Address Proof or Copy of Rent Agreement</a></th>
                    </tr>
                    <tr>
                    <td scope="row">Electric Bill :</td>
                    <th><a href={document.electric_bill} target="_blank">Show Electric Bill</a></th>
                    </tr>
                    <tr>
                    <td scope="row">MSME Certificate :</td>
                    <th><a href={document.msme_certificate} target="_blank">Show MSME Certificate</a></th>
                    </tr>
                    <tr>
                    <td scope="row">GST Certificate :</td>
                    <th><a href={document.gst_certificate} target="_blank">Show GST Certificate</a></th>
                    </tr>
                    <tr>
                    <td scope="row">Udyog Aadhaar Registration :</td>
                    <th><a href={document.udyog_aadhaar_registration} target="_blank">Show Udyog Aadhaar Registration</a></th>
                    </tr>
                    <tr>
                    <td scope="row">Business License :</td>
                    <th><a href={document.business_license} target="_blank">Show Business License</a></th>
                    </tr>
                    <tr>
                    <td scope="row">Business Plan or Proposal :</td>
                    <th><a href={document.business_plan_or_proposal} target="_blank">Show Business Plan or Proposal</a></th>
                    </tr>
                    <tr>
                    <td scope="row">Three Year ITR With Balance Sheet :</td>
                    <th><a href={document.three_year_itr_with_balance_sheet} target="_blank">Show Three Year ITR With Balance Sheet</a></th>
                    </tr>
                    <tr>
                    <td scope="row">Collateral Document :</td>
                    <th><a href={document.collateral_document} target="_blank">Show Collateral Document</a></th>
                    </tr>
                    <tr>
                    <td scope="row">Stamp Duty :</td>
                    <th><a href={document.stamp_duty} target="_blank">Show Stamp Duty</a></th>
                    </tr>



                    <br></br>
                    <tr>
                    <th><h4>Loan Details</h4></th>
                    <th><h4></h4></th>
                    </tr>
                    <tr>
                    <td scope="row">Loan Amount :</td>
                    <th>{loan.loan_principal_amount}</th>
                    </tr>
                    <tr>
                    <td scope="row">Loan Tenure :</td>
                    <th>{loan.loan_tenure}</th>
                    </tr>



                    <br></br>
                    <tr>
                    <th><h4>Guarantor Details</h4></th>
                    <th><h4></h4></th>
                    </tr>
                    <tr>
                    <td scope="row">Relation With Customer :</td>
                    <th>{guarantor.relation_with_customer}</th>
                    </tr>
                    <tr>
                    <td scope="row">Name :</td>
                    <th>{guarantor.name}</th>
                    </tr>
                    <tr>
                    <td scope="row">Photo :</td>
                    <th><a href={guarantor.photo} target="_blank">Show Photo</a></th>
                    </tr>
                    <tr>
                    <td scope="row">Date of Birth :</td>
                    <th>{guarantor.dob}</th>
                    </tr>
                    <tr>
                    <td scope="row">Gender :</td>
                    <th>{guarantor.gender}</th>
                    </tr>
                    <tr>
                    <td scope="row">Email ID:</td>
                    <th>{guarantor.email}</th>
                    </tr>
                    <tr>
                    <td scope="row">Mobile :</td>
                    <th>{guarantor.mobile}</th>
                    </tr>
                    <tr>
                    <td scope="row">Address :</td>
                    <th>{guarantor.address}</th>
                    </tr>
                    <tr>
                    <td scope="row">City :</td>
                    <th>{guarantor.city}</th>
                    </tr>
                    <tr>
                    <td scope="row">State :</td>
                    <th>{guarantor.state}</th>
                    </tr>
                    <tr>
                    <td scope="row">Country :</td>
                    <th>{guarantor.country}</th>
                    </tr>
                    <tr>
                    <td scope="row">Pin Code :</td>
                    <th>{guarantor.pin_code}</th>
                    </tr>
                    <tr>
                    <td scope="row">Profession :</td>
                    <th>{guarantor.profession}</th>
                    </tr>
                    <tr>
                    <td scope="row">Income Certificate :</td>
                    <th><a href={guarantor.income_certificate} target="_blank">Show Income Certificate</a></th>
                    </tr>
                    <tr>
                    <td scope="row">Bank Name :</td>
                    <th>{guarantor.bank_name}</th>
                    </tr>
                    <tr>
                    <td scope="row">Current Account No :</td>
                    <th>{guarantor.current_account_no}</th>
                    </tr>
                    <tr>
                    <td scope="row">IFSC Code :</td>
                    <th>{guarantor.ifsc_code}</th>
                    </tr>
                    <tr>
                    <td scope="row">Passbook Copy :</td>
                    <th><a href={guarantor.passbook_copy} target="_blank">Show Passbook Copy</a></th>
                    </tr>



                    <br></br>
                    <tr>
                    <th><h4>Vendor Details</h4></th>
                    <th><h4></h4></th>
                    </tr>
                    <tr>
                    <td scope="row">Name :</td>
                    <th>{vendor.name}</th>
                    </tr>
                    <tr>
                    <td scope="row">Vendor Type :</td>
                    <th>{vendor.vendor_type}</th>
                    </tr>
                    <tr>
                    <td scope="row">Email ID:</td>
                    <th>{vendor.email}</th>
                    </tr>
                    <tr>
                    <td scope="row">Mobile :</td>
                    <th>{vendor.mobile}</th>
                    </tr>
                    <tr>
                    <td scope="row">Address :</td>
                    <th>{vendor.address}</th>
                    </tr>
                    <tr>
                    <td scope="row">City :</td>
                    <th>{vendor.city}</th>
                    </tr>
                    <tr>
                    <td scope="row">State :</td>
                    <th>{vendor.state}</th>
                    </tr>
                    <tr>
                    <td scope="row">Country :</td>
                    <th>{vendor.country}</th>
                    </tr>
                    <tr>
                    <td scope="row">Pin Code :</td>
                    <th>{vendor.pin_code}</th>
                    </tr>
                    <tr>
                    <td scope="row">Bank Name :</td>
                    <th>{vendor.bank_name}</th>
                    </tr>
                    <tr>
                    <td scope="row">Current Account No :</td>
                    <th>{vendor.current_account_no}</th>
                    </tr>
                    <tr>
                    <td scope="row">IFSC Code :</td>
                    <th>{vendor.ifsc_code}</th>
                    </tr>
                    <tr>
                    <td scope="row">Passbook Copy :</td>
                    <th><a href={vendor.passbook_copy} target="_blank">Show Passbook Copy</a></th>
                    </tr>



                    <br></br>
                    <br></br>
                    <tr>
                    <th><h4>Update Application Status</h4></th>
                    <th><h4></h4></th>
                    </tr>


                </tbody>
                </table>




            <form onSubmit={handleSubmit(applicationStatus)}>
                <div className="mb-3">
                    <label className="form-label">Status :</label>
                    <select className="form-select" {...setValue("status",application.status)} {...register("status")}>
                    <option value=""></option>
                    <option value="generated">Generated</option>
                    <option value="rejected">Rejected</option>
                    <option hidden={true} value="document_verified">Document Verified</option>
                    <option hidden={true} value="sanctioned">Sanctioned</option>
                    <option hidden={true} value="disbursed">Disbursed</option>
                    </select>
                </div>
                <div className="mb-3 ">
                    <label htmlFor="inputRemark" className="form-label">Application Remark :</label>
                    <input type="text" className="form-control" id="inputRemark" {...setValue("remark",application.remark)} {...register("remark")} />
                </div>
            <button type="submit" className="btn btn-primary">Update</button>
            </form>

            </div>
        </div>

    </div>
    </>
  )
}
