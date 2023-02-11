import React, { useEffect, useState } from "react";
import { getAllDisbursement, disbursementDelete } from "./DBServices";
import Sidebar from "./Sidebar";

function DisplayDisbursemet(){
    const[Disbursements,setUserList]=useState([]);
    useEffect(()=>{
        getAllDisbursementDataFromDB();
    })
    const getAllDisbursementDataFromDB= async()=>{
        const uList=await getAllDisbursement();
        //console.log(ulist.data);
        setUserList(uList.data);
    }
   

    const deleteDisbursementById=(DisbursementId)=>{
      //alert('Disbursement deleting:'+DisbursementId);
      disbursementDelete(DisbursementId);
    }
    return (
        <>
        <div  >
          <Sidebar/>
        <h1 style={{marginLeft:240}}>Disbursement Details</h1>
            <table class="table-bordered border-secondary" style={{marginLeft:240}} >
              <thead>
                <tr>
                  <th scope="col">loan id</th>
                  <th scope="col">insurance doc</th>
                  <th scope="col">payment mode</th>
                  <th scope="col">net disbursed amount</th>
                  <th scope="col">disbursed to<br></br> account no</th>
                  <th scope="col">receipt doc</th>  
                  <th scope="col">status</th>
                  <th scope="col">response timestamp</th>
                  
                  <th>delete</th>
                  
                </tr>
              </thead>
              <tbody>
                {
                    Disbursements.map(Disbursement=>{
                        return (<>
                                <tr>
                                <td >{Disbursement.loan}</td>
                                <td><a href={Disbursement.insurance_doc}>insurance</a></td>
                                <td>{Disbursement.payment_mode}</td>
                                <td>{Disbursement.net_disbursed_amount}</td>
                                <td>{Disbursement.disbursed_to_account_no}</td>
                                <td><a href={Disbursement.receipt_doc}>receipt</a></td>
                                <td>{Disbursement.status}</td>
                                <td>{Disbursement.response_timestamp}</td>
                                
                                
                               
                                <td><i class="bi bi-trash text-danger"onClick={()=>deleteDisbursementById(Disbursement.id)}></i></td>
                                
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
export default DisplayDisbursemet