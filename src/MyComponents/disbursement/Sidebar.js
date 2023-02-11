import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import { access_token } from '../LoginComp';

function Sidebar() {
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

    const navigate = useNavigate();
  return (
      <div>
        <div className="container">
        <br></br><br></br><br></br>
        <div className='container float-start position-absolute start-0 shadow p-3 mb-10 bg-white rounded ' style={{border:"1px" ,width: "18%"}}>
          <div className='row' >
            <div class="col-lg-6">
            <div className='container float-start shadow p-0 mb-0.1 bg-white rounded ' style={{border:"1px" ,width: "230%"}}>
          <div class=" mb-2">
          <button type="button" class="btn btn-light shadow p-3 mb-11 bg-white rounded w-100 p-3" onClick={() => navigate("/displayloan")}>Loan Details</button><br></br></div>
          <div class=" mb-2">
          <button type="button" class="btn btn-light shadow p-3 mb-11 bg-white rounded w-100 p-3"onClick={() => navigate("/displaydisbursement")}>Disbursement Details</button><br></br></div>
          <div class=" mb-2">
          <button type="button" class="btn btn-light shadow p-3 mb-11 bg-white rounded w-100 p-3"onClick={() => navigate("/displayinstallments")}>Installment Details</button><br></br></div>
          <div class=" mb-2">
          <button type="button" class="btn btn-light shadow p-3 mb-11 bg-white rounded w-100 p-3"onClick={() => navigate("/displaydefaulters")}>Defaulters Details</button><br></br></div>
          <div class=" mb-2">
          <button type="button" class="btn btn-light shadow p-3 mb-11 bg-white rounded w-100 p-3"onClick={() => navigate("/displaybank")}>bank Details</button><br></br></div>
          <div class=" mb-2">
          <button type="button" class="btn btn-light shadow p-3 mb-11 bg-white rounded w-100 p-3" onClick={() => navigate("/displayvendor")}>Vendor Details</button><br></br></div>
          <div class=" mb-2">
          <button type="button" class="btn btn-light shadow p-3 mb-11 bg-white rounded w-100 p-3" onClick={() => navigate("/displayapplications")}>Application Details</button><br></br></div>
          <br></br>
          <div class=" mb-2">
          <button type="button" class="btn btn-light shadow p-3 mb-11 bg-white rounded w-100 p-3" onClick={logoutSession}>Log Out</button><br></br></div>
        </div>
        </div>
        <div class="col-lg-6 scrollspy-example" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" tabindex="0">
        </div>
        </div>
        </div>
        </div>
      </div>
  )
}

export default Sidebar
