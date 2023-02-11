import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllInstallment, installmentDelete } from "./DBServices";
import Sidebar from "./Sidebar";

function DisplayInstallment(){
    const[Installments,setUserList]=useState([]);
    useEffect(()=>{
        getAllInstallmentDataFromDB();
    })
    const getAllInstallmentDataFromDB= async()=>{
        const uList=await getAllInstallment();
        //console.log(ulist.data);
        setUserList(uList.data);
    }
    const deleteInstallmentById=(InstallmentId)=>{
      alert('Installment deleting:'+InstallmentId);
      installmentDelete(InstallmentId);
    }
    return (
        <>
        <div >
            <Sidebar/>
            <h1 style={{marginLeft:240}}>Installment Details</h1>
            <table class="table-bordered border-secondary" style={{marginLeft:240}}>
                <thead>
                    <tr>
                   
                    <th scope="col">loan id</th>
                    <th scope="col">remaining amount</th>
                    <th scope="col">installment no</th>
                    <th scope="col">monthly installment amount</th>
                    <th scope="col">installment expected date</th>
                    <th scope="col">installment paid date</th>
                    <th scope="col">penalty amount</th>
                    <th scope="col">status</th>
                    <th scope="col">delete</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        Installments.map(Installment=>{
                            return (<>
                                    <tr>
                                    
                                    <td>{Installment.loan}</td> 
                                    <td>{Installment.remaining_amount}</td>
                                    <td>{Installment.installment_no}</td>
                                    <td>{Installment.monthly_installment_amount}</td>
                                    <td>{Installment.installment_expected_date}</td>
                                    <td>{Installment.installment_paid_date}</td>
                                    <td>{Installment.penalty_amount}</td>
                                    <td>{Installment.status}</td>
                                    
                                    
                                    
                                  {/*  <td><NavLink to={`/EditUser/${Installment.id}`}><i class="bi bi-pencil-square text-primary"></i></NavLink></td> */} 
                                    <td><i class="bi bi-trash text-danger"onClick={()=>deleteInstallmentById(Installment.id)}></i></td>
                                    </tr>
                            </>)
                        })
                    }
    
                </tbody><br></br>
               
            </table>
            <button className="btn btn-primary" style={{marginLeft:550}}><NavLink to="installment" className="text-light">add_installment</NavLink></button>
        </div>

            </>
    )
}
export default DisplayInstallment