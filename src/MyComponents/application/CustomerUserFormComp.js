import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { registerCustomerUser } from './DBServices';

export let user_id = 0;
const files=[];
export default function CustomerUserFormComp() {
    const {register, handleSubmit, reset, formState:{errors}}=useForm();
    // const customerUserData=(cusr)=>{
    //     console.log(cusr)
    //     registerCustomerUser(cusr);
    //     reset();
    // };
    

    const [file, setFile] = useState()

    function handleChange(event) {
      setFile(event.target.files[0])  
    };
    // console.log(file);
    files.push(file);
    // console.log(files);
    // console.log(files[1]);

    const redirect=useNavigate();

    const customerUserData=async (event)=>{
        // event.preventDefault()
        // const formData = new FormData();
        // event.append('file', file);
        // formData.append('fileName', file.name);
        console.log(event)
        console.log(file)
        event['photo']=files[1];
        event['signature']=files[2];
        console.log(event)
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };
        const resp = await registerCustomerUser(event, config);
        console.log(resp.data)
        user_id = resp.data.id

        reset();
        redirect("/custfamily");
    };


    
    // function handleSubmit(event) {
    //   event.preventDefault()
    //   const url = 'http://localhost:3000/uploadFile';
    //   const formData = new FormData();
    //   formData.append('file', file);
    //   formData.append('fileName', file.name);
    //   const config = {
    //     headers: {
    //       'content-type': 'multipart/form-data',
    //     },
    //   };
    //   axios.post(url, formData, config).then((response) => {
    //     console.log(response.data);
    //   });
  
    // }

  return (
    <>
    <div className='container shadow p-3 mb-5 bg-body rounded border border-info'>
      <h1>Customer Registration Form </h1>   
      <br></br>

      <form onSubmit={handleSubmit(customerUserData)}>
        <div className="mb-3 ">
            <label htmlFor="inputFirstName" className="form-label">First Name :</label>
            <input type="text" className="form-control" id="inputFirstName" {...register("first_name")} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputLastName" className="form-label">Last Name :</label>
            <input type="text" className="form-control" id="inputLastName" {...register("last_name")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputDob" className="form-label">Date of Birth :</label>
            <input type="date" className="form-control" id="inputDob" {...register("dob")} required/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Gender</label>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" value="female" id="flexRadioDefault1" {...register("gender")}/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">Female</label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" value="male" id="flexRadioDefault2" {...register("gender")}/>
            <label className="form-check-label" htmlFor="flexRadioDefault2">Male</label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" value="transgender" id="flexRadioDefault3" {...register("gender")}/>
            <label className="form-check-label" htmlFor="flexRadioDefault3">Transgender</label>
            </div>
            <h6>{errors.gender?.message}</h6>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputEmail" className="form-label">Email :</label>
            <input type="email" className="form-control" id="inputEmail" {...register("email")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputPassword" className="form-label">Password :</label>
            <input type="password" className="form-control" id="inputPassword" {...register("password")} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputMoblie" className="form-label">Mobile No. :</label>
            <input type="number" className="form-control" id="inputMoblie" {...register("mobile")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputAddress" className="form-label">Address :</label>
            <input type="text" className="form-control" id="inputAddress" {...register("address")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputCity" className="form-label">City :</label>
            <input type="text" className="form-control" id="inputCity" {...register("city")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputState" className="form-label">State :</label>
            <input type="text" className="form-control" id="inputState" {...register("state")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputCountry" className="form-label">Country :</label>
            <input type="text" className="form-control" id="inputCountry" {...register("country")} required/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="inputPinCode" className="form-label">Pin Code :</label>
            <input type="number" className="form-control" id="inputPinCode" {...register("pin_code")} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputPhoto" className="form-label">Photo : </label>
            <input type="file" className="form-control" id="inputPhoto"  onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="inputSignature" className="form-label">Signature : </label>
            <input type="file" className="form-control" id="inputSignature"  onChange={handleChange} />
        </div>


        {/* <div className="mb-3">
            <label htmlFor="inputPhoto" className="form-label">Photo : </label>
            <input type="file" className="form-control" id="inputPhoto"  onChange={handleChange} {...register("photo")}/>
        </div> */}


        
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
