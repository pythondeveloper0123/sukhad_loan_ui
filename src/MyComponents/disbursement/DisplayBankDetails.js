import React, { useEffect, useState } from "react";
import { getAllbankdetails } from "./DBServices";
import Sidebar from "./Sidebar";

function DisplayBankDetails(){
    const[bankdetails,setUserList]=useState([]);
    useEffect(()=>{
        getAllbankdetailsDataFromDB();
       
    })

    const getAllbankdetailsDataFromDB= async()=>{
        const uList=await getAllbankdetails();
        //console.log(ulist.data);
        setUserList(uList.data);
    }
  
    return (
        <>
                <Sidebar/>
                <div className='container shadow p-3 mb-5 bg-body rounded' >
                <h1 style={{marginLeft:160}}>bank Details</h1>
                  <table className=" table-bordered border-secondary" style={{marginLeft:160}}>
                    <thead>
                      <tr>
                        <th>user</th>
                        <th>bank name</th>
                        <th>current account no</th>
                        <th> ifsc code</th>
                        <th>passbook copy</th>                       
                      </tr>
                    </thead>
                    <tbody>
                      {
                          bankdetails.map(bankdetail=>{
                              return (<>
                                      <tr>
                                      <td>{bankdetail.user}</td>
                                      <td>{bankdetail.bank_name}</td>
                                      <td>{bankdetail.current_account_no}</td>
                                      <td>{bankdetail.ifsc_code}</td>
                                      <td><a href={bankdetail.passbook_copy}>passbook</a></td>
                                      </tr>                                    
                              </>)
                          })
                      }                     
                    </tbody>
                  </table>
                 
                </div>
            </>
    )
}
export default DisplayBankDetails