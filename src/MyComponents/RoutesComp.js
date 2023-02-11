// Loan Representative
import React from 'react'
import MyNavBar from './MyNavBar'
import {Routes, Route} from "react-router-dom"
import HomeComp from './HomeComp'
import AboutComp from './AboutComp'
import InquiryFormComp from './application/InquiryFormComp'
import ContactComp from './ContactComp'
import ErrorComp from './ErrorComp'
import CustomerUserFormComp from './application/CustomerUserFormComp'
import CustomerFamilyFormComp from './application/CustomerFamilyFormComp'
import CustomerBankFormComp from './application/CustomerBankFormComp'
import CustomerApplicationFormComp from './application/CustomerApplicationFormComp'
import CustomerDocumentFormComp from './application/CustomerDocumentFormComp'
import CustomerLoanFormComp from './application/CustomerLoanFormComp'
import CustomerGuarantorFormComp from './application/CustomerGuarantorFormComp'
import CustomerVendorFormComp from './application/CustomerVendorFormComp'
import NewInquriesDisplayComp from './application/LRNewInquiryComp'
import OldInquriesDisplayComp from './application/LROldInquiryComp'
import LRInquiryEditComp from './application/LRInquiryEditComp'
import NewApplicationsDisplayComp from './application/LRNewApplicationComp'
import OldApplicationsDisplayComp from './application/LROldApplicationComp'
import LRApplicationEditComp from './application/LRApplicationEditComp'
import LoginComp from './LoginComp'


//operation head
import DisplayApplication from './verificationapp/display_application'
import OperationHeadDashboard from './verificationapp/verification_dashoard'

//account head
import Disbursement from './disbursement/Disbursement'
import Installment from './disbursement/Installment'
import Defaulter from './disbursement/Defaulter'
import Display from './disbursement/DisplayDefaulter'
import DisplayDisbursemet from './disbursement/DisplayDisbursement'
import DisplayInstallment from './disbursement/DisplayInstallment'
import DisplayLoan from './disbursement/DisplayLoanDetails'
import DisplayBankDetails from './disbursement/DisplayBankDetails'
import DisplayVendorDetails from './disbursement/DisplayVendorDetails'
import DisplayApplications from './disbursement/Applications'
import EditDefaulter from './disbursement/EditDefaulter'
import GstCalculator from './disbursement/GST'


// customer
import Application from './customer/Application'
import ASideBar from './customer/ASideBar'
import Bank from './customer/Bank'
import CustomerHome from './customer/CustomerHome'
import Defaulters from './customer/Defaulters'
import Disbursements from './customer/Disbursements'
import Guarantor from './customer/Guarantor'
import Installments from './customer/Installments.js'
import Loan from './customer/Loan'
import User from './customer/User'
import Vendor from './customer/Vendor'


//  LOAN SANCTION OFFICER  
import LoanEditComp from './LoanSanctioningOfficer/LoanEditComp'
import NewLoanComp from './LoanSanctioningOfficer/NewLoanComp'
import OldLoanComp from './LoanSanctioningOfficer/OldLoanComp'
import OldViewLoanComp from './LoanSanctioningOfficer/OldViewLoanComp'


// Admin module
import Dashboard from './adminModule/Dashboard';
import Reviews from './adminModule/Reviews';
import Analytics from './adminModule/Analytics';
import Applications from './adminModule/Applications';
import Personal from './adminModule/Personal';
import Delete from './adminModule/Delete';
import Employee from './adminModule/Employee';
import EditUser  from './adminModule/EditApplications';
import AllDetails from './adminModule/AllDetails';



export default function RoutesComp() {
  return (
<>
<MyNavBar/>

<Routes>
{/* Loan Representative */}
    <Route path='/home' element={<HomeComp/>}></Route>
    <Route path='/about' element={<AboutComp/>}></Route>
    <Route path='/inquiry' element={<InquiryFormComp/>}></Route>
    <Route path='/custuser' element={<CustomerUserFormComp/>}></Route>
    <Route path='/custfamily' element={<CustomerFamilyFormComp/>}></Route>
    <Route path='/custbank' element={<CustomerBankFormComp/>}></Route>
    <Route path='/custapplication' element={<CustomerApplicationFormComp/>}></Route>
    <Route path='/custdocument' element={<CustomerDocumentFormComp/>}></Route>
    <Route path='/custloan' element={<CustomerLoanFormComp/>}></Route>
    <Route path='/custguarantor' element={<CustomerGuarantorFormComp/>}></Route>
    <Route path='/custvendor' element={<CustomerVendorFormComp/>}></Route>
    <Route path='/loanRepresentative' element={<NewInquriesDisplayComp/>}></Route>
    <Route path='/newinquiry' element={<NewInquriesDisplayComp/>}></Route>
    <Route path='/oldinquiry' element={<OldInquriesDisplayComp/>}></Route>
    <Route path='/updateinquirystatus/:id' element={<LRInquiryEditComp/>}></Route>
    <Route path='/newapplications' element={<NewApplicationsDisplayComp/>}></Route>
    <Route path='/oldapplications' element={<OldApplicationsDisplayComp/>}></Route>
    <Route path='/updateapplicationstatus/:id' element={<LRApplicationEditComp/>}></Route>
    <Route path='/login' element={<LoginComp/>}></Route>



    <Route path='/contact' element={<ContactComp/>}></Route>
    <Route path='' element={<HomeComp/>}></Route>
    <Route path='/' element={<HomeComp/>}></Route>
    <Route path='/*' element={<ErrorComp/>}></Route>


    {/* operation head */}
    <Route path='/opsdashboard' element={<OperationHeadDashboard/>}></Route>
    <Route path='/viewapp/:id' element={<DisplayApplication/>}></Route>

    {/* account head */}
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


    {/* Customer  */}
    <Route path="/Application/:id" element={<Application />}></Route>
    <Route path='/Asidebar' element={<ASideBar />}></Route>
    <Route path="/Bank/:id" element={<Bank />}></Route>
    <Route path="/CustomerHome/:id" element={<CustomerHome />}></Route>
    <Route path="/Defaulters/:id" element={<Defaulters />}></Route>
    <Route path="/Disbursements/:id" element={<Disbursements />}></Route>
    <Route path="/Guarantor/:id" element={<Guarantor />}></Route>
    <Route path="/Installments/:id" element={<Installments />}></Route>
    <Route path="/Loan/:id" element={<Loan />}></Route>
    <Route path="/:id" element={<User />}></Route>
    <Route path="/Vendor/:id" element={<Vendor />}></Route> 



    {/* loan sanctioning  */}
    <Route path='/updateloan/:id' element={<LoanEditComp/>}></Route>
    <Route path='/newloans' element={<NewLoanComp/>}></Route>
    <Route path='/oldloans' element={<OldLoanComp/>}></Route>
    <Route path='/oldloansview/:id' element={<OldViewLoanComp/>}></Route>


    {/* Admin Module  */}
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/reviews" element={<Reviews />} />
    <Route path="/analytics" element={<Analytics />} />
    <Route path="/applications" element={<Applications />} />
    <Route path="/editapplications/:id" element={<EditUser/>} />
    <Route path="/personal" element={<Personal/>}/>
    <Route path="/delete" element={<Delete/>}/>
    <Route path="/employee" element={<Employee/>}/>
    <Route path="/alldetails/:id" element={<AllDetails/>}></Route>



</Routes>

</>
  )
}
