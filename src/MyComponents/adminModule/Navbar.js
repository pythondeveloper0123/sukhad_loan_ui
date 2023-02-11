

import { access_token } from '../MyComponents/LoginComp';
import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


function Navbar() {



      const redirect = useNavigate()
  
      useEffect(()=>{
          if(access_token === 0 || sessionStorage.getItem("access_token") === null){
              redirect("/login");
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

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <h3>Sukhad_loan</h3>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink to="home" className="nav-link"><b>Home</b></NavLink>
              </li>
            </ul>

            <li className="nav-item" >
             <NavLink className="nav-link text-danger" to="/login" onClick={logoutSession}>Logout</NavLink>
             </li>
             {/* style={{ marginLeft: "310%" }} */}

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar