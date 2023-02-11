import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { getAllUser } from "./dbservices";
import SideBarComp from "./SideBarComp";


const OperationHeadDashboard = ()=> {

    const[users, setUserList] = useState([]);
    let[count, setCount] = useState(true);
   
  
    

    useEffect(()=>{
        getAllUserFromDb()
    },[count])

    setTimeout(()=>{
        setCount(count!=true)
    }, 30000)
    
    const getAllUserFromDb =async()=>{
        const uList = await getAllUser();
        
        console.log(uList.data);
        setUserList(uList.data);
        
        
       
    }

    

    return(
        <>
        <div className='nav nav-tabs container shadow p-3 mb-5 bg-body rounded border border-info'>



<SideBarComp/>



<div  className=" p-3 border border-info" style={{"width": "79%" }}>

    <h2>Operation Head Dashboard</h2>
    <br></br>     

    <div className="overflow-scroll" style={{"height": "500px" }}>
    <table class="table container class shadow p-3">
            <thead>
                <tr>
                <th scope="col">Customer ID</th>   
                <th scope="col">Application ID</th>
               
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email ID</th>
                <th scope="col">Show Details</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user=>{
                    return(
                        <>
                           
                                
                                {user.Applications.map(app=>{
                                    
                                    return(
                                        <>
                                        <tr>
                                        <th scope="row">{user.id}</th>
                                        <th scope="row">{app.id}</th>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td scope="row">
                                        <NavLink to={`/viewapp/${user.id}`}>
                                            <i class="bi bi-pencil-square"></i>
                                        </NavLink>
                                        </td>
                                        </tr>
                                        </>
                                    )
                                })}
                            

                            
                            
                                       
                           
                            

                        </>
                    )
                })}
                
            </tbody>
            </table>


        </div>
</div> 
</div> 


            <br></br>
            {/* <table class="table container class shadow p-3">
            <thead>
                <tr>
                <th scope="col">Customer ID</th>   
                <th scope="col">Application ID</th>
               
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email ID</th>
                <th scope="col">Show Details</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user=>{
                    return(
                        <>
                           
                                
                                {user.Applications.map(app=>{
                                    
                                    return(
                                        <>
                                        <tr>
                                        <th scope="row">{user.id}</th>
                                        <th scope="row">{app.id}</th>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td scope="row">
                                        <NavLink to={`/viewapp/${user.id}`}>
                                            <i class="bi bi-pencil-square"></i>
                                        </NavLink>
                                        </td>
                                        </tr>
                                        </>
                                    )
                                })}
                            

                            
                            
                                       
                           
                            

                        </>
                    )
                })}
                
            </tbody>
            </table> */}
        </>
    )
}


export default OperationHeadDashboard;