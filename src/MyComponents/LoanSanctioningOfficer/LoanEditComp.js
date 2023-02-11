import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import { getCustomerDocument } from '../application/DBServices';
import { getApplicationById, getLoanById, patchApplicationStatus, patchLoanDetails } from './DBLoanServices';
import LSOSideBarComp from './LSOSideBarComp';


export default function LoanEditComp() {

    const {id}=useParams("id");

    const [application, getOneApplication]=useState({});
    const [loan, getOneLoan]=useState({});
    const[document, getOneDocument]=useState({});

    const callGetApplication=async()=>{
        console.log("access_token", sessionStorage.getItem("access_token"));
        const app=await getApplicationById(id);
        console.log("Application",app.data);
        getOneApplication(app.data);

        const lon=await getLoanById(id);
        console.log("Loan",lon.data);
        getOneLoan(lon.data);

        const doc=await getCustomerDocument(id);
        console.log("Document",doc.data);
        getOneDocument(doc.data);
    };

    useEffect(()=>{
        callGetApplication();
        console.log("Test Useeffevtss")
    },[])

    const redirect=useNavigate();
    const {register, handleSubmit, setValue}=useForm()


    const app_object = {};
    const [file, setFile] = useState();
    const handleChange =(event)=> {
        setFile(event.target.files[0]);
    };


    const loanDetails=async(event)=>{

        console.log("access_token", sessionStorage.getItem("access_token"));
        event['sanction_letter']=file;
        console.log("Main Event :",event);
        const lso = await patchLoanDetails(id,event); //
        console.log("loan response",lso.data);

        app_object['loanstatus']=event.status;
        app_object['loanremark']=event.remark;

        app_object['status']=event.appstatus;
        app_object['remark']=event.appremark;
        console.log("App Object",app_object);
        const resp = await patchApplicationStatus(id, app_object);
        console.log("application response",resp.data);
        redirect("/newloans")

    }

    
  return (
    <>
        <div className='nav nav-tabs container shadow p-3 mb-5 bg-body rounded border border-info'>

            <LSOSideBarComp/>

            <div className=" p-3 border border-info" style={{"width": "79%" }}>
                <h1>Update Application Status ID : {id}</h1>   
                <br></br>

                <div className="overflow-scroll" style={{"height": "500px" }}>
                

                    <table className="table" style={{"width": "100%" }}>
                        <thead></thead>
                                                
                        <tbody>

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
                            <td scope="row">Loan Principal Amount :</td>
                            <th>{loan.loan_principal_amount}</th>
                            </tr>
                            <tr>
                            <td scope="row">Loan Tenure :</td>
                            <th>{loan.loan_tenure}</th>
                            </tr>


                        </tbody>
                    </table>

                    <table className="table" style={{"width": "100%" }}>
                            
                            <br></br>
                            <br></br>
                            <tr>
                            <th><h4>UPDATE LOAN Details</h4></th>
                            <th><h4></h4></th>
                            </tr>

                    </table>
                    <form onSubmit={handleSubmit(loanDetails)}>

                        <div className="mb-3">
                            <label htmlFor="inputSanctionletter" className="form-label">Sanction Letter : </label>
                            <input type="file" className="form-control" id="inputSanctionletter"  onChange={handleChange} />
                        </div>

                        <div className="mb-3 ">
                            <label htmlFor="inputIntrest" className="form-label">Interest Rate :</label>
                            <input type="number" className="form-control" id="inputIntrest" {...register("interest_rate")} {...setValue("interest_rate",loan.interest_rate)}  />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="inputTotalAmt" className="form-label">Total Amount and Processing Fees :</label>
                            <input type="number" className="form-control" id="inputTotalAmt" {...register("total_amount_and_processing_fees")} {...setValue("total_amount_and_processing_fees",loan.total_amount_and_processing_fees)}  />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="inputInstallment" className="form-label">Numbers of Installment :</label>
                            <input type="number" className="form-control" id="inputInstallment" {...register("installment")} {...setValue("installment",loan.installment)}  />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="inputMaturityDate" className="form-label">Maturity Date :</label>
                            <input type="date" className="form-control" id="inputMaturityDate" {...register("maturity_date")} {...setValue("maturity_date",loan.maturity_date)}  />
                        </div>

                        
                        <div className="mb-3">
                            <label className="form-label">Loan Status :</label>
                            <select className="form-select"  {...register("status")} {...setValue("status",loan.status)}>
                                <option value=""></option>
                                <option value="pending">Pending</option>
                                <option value="done">Done</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="inputLoanRemark" className="form-label">Loan Remark :</label>
                            <input type="text" className="form-control" id="inputLoanRemark"  {...register("remark")} {...setValue("remark",loan.remark)} />
                        </div>
                        


                        <table className="table" style={{"width": "100%" }}>
                                
                                <br></br>
                                <br></br>
                                <tr>
                                <th><h4>UPDATE Application STATUS</h4></th>
                                <th><h4></h4></th>
                                </tr>

                        </table>
        
                        <div className="mb-3">
                            <label className="form-label">Application Status :</label>
                            <select className="form-select" {...register("appstatus")} {...setValue("appstatus",application.status)} >
                                <option value=""></option>
                                <option value="generated">Generated</option>
                                <option value="rejected">Rejected</option>
                                <option value="document_verified">Document Verified</option>
                                <option value="sanctioned">Sanctioned</option>
                                <option hidden={true} value="disbursed">Disbursed</option>
                            </select>
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="inputRemark" className="form-label">Application Remark :</label>
                            <input type="text" className="form-control" id="inputRemark"  {...register("appremark")} {...setValue("appremark",application.remark)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
