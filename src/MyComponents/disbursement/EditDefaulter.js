import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getUpdatedDefaulterData, getDefaulter } from "./DBServices";


function EditDefaulter(){
    const {id}=useParams('id');
        const[Defaulter,setDefaulter] = useState({});
    useEffect(()=>{
        getDefaulterById()
    },[])
    const navi=useNavigate();
    const {register,handleSubmit,setValue}=useForm();
    const getDefaulterById=async()=>{
        const getdefaulter=await getDefaulter(id);
        setDefaulter(getdefaulter.data);
    }
    const updateDefaulter=(updatedDefaulter)=>{
      getUpdatedDefaulterData(updatedDefaulter);
      console.log(updatedDefaulter)
      //navi('displaydefaulters');     
    
    }
    return(
        <>
         
          
            <br></br>
          
              


              <div className='container shadow p-3 mb-5 bg-body rounded'>
                <h1 style={{marginLeft:200}}>Edit Defaulter</h1>   
                <br></br>

                <form onSubmit={handleSubmit(updateDefaulter)} style={{marginLeft:200}}>
                
                  <div className="mb-3 ">
                      <label className="form-label">USER ID</label>
                      <input type="number" className="form-control" {...register("user")} {...setValue("user",Defaulter.user)} required/>
                  </div>

                  <div className="mb-3 ">
                      <label className="form-label">default_amount :</label>
                      <input type="number" className="form-control" {...register("default_amount")} {...setValue("default_amount",Defaulter.default_amount)} required/>
                  </div>

                  <div className="mb-3 ">
                      <label className="form-label">pending_since_date</label>
                      <input type="date" className="form-control" {...register("pending_since_date")} {...setValue("pending_since_date",Defaulter.pending_since_date)} required/>
                  </div>

                  <button type="submit" align="center" style={{"margin":"10px"}} className="btn btn-primary">Submit</button>
                  <button type="reset" align="center" style={{"margin":"10px"}} className="btn btn-warning">Reset</button>
                  </form>
              </div>




        </>
    )
}
export default EditDefaulter