import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getInquiries } from './DBServices';
import { NavLink } from 'react-router-dom'
import LRSideBarComp from './LRSideBarComp';


export default function NewInquriesDisplayComp() {
    const [inquiries, getAllInquries]=useState([]);
    const [flag, setFlag] = useState(true)
    
    useEffect(()=>{
        callGetInquiries();
    },[flag]);

    const callGetInquiries=async()=>{
        const save=await getInquiries();
        console.log(save.data);
        getAllInquries(save.data)

    }; 





    
  return (
    <>
    <div className='nav nav-tabs container shadow p-3 mb-5 bg-body rounded border border-info'>



        <LRSideBarComp/>



        <div  className=" p-3 border border-info" style={{"width": "79%" }}>

            <h2>New Inquiries</h2>
            <br></br>     

            <div className="overflow-scroll" style={{"height": "500px" }}>
            <table className="table" style={{"width": "150%" }}>
                <thead>
                    <tr>
                    <th scope="col">Inquiry ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Message</th>
                    <th scope="col">Inquiry Date Time</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inquiries.map((inq)=>{
                            if(inq.status == "")
                            return (
                                <>
                                    <tr>
                                    <th scope="row">{inq.id}</th>
                                    <td>{inq.first_name}</td>
                                    <td>{inq.last_name}</td>
                                    <td>{inq.email}</td>
                                    <td>{inq.mobile}</td>
                                    <td><textarea readOnly={true} defaultValue={inq.message}></textarea></td>
                                    <td>{inq.inquiry_date}</td>
                                    <td>{inq.status}</td>

                                    <td>
                                        <NavLink to={`/updateinquirystatus/${inq.id}`}>
                                        <i className="bi bi-pencil-fill"></i>
                                        </NavLink>
                                    </td>
                                    
                                    

                                    </tr>
                                </>
                            )}
                        
                        )
                    }

                </tbody>
                </table>
                </div>
        </div> 
    </div> 
        </>
  )
}
