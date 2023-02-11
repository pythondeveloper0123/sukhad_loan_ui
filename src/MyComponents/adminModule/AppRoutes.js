import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './sidenavbar/Sidebar';
import Navbar from './sidenavbar/Navbar';
import Dashboard from './MyComponents/Dashboard';
import About from './MyComponents/About';
import Reviews from './MyComponents/Reviews';
import Analytics from './MyComponents/Analytics';
import Contact from './MyComponents/Contact';
import Applications from './MyComponents/Applications';
import Personal from './Details/Personal';
import Delete from './Details/Delete';
import Employee from './MyComponents/Employee';
import EditUser  from './MyComponents/EditApplications';
// import AllDetails from './MyComponents/AllDetails';
import Bank from './MyComponents/AllDetails';
import LoginComp from './MyComponents/LoginComp';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/editapplications/:id" element={<EditUser/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/personal" element={<Personal/>}/>
          <Route path="/delete" element={<Delete/>}/>
          <Route path="/employee" element={<Employee/>}/>
          <Route path="/alldetails/:id" element={<Bank/>}></Route>

          <Route path="/login" element={<LoginComp/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default AppRoutes;