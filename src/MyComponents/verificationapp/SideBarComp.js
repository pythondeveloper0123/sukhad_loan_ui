import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { access_token } from '../LoginComp';

export default function LRSideBarComp() {
    const redirect = useNavigate()

    useEffect(()=>{
        if(access_token === 0 || sessionStorage.getItem("access_token") === null){
            redirect("/home");
        }
    },[]);

    
    function logoutSession() {
        sessionStorage.removeItem("access_token");
        redirect("/home");
        sessionStorage.removeItem("access_token");
        window.location.reload();
      }
    
      


  return (  
  <>
        <div className="flex-shrink-0 p-3 bg-white border border-info" style={{"width": "20%"}}>
            <a href="#" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
            <svg className="bi" width="10" height="24"><use href="#bootstrap"/></svg>
            <span className="fs-5 fw-semibold"> Document Verification</span>
            </a>
            <ul className="list-unstyled ps-1">
                
                    <li className="mb-1">

                        <br></br>
                        <label ><i className="bi bi-bell"></i> Dashboard </label>
                        <ul className="" >
                            <li><NavLink className="dropdown-item" to="/opsdashboard">Operation Dashboard</NavLink></li>
                        </ul>
                        <br></br>
                        

                    </li>
               
                    <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" onClick={logoutSession}>Log Out</button>
                    </li>
            </ul>
        </div>

        <div className="b-example-divider" style={{"width": "1%"}}></div>
    </>
    
    )

}