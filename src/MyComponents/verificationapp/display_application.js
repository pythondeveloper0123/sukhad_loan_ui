import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { displayUser, getUpdatedUserData } from "./dbservices";
import {useForm} from 'react-hook-form';
import SideBarComp from "./SideBarComp";



const DisplayApplication = ()=>{

    const[user, setUser] = useState({});
    const[apps, setApp] = useState([]);
    
    const {id} = useParams('id')
    const{register, handleSubmit, setValue} = useForm()
    
    

    const navi = useNavigate();
    
    useEffect(()=>{
        getUserById();
        
    },[])

    const getUserById = async()=> {
        const getuser = await displayUser(id);
        setUser(getuser.data);
        console.log(getuser.data)
        setApp(getuser.data.Applications);
        console.log(getuser.data.Applications);
        
        
    }

    const updateUser =(updatedUser) => {
       
        let current_user = user;
        
        current_user.Applications.map(app=>{
            app.status = updatedUser.app_status;
            app.Documents.status = updatedUser.doc_status;
            app.remark = updatedUser.app_remark;
            app.Documents.remark = updatedUser.doc_remark;
        });

        
        getUpdatedUserData(current_user, id);
        navi('/opsdashboard')
    }

   

    

    
    return (
        <>
            
            
            
            {/* <div className="bg-light" style={{'margin':'auto', 'width':'85%', "border": 'none', 'padding': '10px'}}>   

            </div> */}
            <div className='nav nav-tabs container shadow p-3 mb-5 bg-body rounded border border-info'>
                <SideBarComp/>
            <div className=" p-3 border border-info" style={{"width": "79%" }}>
            <div className="row ">
            <div className="col-lg-4">
                <div className="card mb-4 shadow p-3" >
                <div className="card-body text-center">
                <img src={user.photo} className="img-thumbnail" alt="..."/>
                

                </div>
                </div>
            </div>
            </div>
             
            <br></br>
            
            
                
                {apps.map(app=>{
                    return(
                    <>
                    <div className="card-body border border-info rounded-3">
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0 fw-semibold">User ID</p>
                            </div>
                            <div className="col-sm-9">
                            <p className="fw-normal mb-0">{user.id}</p> 
                            </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0 fw-semibold">Application ID</p>
                            </div>
                            <div className="col-sm-9">
                            <p className="fw-normal mb-0">{app.id}</p> 
                            </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0 fw-semibold">Full Name</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="fw-normal mb-0">{`${user.first_name}  ${user.last_name}`}</p>
                            </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0 fw-semibold">Email</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="fw-normal mb-0">{user.email}</p>
                            </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0 fw-semibold">DOB</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="fw-normal mb-0">{user.dob}</p>
                            </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0 fw-semibold">Gender</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="fw-normal mb-0">{user.gender}</p>
                            </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0 fw-semibold">Address</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="fw-normal mb-0">{user.address}</p>
                            </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">Aadhaar No</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="fw-normal mb-0">{app.aadhaar_no}</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">Pancard No</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="fw-normal mb-0">{app.pan_no}</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">Business Title</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="fw-normal mb-0">{app.business_title}</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">Business Type</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="fw-normal mb-0">{app.business_type}</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">GST Registration No</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="fw-normal mb-0">{app.gst_registration_no}</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">Business License No</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="fw-normal mb-0">{app.business_license_no}</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">Annual Turnover</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="fw-normal mb-0">{app.expected_average_annual_turnover}</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">Application Timestamp</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="fw-normal mb-0">{app.application_timestamp}</p>
                                    </div>
                                </div>
                                <hr></hr>
                                
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">Aadhaar Card</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <a href={app.Documents.aadhaar_card} target="_blank" rel="noreferrer">Aadhaar Card</a>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">Pan Card</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <a href={app.Documents.pan_card} target="_blank" rel="noreferrer">Pan Card</a>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">Business Address Proof</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <a href={app.Documents.business_address_proof_or_copy_of_rent_agreement} target="_blank" rel="noreferrer">Business Address Proof</a>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">Electricity Bill</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <a href={app.Documents.electric_bill} target="_blank" rel="noreferrer">Electricity Bill</a>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">MSME Certificate</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <a href={app.Documents.msme_certificate} target="_blank" rel="noreferrer">MSME Certificate</a>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">GST Certificate</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <a href={app.Documents.gst_certificate} target="_blank" rel="noreferrer">GST Certificate</a>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">Udyog Aadhaar</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <a href={app.Documents.udyog_aadhaar_registration} target="_blank" rel="noreferrer">Udyog Aadhaar</a>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">Business License</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <a href={app.Documents.business_license} target="_blank" rel="noreferrer">Business License</a>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">Business Plan</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <a href={app.Documents.business_plan_or_proposal} target="_blank" rel="noreferrer">Business Plan</a>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3 ">
                                        <p className="mb-0 fw-semibold">Income Tax Returns</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <a href={app.Documents.three_year_itr_with_balance_sheet} target="_blank" rel="noreferrer">Income Tax Returns</a>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">Collateral Document</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <a href={app.Documents.collateral_document} target="_blank" rel="noreferrer">Collateral Document</a>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 fw-semibold">Stamp Duty</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <a href={app.Documents.stamp_duty} target="_blank" rel="noreferrer">Stamp Duty</a>
                                    </div>
                                </div>
                                <hr></hr>
                                <form onSubmit={handleSubmit(updateUser)}>
                                <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0 fw-semibold">Application Status</p>
                                </div>
                                <div className="col-sm-9 ">
                                    <select {...register('app_status')} {...setValue('app_status', app.status)} >
                                        <option value=""></option>
                                        <option value="generated">generated</option>
                                        <option value="document_verified">document_verified</option>
                                        <option value="sanctioned">sanctioned</option>
                                        <option value="disbursed">disbursed</option>
                                        <option value="rejected">rejected</option>
                                    </select>
                                    
                                </div>
                                </div>
                                <hr></hr>
                                
                                <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0 fw-semibold">Document Status</p>
                                </div>
                                <div className="col-sm-9">
                                    <select {...register('doc_status')} {...setValue('doc_status', app.Documents.status)}>
                                        <option value=""></option>
                                        <option value="pending">pending</option>
                                        <option value="done">done</option>
                                        <option value="rejected">rejected</option>
                    
                                    </select>
                                    
                                </div>
                                <hr></hr>
                                <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0 fw-semibold">Application Remark</p>
                                </div>
                                <div className="col-sm-9">
                                    <textarea placeholder="Application Remark  Remark By" rows="4" cols="40" {...register('app_remark')} {...setValue('app_remark', app.remark)}></textarea>
                                </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0 fw-semibold">Document Remark</p>
                                </div>
                                <div className="col-sm-9">
                                    <textarea placeholder="Document Remark  Remark By" rows="4" cols="40" {...register('doc_remark')} {...setValue('doc_remark', app.Documents.remark)}></textarea>
                                </div>
                                </div>
                                <hr></hr>
                                
                                <input type="submit" value="Submit" class="btn btn-large btn-success"/>
                                </div>
                                </form>
                                <hr></hr>
                                </div>
                                <br></br>
                    </>
                    )
                })}    

                    

                
                
                </div>
                </div>

               

        </>
    )
}


export default DisplayApplication;