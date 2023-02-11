import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from './DbServices'
import { access_token } from '../LoginComp';


export default function ASideBar(props) {
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
            <div className="flex-shrink-1 p-2 bg-white border border-info container-fluid" style={{ "width": "20%" }}>
                {/* <a href="#" className="d-flex align-items-center pb-1 mb-3 link-dark text-decoration-none border-bottom text-warning text-center">
                    <svg className="bi" width="10" height="24"><use href="#bootstrap" /></svg>
                    <span className="fs-5 fw-semibold">{user.first_name} {user.last_name}</span>
                </a> */}
                {/* <ul className="list-unstyled ps-1 dropdown:hover dropdown-menu"> */}
                <li className="mb-0">
                    <label className='text-primary text-center'>  Customer Details </label>
                    <hr />

                    <ul className="" >
                        <li><NavLink className="dropdown-item" to={`/${props.id}`}>Personal Details</NavLink></li>
                        <li><NavLink className="dropdown-item" to={`/Bank/${props.id}`}>Bank Details</NavLink></li>
                    </ul>
                    <hr />
                    <label className='text-primary text-center'><i className="bi bi-journal-plus"></i> Loan Applications </label>
                    <hr />
                    <ul className="" >
                        <li><NavLink className="dropdown-item" to={`/Application/${props.id}`}>Applications Details</NavLink></li>
                        <li><NavLink className="dropdown-item" to={`/Loan/${props.id}`}>Loan Details</NavLink></li>
                        <li><NavLink className="dropdown-item" to={`/Guarantor/${props.id}`}>Guarantor Details</NavLink></li>
                        <li><NavLink className="dropdown-item" to={`/Vendor/${props.id}`}>Vendor Details</NavLink></li>
                        <li><NavLink className="dropdown-item" to={`/Installments/${props.id}`}>Emi Details</NavLink></li>
                        <li><NavLink className="dropdown-item" to={`/Disbursements/${props.id}`}>Disbursement Details</NavLink></li>
                        <li><NavLink className="dropdown-item" to={`/Defaulters/${props.id}`}>EMI Status</NavLink></li>
                    </ul>

                </li>
                <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" onClick={logoutSession}>Log Out</button>
                    </li>
                {/* </ul> */}
            </div>
            <div className="b-example-divider" style={{ "width": "1%" }}></div>
        </>
    )
}
