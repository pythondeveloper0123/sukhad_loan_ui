import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import { getInquiry, patchInquiryStatus } from './DBServices';
import LRSideBarComp from './LRSideBarComp';


export default function LRInquiryEditComp() {
    const {id}=useParams("id");

    const[inquiry, getOneInquiry]=useState({});

    const callGetInquiry=async()=>{
        const inq=await getInquiry(id);
        console.log(inq.data);
        getOneInquiry(inq.data);
    };
    useEffect(()=>{
        callGetInquiry();
    },[])

    const redirect=useNavigate();
    const {register, handleSubmit, setValue, formState:{errors}}=useForm()
    const inquiryStatus=async (inqr)=>{
        console.log(inqr);
        const resp = await patchInquiryStatus(id,inqr);
        console.log(resp.data)
        redirect("/newinquiry");

    }


  return (
    <>
    <div className='nav nav-tabs container shadow p-3 mb-5 bg-body rounded border border-info'>


        <LRSideBarComp/>


        <div className=" p-3 border border-info" style={{"width": "79%" }}>
        <h1>Update Status Inquiry ID : {id}</h1>   
        <br></br>

        <div className="overflow-scroll" style={{"height": "500px" }}>
        <form onSubmit={handleSubmit(inquiryStatus)}>
            
            <div className="mb-3 ">
                <label htmlFor="inputFirstName" className="form-label">ID :</label>
                <input readOnly={true} type="number" className="form-control" id="inputFirstName" {...setValue("id",inquiry.id)} {...register("id")} required/>
            </div>
            <div className="mb-3 ">
                <label htmlFor="inputFirstName" className="form-label">First Name :</label>
                <input readOnly={true} type="text" className="form-control" id="inputFirstName" {...setValue("first_name",inquiry.first_name)} {...register("first_name")} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputLastName" className="form-label">Last Name :</label>
                <input readOnly={true} type="text" className="form-control" id="inputLastName" {...setValue("last_name",inquiry.last_name)} {...register("last_name")} required/>
            </div>
            <div className="mb-3 ">
                <label htmlFor="inputEmail" className="form-label">Email :</label>
                <input readOnly={true} type="email" className="form-control" id="inputEmail" {...setValue("email",inquiry.email)} {...register("email")} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputMoblie" className="form-label">Mobile No. :</label>
                <input readOnly={true} type="number" className="form-control" id="inputMoblie" {...setValue("mobile",inquiry.mobile)} {...register("mobile")} required/>
            </div>
            <div className="mb-3 ">
                <label htmlFor="inputMessage" className="form-label">Message :</label>
                <textarea readOnly={true} className="form-control" id="inputMessage" {...setValue("message",inquiry.message)} {...register("message")} required></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="inputMoblie" className="form-label">Inquiry Date Time :</label>
                <input readOnly={true} type="datetime" className="form-control" id="inputMoblie" {...setValue("response_timestamp",inquiry.response_timestamp)} {...register("response_timestamp")} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Status :</label>
                <select className="form-select" {...setValue("status",inquiry.status)} {...register("status")}>
                <option value=""></option>
                <option value="pending">Pending</option>
                <option value="done">Done</option>
                <option value="rejected">Rejected</option>
                </select>
            </div>


            <button type="submit" className="btn btn-primary">Update</button>
            </form>

            </div>
        </div>

    </div>
    </>
  )
}
