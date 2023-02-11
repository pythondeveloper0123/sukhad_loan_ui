import React, { useEffect, useState } from "react";

import { getAllvendordetails } from "./DBServices";
import Sidebar from "./Sidebar";

function DisplayVendorDetails(){
    const[vendordetails,setUserList]=useState([]);
    useEffect(()=>{
        getAllvendordetailsDataFromDB();
    })
    const getAllvendordetailsDataFromDB= async()=>{
        const uList=await getAllvendordetails();
        //console.log(ulist.data);
        setUserList(uList.data);
    }
  
    return (
        <>
                <div  >
                  <Sidebar/>
                <h1 style={{marginLeft:240}}>Vendor Details</h1>
                  <table className=" table-bordered border-secondary" style={{marginLeft:240}}>
                    <thead>
                      <tr>
                        <th>application</th>
                        <th>name</th>
                        <th>vendor type</th>
                        <th>email</th>
                        <th>address</th>
                        <th>city</th>
                        <th>state</th>
                        <th>country</th>
                        <th>pin code</th>
                        <th>mobile</th>
                        <th>bank name</th>
                        <th>passbook copy</th>
                        <th>vendor type</th>
                        <th>currenta ccount no</th>
                        <th>ifsc code</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                          vendordetails.map(vendordetail=>{
                              return (<>
                                      <tr>
                                     <td>{vendordetail.id}</td>
                                      <td>{vendordetail.name}</td>
                                      <td>{vendordetail.vendor_type}</td>
                                      <td>{vendordetail.email}</td>
                                      <td>{vendordetail.address}</td> 
                                      <td>{vendordetail.city}</td>
                                      <td>{vendordetail.state}</td>
                                      <td>{vendordetail.country}</td>
                                      <td>{vendordetail.pin_code}</td>
                                      <td>{vendordetail.mobile}</td>
                                      <td>{vendordetail.bank_name}</td>
                                      <td><a href={vendordetail.passbook_copy}>passbook</a></td>
                                      <td>{vendordetail.vendor_type}</td>
                                      <td>{vendordetail.current_account_no}</td>
                                      <td>{vendordetail.ifsc_code}</td>
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
export default DisplayVendorDetails