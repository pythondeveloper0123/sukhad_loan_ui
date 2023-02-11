import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MyNavBar() {
  return (
    <>
    <div>
        <ul className="nav nav-tabs container shadow p-3 mb-5 bg-body rounded border border-info" >
        <li className="nav-item">
            <NavLink className="nav-link" to="home">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="about">About</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="inquiry">Inquiry</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="login">Log In</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="contact">Contact</NavLink>
        </li>
        </ul>
    </div>
    </>
  )
}
