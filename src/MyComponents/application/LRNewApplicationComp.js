import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getCustomerApplications, getCustomerUsers } from './DBServices';
import { NavLink } from 'react-router-dom'
import LRSideBarComp from './LRSideBarComp';


export default function NewApplicationsDisplayComp() {
    const [applications, getAllApplications]=useState([]);
    const [users, getAllUsers]=useState([]);

    useEffect(()=>{
        callGetAllApplications();
    },[]);

    const callGetAllApplications=async()=>{
        const applicationArray=await getCustomerApplications();
        console.log(applicationArray.data);
        getAllApplications(applicationArray.data)

        const userArray=await getCustomerUsers();
        console.log(userArray.data);
        getAllUsers(userArray.data)

    }; 



    
  return (
    <>
    <div className='nav nav-tabs container shadow p-3 mb-5 bg-body rounded border border-info'>


        <LRSideBarComp/>


        <div  className=" p-3 border border-info" style={{"width": "79%" }}>

            <h2>New Loan Applications </h2>
            <br></br>     

            <div className="overflow-scroll" style={{"height": "500px" }}>
            <table className="table" style={{"width": "150%" }}>
                <thead>
                    <tr>
                    <th scope="col">Application ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Business Title</th>
                    <th scope="col">Application Submition Date Time</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((apps)=>{
                        if(apps.status === "")
                            
                            
                                
                                return (
                                    <>
                                    
                                    {users.map((usr)=>{
                                        if(apps.user === usr.id)

                                        return (
                                        <tr>

                                        <th scope="row">{apps.id}</th>
                                        <td>{usr.first_name}</td>
                                        <td>{usr.last_name}</td>
                                        <td>{usr.mobile}</td>
                                        <td>{apps.business_title}</td>
                                        <td>{apps.application_timestamp}</td>
                                        <td>{apps.status}</td>
                                        <td>
                                            <NavLink to={`/updateapplicationstatus/${apps.id}`}>
                                            <i className="bi bi-pencil-fill"></i>
                                            </NavLink>
                                        </td>
                                        
                                        

                                        </tr>
                                        )
                                    
                                    })}
                                    
                                    </>
                                );




                            
                        
                    })}

                </tbody>
                </table>
                </div>
        </div> 
    </div> 
        </>
  )
}
