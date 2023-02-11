import React from 'react'
import { NavLink } from 'react-router-dom'
import errorimage from  '../images/404error.png'


export default function ErrorComp() {
  return (
    <div align="center">
        <img src={errorimage} alt="error"/>
        <h1>The page you requested for is not found!</h1>

        <NavLink to="home">
            <button className='btn btn-primary'>Back to Home Page</button>
        </NavLink>
    </div>
  )
}
