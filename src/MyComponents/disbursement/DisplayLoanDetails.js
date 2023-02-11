import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { getAllLoan } from "./DBServices";
import Sidebar from "./Sidebar";



function DisplayLoan(){
    
    
    const[Loans,setUserList]=useState([]);
    useEffect(()=>{
        getAllLoanDataFromDB();
    })
    const getAllLoanDataFromDB= async()=>{
        const uList=await getAllLoan();
        //console.log(ulist.data);
        setUserList(uList.data);
    }
  
    return (
        <>

    
   <div >
    <Sidebar/>
 
     <h1 style={{marginLeft:380}}>Loan Details</h1>
               
                <table  class="table-bordered border-secondary" style={{marginLeft:380}}  >
                  <thead>
                    <tr>
                    <th scope="col">application id</th>
                      <th scope="col">loan id</th>
                      <th scope="col">loan principal amount</th>
                      <th scope="col">loan tenure</th>
                      <th scope="col">interest rate</th>
                      <th scope="col">total amount and processing fees</th>
                      <th scope="col">installment</th>  
                      <th scope="col">maturity date</th>
                      <th scope="col">sanction letter</th>
                      <th scope="col">status</th>
                      <th scope="col">response timestamp</th>
                      <th scope="col">remark</th>

                     
                      <th>disburse loan</th>
                      
                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                        Loans.map(Loan=>{
                            return (<>
                                    <tr>
                                    <th scope="row">{Loan.application}</th> 
                                    <th scope="row">{Loan.id}</th> 
                                    <td>{Loan.loan_principal_amount}</td>
                                    <td>{Loan.loan_tenure}</td>
                                    <td>{Loan.interest_rate}</td>
                                    <td>{Loan.total_amount_and_processing_fees}</td>
                                    <td>{Loan.installment}</td>
                                    <td>{Loan.maturity_date}</td>
                                    <td><a href={Loan.sanction_letter}>sanction letter</a></td>
                                    <td>{Loan.status}</td>
                                    <td>{Loan.response_timestamp}</td>
                                    <td>{Loan.remark}</td>
                                    
                                    <td><NavLink to='disbursement'>DISBURSE</NavLink></td>
                                    
                                    </tr>
                            </>)
                        })
                    }
                    
                    
                  </tbody>
                </table><br/>
                <button class="btn btn-info" style={{marginLeft:640}}><NavLink to="gst" class="text-dark">GstCalculator</NavLink></button><br/>
                </div>
            </>
    )
}
export default DisplayLoan
