import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { getUserDetailsByIds } from './DBServices';


import "./Bank.css"
import SideBarComp from './SideBarComp';



export default function AllDetails() {
  console.log("hello");
  const { id } = useParams('id');
  console.log(id);

  const [apps, setApp] = useState([]);
  const [user, setUser] = useState([]);
  const [family, setFamily] = useState([]);


  useEffect(() => {
    getApplicationbyUserId();
  }, [])


  const getApplicationbyUserId = async () => {
    const getUserDetailsById = await getUserDetailsByIds(id)
    console.log(getUserDetailsById.data)
    setApp(getUserDetailsById.data.Applications)
    // setApp(getUserDetailsById)
  }
  useEffect(() => {
    getBankbyUserId();
  }, [])


  const getBankbyUserId = async () => {
    const getuser = await getUserDetailsByIds(id)
    console.log(getuser.data)
    setUser(getuser.data.Banks)
  }

  useEffect(() => {
    getFamilyUserId();
  }, [])


  const getFamilyUserId = async () => {
    const getuser = await getUserDetailsByIds(id)
    console.log(getuser.data)
    setFamily(getuser.data.Familys)
  }


  return (
    <>
    <SideBarComp id={id}/>
      <div className='container'>
        
        <div className='row'>
        
          <h2 className='text-primary text-center'>Application Details</h2>
          <table className="table table-light">
            <tbody>
              <>

                {apps.map(application => {
                  return (
                    <>
                      <tr>
                        <th scope="col">Application No</th>
                        <td>{application.id}</td>
                      </tr>
                      <tr>
                        <th scope="col">Aadhaar Number</th>
                        <td>{application.aadhaar_no}</td>
                      </tr>
                      <tr>
                        <th scope="col">Pan Number</th>
                        <td>{application.pan_no}</td>
                      </tr>
                      <tr>
                        <th scope="col">Type of Employement</th>
                        <td>{application.type_of_employment}</td>
                      </tr>
                      <tr>
                        <th scope="col">Business Title</th>
                        <td>{application.business_title}</td>
                      </tr>
                      <tr>
                        <th scope="col">Business Type</th>
                        <td>{application.business_type}</td>
                      </tr>
                      <tr>
                        <th scope="col">Business Address</th>
                        <td>{application.business_address}</td>
                      </tr>
                      <tr>
                        <th scope="col">GST Registration Number</th>
                        <td>{application.gst_registration_no}</td>
                      </tr>
                      <tr>
                        <th scope="col">Business License Number</th>
                        <td>{application.business_license_no}</td>
                      </tr>
                      <tr>
                        <th scope="col">Expected Average Annual Turnoverr</th>
                        <td>{application.expected_average_annual_turnover}</td>
                      </tr>
                      <tr>
                        <th scope="col">Years In Current Business</th>
                        <td>{application.years_in_current_business}</td>
                      </tr>
                      <tr>
                        <th scope="col">Collateral</th>
                        <td>{application.collateral}</td>
                      </tr>
                      <tr>
                        <th scope="col">Status</th>
                        <td>{application.status}</td>
                      </tr>
                      <tr>
                        <th scope="col">Application Generation Time</th>
                        <td>{application.application_timestamp}</td>
                      </tr>
                      <tr>
                        <th scope="col">Remark</th>
                        <td>{application.remark}</td>
                      </tr>
                      <br /><br /><br />

                    </>
                  )
                }
                )
                }

              </>
            </tbody>
          </table>
        </div>
      </div>


      <div className='container'>
        <div className='row'>
          <h2 className='text-primary text-center'>Bank Details</h2>
          <table className="table table-light">
            <tbody>
              <>

                <tr>
                  <th scope="col">ID</th>
                  <td>{user.id}</td>
                </tr>

                <tr>
                  <th scope="col">Bank Name</th>
                  <td>{user.bank_name}</td>

                </tr>
                <tr>
                  <th scope="col">Current Account Number</th>
                  <td>{user.current_account_no}</td>
                </tr>

                <tr>

                  <th scope="col">Ifsc Code</th>
                  <td>{user.ifsc_code}</td>

                </tr>

                <tr>
                  <th scope="col">Passbook Copy</th>
                  <td>
                    <td>
                      <a href={user.passbook_copy} target="_blank" rel="noreferrer">
                        Passbook Copy
                      </a>
                    </td>
                  </td>

                </tr>
                <tr><br></br><br></br><br></br></tr>
              </>
            </tbody>
          </table>
        </div>
      </div>


      <div className='container'>
        <div className='row'>
          <h2 className='text-primary text-center'>Family Details</h2>
          <table className="table table-light">
            <tbody>
              <>

                <tr>
                  <th scope="col">ID</th>
                  <td>{family.id}</td>
                </tr>

                <tr>
                  <th scope="col">Father Name</th>
                  <td>{family.father_name}</td>

                </tr>
                <tr>
                  <th scope="col">Father Profession</th>
                  <td>{family.father_profession}</td>
                </tr>

                <tr>

                  <th scope="col">Mother Name</th>
                  <td>{family.mother_name}</td>

                </tr>
                <tr>
                  <th scope="col">Mother Profession</th>
                  <td>{family.mother_profession}</td>
                </tr>
                <tr>
                  <th scope="col">Marital_status</th>
                  <td>{family.marital_status}</td>
                </tr>
                <tr>
                  <th scope="col">Spouse Nmae</th>

                  <td>{family.spouse_name}</td>

                </tr>
                <tr>
                  <th scope="col">Marital_status</th>
                  <td>{family.marital_status}</td>
                </tr>

                <tr>
                  <th scope="col">Mobile</th>
                  <td>{family.mobile}</td>
                </tr>
                <tr>
                  <th scope="col">Address</th>
                  <td>{family.address}</td>
                </tr>
                <tr><br></br><br></br><br></br></tr>
              </>
            </tbody>
          </table>
        </div>
      </div>




      <div className='container-fluid'>
        <div className='row'>
          <h2 className='text-primary text-center'>Loan Details</h2>
          {/* <div className="overflow-scroll" style={{ "height": "500px" }}> */}
            <table className="table table-light" style={{ "width": "100%" }}>

              <tbody >
                <>
                  {apps.map(app => {
                    // if (app.status == "")
                    return (
                      <>
                        <tr>
                          <th scope="col">ID</th>
                          <td>{app.Loans.id}</td>
                        </tr>
                        <tr>
                          <th scope="col">Installment Id</th>
                          <td>{app.Loans.Installments[0].penalty_amount}</td>
                        </tr>

                        <tr>
                          <th scope="col">Loan Principal Amount</th>
                          <td>{app.Loans.loan_principal_amount}</td>

                        </tr>
                        <tr>
                          <th scope="col">Loan Tenure</th>
                          <td>{app.Loans.loan_tenure}</td>
                        </tr>
                        <tr>
                          <th scope="col">Interest Rate</th>
                          <td>{app.Loans.interest_rate}</td>
                        </tr>
                        <tr>
                          <th scope="col">Total Amount And Processing Fees</th>
                          <td>{app.Loans.total_amount_and_processing_fees}</td>
                        </tr>
                        <tr>
                          <th scope="col">Installment</th>
                          <td>{app.Loans.installment}</td>
                        </tr>
                        <tr>
                          <th scope="col">Maturity Date</th>
                          <td>{app.Loans.maturity_date}</td>
                        </tr>
                        <tr>
                          <th scope="col">Sanction Letter</th>
                          <td><a href={app.Loans.sanction_letter} target="_blank" rel="noreferrer">Sanction Letter</a></td>
                        </tr>
                        <tr>
                          <th scope="col">Status</th>
                          <td>{app.Loans.status}</td>
                        </tr>
                        <tr>
                          <th scope="col">Response Timestamp</th>
                          <td>{app.Loans.response_timestamp}</td>
                        </tr>
                        <tr>
                          <th scope="col">Remark</th>
                          <td>{app.Loans.remark}</td>
                        </tr>
                        <br />
                        <br />
                        <hr />

                      </>

                    )

                  })
                  }
                </>
              </tbody>

            </table>
          </div>
        {/* </div> */}
      </div>


      <div className='container'>
        <div className='row'>
          <h2 className='text-primary text-center'>Loan Disbursement Details</h2>
          {/* <div className="overflow-scroll" style={{ "height": "500px" }}> */}

            <div className='container-fluid'>
              <div className='row'>
                <table className="table table-light" style={{ "width": "100%" }}>

                  <tbody>
                    <>
                      {apps.map(application => {
                        return (
                          <>

                            <tr>
                              <th scope="col">Insurance Policy Document</th>
                              <td>
                                <a href={application.Loans.Disbursements.insurance_doc} target="_blank" rel="noreferrer">
                                  Download Loan Insurance Policy
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <th scope="col">Loan Payment Mode</th>
                              <td>{application.Loans.Disbursements.payment_mode}</td>
                            </tr>

                            <tr>
                              <th scope="col">Net Disbursed Amount</th>
                              <td>{application.Loans.Disbursements.net_disbursed_amount}</td>
                            </tr>

                            <tr>
                              <th scope="col">Disbursement Account Number</th>
                              <td>{application.Loans.Disbursements.disbursed_to_account_no}</td>
                            </tr>

                            <tr>
                              <th scope="col">Loan Disbursement Receipt</th>
                              <td>
                                <a href={application.Loans.Disbursements.receipt_doc} target="_blank" rel="noreferrer">
                                  Download Loan Disbursement Receipt
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <th scope="col">Loan Disbursement Status</th>
                              <td>{application.Loans.Disbursements.status}</td>
                            </tr>

                            <tr>
                              <th scope="col">Loan Disbursement Date and Time</th>
                              <td>{application.Loans.Disbursements.response_timestamp}</td>
                            </tr>

                            <br /><br />
                            <hr /><hr />
                          </>
                        )
                      }
                      )
                      }
                    </>
                  </tbody>

                </table>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>






      <div className='container'>
        <div className='row'>
          <h2 className='text-primary text-center'>Installment</h2>
          <table className="table table-light">
            <tbody>
              <>
                {apps.map((app) => {
                  return (
                    <>


                      {/* <th scope="col">Loan Application Id</th>
                      <td>{app.Loans.id}</td> */}


                      {app.Loans.Installments.map((installment) => {


                        return (
                          <>

                            <tr >
                              <th scope="col">Installment id</th>
                              <td>{installment.id}</td>
                            </tr>

                            <tr>
                              <th scope="col">Loan Remaining Amount</th>
                              <td>{installment.remaining_amount}</td>
                            </tr>

                            <tr>
                              <th scope="col">Installment Number</th>
                              <td>{installment.installment_no}</td>
                            </tr>

                            <tr>
                              <th scope="col">Monthly Installment Amount</th>
                              <td> {installment.monthly_installment_amount}</td>
                            </tr>

                            <tr>
                              <th scope="col">Installment Expected Date</th>
                              <td> {installment.installment_expected_date}</td>
                            </tr>

                            <tr>
                              <th scope="col">Installment Paid Date</th>
                              <td> {installment.installment_paid_date}</td>
                            </tr>

                            <tr>
                              <th scope="col">Penalty Amount</th>
                              <td> {installment.penalty_amount}</td>
                            </tr>

                            <tr>
                              <th scope="col">Installment Status</th>
                              <td> {installment.status}</td>
                            </tr>

                            <br />
                            <br />
                            <hr />
                            <hr />

                          </>
                        )
                      }
                      )
                      }


                    </>
                  )
                }
                )
                }
              </>
            </tbody>
          </table>
        </div>
      </div>



    </>
  )
}
