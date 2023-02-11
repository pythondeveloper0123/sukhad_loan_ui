import React, { useEffect, useState } from "react";

import { getAllApplications } from "./DBServices";
import Sidebar from "./Sidebar";

function DisplayApplications(){
    const[Applications,setUserList]=useState([]);
    useEffect(()=>{
        getAllApplicationsDataFromDB();
    })
    const getAllApplicationsDataFromDB= async()=>{
        const uList=await getAllApplications();
        //console.log(ulist.data);
        setUserList(uList.data);
    }
   

  
    return (
        <>
        <Sidebar/>
        <h1 style={{marginLeft:340}}>Applications Details</h1>
        <div className="overflow-scroll" style={{"height": "500px" }}>
        <table className=" table-bordered border-secondary" style={{marginLeft:300}}>
                  <thead>
                    <tr>
                      <th scope="col">user</th>
                      <th scope="col">aadhaar no</th>
                      <th scope="col">pan no</th>
                      <th scope="col">type of employment</th>
                      <th scope="col">business title</th>
                      <th scope="col">business type</th>  
                      <th scope="col">business address</th>
                      <th scope="col">gst registration no</th>  
                      <th scope="col">business license no</th> 
                      <th scope="col">expected average annual turnover</th>  
                    </tr>
                  </thead>
                  <tbody>
                    {
                        Applications.map(application=>{
                            return (<>
                                    <tr>
                                      <td>{application.user}</td> 
                                      <td>{application.aadhaar_no}</td>
                                      <td>{application.pan_no}</td>
                                      <td>{application.type_of_employment}</td>
                                      <td>{application.business_title}</td>
                                      <td>{application.business_type}</td>
                                      <td>{application.business_address}</td>
                                      <td>{application.gst_registration_no}</td>
                                      <td>{application.business_license_no}</td>
                                      <td>{application.expected_average_annual_turnover}</td>                                    
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
export default DisplayApplications