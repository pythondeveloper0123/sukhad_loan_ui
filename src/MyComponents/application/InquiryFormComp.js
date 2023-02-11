import React from 'react'
import { useForm } from 'react-hook-form'
import { registerInquiry } from './DBServices';

export default function InquiryFormComp() {
    const {register, handleSubmit, reset, formState:{errors}}=useForm();
    const inquiryData=(inq)=>{
        console.log(inq)
        registerInquiry(inq);
        reset();
    }


  return (
    <>
    <div className='container shadow p-3 mb-5 bg-body rounded border border-info'>
      <h1>Inquiry Form </h1>   
      <br></br>

      <form onSubmit={handleSubmit(inquiryData)}>
        <div className="mb-3 ">
            <label htmlFor="inputFirstName" className="form-label">First Name :</label>
            <input type="text" className="form-control" id="inputFirstName" {...register("first_name")} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputLastName" className="form-label">Last Name :</label>
            <input type="text" className="form-control" id="inputLastName" {...register("last_name")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputEmail" className="form-label">Email :</label>
            <input type="email" className="form-control" id="inputEmail" {...register("email")} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputMoblie" className="form-label">Mobile No. :</label>
            <input type="number" className="form-control" id="inputMoblie" {...register("mobile")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputMessage" className="form-label">Message :</label>
            <textarea className="form-control" id="inputMessage" {...register("message")} required></textarea>
        </div>
        {/* <div className="mb-3">
            <label className="form-label">Status</label>
            <select className="form-select" {...register("status")} >
            <option value="">-</option>
            <option value="pending">Pending</option>
            <option value="done">Done</option>
            <option value="rejected">Rejected</option>
            </select>
        </div> */}

        {/* <div className="mb-3">
            <label  className="form-label">Gender</label>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" value="Female" id="flexRadioDefault1" {...register("gender")}/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">Female</label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" value="Male" id="flexRadioDefault2" {...register("gender")}/>
            <label className="form-check-label" htmlFor="flexRadioDefault2">Male</label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" value="Transgender" id="flexRadioDefault3" {...register("gender")}/>
            <label className="form-check-label" htmlFor="flexRadioDefault3">Transgender</label>
            </div>
            <h6>{errors.gender?.message}</h6>
        </div> */}
        

        {/* <div className="mb-3">
            <label  className="form-label">Langugae Known</label>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" name="language" value="Marathi" id="flexCheckDefault1" {...register("language")}/>
            <label className="form-check-label" htmlFor="flexCheckDefault1">Marathi</label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" name="language" value="Hindi" id="flexCheckDefault2" {...register("language")}/>
            <label className="form-check-label" htmlFor="flexCheckDefault2">Hindi</label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" name="language" value="English" id="flexCheckDefault3" {...register("language")}/>
            <label className="form-check-label" htmlFor="flexCheckDefault3">English</label>
            </div>
            <h6>{errors.language?.message}</h6>
        </div> */}



        <button type="submit" align="center" style={{"margin":"10px"}} className="btn btn-primary">Submit</button>
        <button type="reset" align="center" style={{"margin":"10px"}} className="btn btn-warning">Reset</button>
        </form>
    </div>
    </>
  )
}
