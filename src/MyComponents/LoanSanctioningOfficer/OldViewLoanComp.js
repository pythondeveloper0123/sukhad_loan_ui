import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCustomerDocument } from '../application/DBServices';
import { getApplicationById, getLoanById } from './DBLoanServices';
import LSOSideBarComp from './LSOSideBarComp';


export default function OldViewLoanComp() {

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
                            <th><h4>Application Details </h4></th>
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
                            <td scope="row">Application Status :</td>
                            <th>{application.status}</th>
                            </tr>
                            <tr>
                            <td scope="row">Application Remark :</td>
                            <th>{application.remark}</th>
                            </tr>
                            <tr>
                            <td scope="row">Application Timestamp :</td>
                            <th>{application.application_timestamp}</th>
                            </tr>

                            <br></br>
                            <br></br>
                            <tr>
                            <th><h4>Application Documents </h4></th>
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
                            <br></br>
                            <tr>
                            <th><h4>Loan Details </h4></th>
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
                            <tr>
                            <td scope="row">Loan Interest :</td>
                            <th>{loan.interest_rate}</th>
                            </tr>
                            <tr>
                            <td scope="row">Loan Amount and Processing Fees :</td>
                            <th>{loan.total_amount_and_processing_fees}</th>
                            </tr>
                            <tr>
                            <td scope="row">Loan Installment :</td>
                            <th>{loan.installment}</th>
                            </tr>
                            <tr>
                            <td scope="row">Loan Maturity Date :</td>
                            <th>{loan.maturity_date}</th>
                            </tr>
                            <tr>
                            <td scope="row">Loan Sanctioned Letter :</td>
                            <th><a href={loan.sanction_letter} target="_blank">Show Sanctioned Letter</a></th>
                            </tr>
                            <tr>
                            <td scope="row">Loan Status :</td>
                            <th>{loan.status}</th>
                            </tr>
                            <tr>
                            <td scope="row">Loan Remark :</td>
                            <th>{loan.remark}</th>
                            </tr>
                            <tr>
                            <td scope="row">Loan Response Stamp :</td>
                            <th>{loan.response_timestamp}</th>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}
