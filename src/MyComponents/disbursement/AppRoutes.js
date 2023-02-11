import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayApplications from './Applications'
import Defaulter from './Defaulter'
import Disbursement from './Disbursement'
import DisplayBankDetails from './DisplayBankDetails'
import Display from './DisplayDefaulter'
import DisplayDisbursemet from './DisplayDisbursement'
import DisplayInstallment from './DisplayInstallment'
import DisplayLoan from './DisplayLoanDetails'
import DisplayVendorDetails from './DisplayVendorDetails'
import EditDefaulter from './EditDefaulter'
import GstCalculator from './GST'
import Home from './Home'
import Installment from './Installment'
import LoginComp from './Logincomp'
import MyNavbar from './MyNavbar'
import Sidebar from './Sidebar'
import Userform from './userform'

function AppRoutes() {
  return (
    <div>
       
        <MyNavbar/>       
       
        <Routes> 
            <Route path="/login" element={<LoginComp/>}></Route>  
            <Route path="/user" element={<Userform/>}></Route>
            <Route path="/home" element={<Home/>}></Route>     
                   
            <Route path="displayloan/disbursement" element={<Disbursement/>}></Route>
            <Route path="displayinstallments/installment" element={<Installment/>}></Route>
            <Route path="displaydefaulters/defaulter" element={<Defaulter/>}></Route>
            <Route path="displaydefaulters" element={<Display/>}></Route>
            <Route path="displaydisbursement" element={<DisplayDisbursemet/>}></Route>
            <Route path="displayinstallments" element={<DisplayInstallment/>}></Route>
            <Route path="displayloan" element={<DisplayLoan/>}></Route>
            <Route path="displaybank" element={<DisplayBankDetails/>}></Route>
            <Route path="displayvendor" element={<DisplayVendorDetails/>}></Route>
            <Route path="displayapplications" element={<DisplayApplications/>}></Route>
            <Route path='displaydefaulters/EditDefaulter/:id' element={<EditDefaulter/>}></Route>
            <Route path='displayloan/gst' element={<GstCalculator/>}></Route>                              
        </Routes>

    </div>
        
   
  )
}

export default AppRoutes
