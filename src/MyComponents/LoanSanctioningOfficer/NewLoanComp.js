import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { getApplications, getLoans } from './DBLoanServices';
import LSOSideBarComp from './LSOSideBarComp';

export default function NewLoanComp() {

    const [loans, getAllLoans]=useState([]);
    const [applications, getAllApplication]=useState([]);

    useEffect(()=>{
        callGetAllLoans();
    },[]);

    const callGetAllLoans=async()=>{
        const loanArray = await getLoans();
        console.log(loanArray.data);
        getAllLoans(loanArray.data);

        const appArray = await getApplications();
        console.log(appArray.data);
        getAllApplication(appArray.data);
    };



  return (
    <>
        <div className='nav nav-tabs container shadow p-3 mb-5 bg-body rounded border border-info'>

            <LSOSideBarComp/>

            <div className=" p-3 border border-info" style={{"width": "79%" }}>
                <h1>New Loan Applications</h1>   
                <br></br>

                <div className="overflow-scroll" style={{"height": "500px" }}>
                

                    <table className="table" style={{"width": "100%" }}>
                        <thead>
                            <tr>
                                <th scope="col">Application ID</th>
                                <th scope="col">Pan Number</th>
                                <th scope="col">Business Title</th>
                                <th scope="col">Application Submition Date Time</th>
                                <th scope="col">Application Status</th>
                                <th scope="col">Loan Status</th>
                            </tr>
                        </thead>
                                                
                        <tbody>

                            {
                                applications.map((apps)=>{
                                    if (apps.status === "document_verified")

                                    return (
                                        <>  
                                            {
                                                loans.map((loan)=>{
                                                    // if (loan.application === apps.id && loan.status === "")
                                                    if (loan.application === apps.id)
                                                    return (
                                                        <>
                                                            <tr>
                                                                <th scope="row">{apps.id}</th>
                                                                <td>{apps.pan_no}</td>
                                                                <td>{apps.business_title}</td>
                                                                <td>{apps.application_timestamp}</td>
                                                                <td>{apps.status}</td>
                                                                <td>{loan.status}</td>
                                                                <td>
                                                                    <NavLink to={`/updateloan/${apps.id}`}>
                                                                        <i className="bi bi-pencil-fill"></i>
                                                                    </NavLink>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }
                                            
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}
