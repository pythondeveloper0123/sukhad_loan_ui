import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllDefaulter, defaulterDelete } from "./DBServices";
import Sidebar from "./Sidebar";

function Display(){
    const[defaulters,setUserList]=useState([]);
    useEffect(()=>{
        getAllDefaulterDataFromDB();
    })
    const getAllDefaulterDataFromDB= async()=>{
        const uList=await getAllDefaulter();
        //console.log(ulist.data);
        setUserList(uList.data);
    }
    const deleteDefaulterById=(defaulterId)=>{
      //alert('defaulter deleting:'+defaulterId);
      defaulterDelete(defaulterId);
    }
    return (
        <>
              <Sidebar/>
            <h1 style={{marginLeft:240}}>Defaulter Details</h1>       
            <table class=" table-bordered border-secondary" style={{marginLeft:240}}>
            <thead>
                <tr>
                  <th scope="col">user id</th>
                  <th scope="col">default amount</th>
                  <th scope="col">pending since date</th>
                  <th scope="col">update</th>
                  <th scope="col">delete</th>
                  
                </tr>
              </thead>
              <tbody>
                {
                    defaulters.map(defaulter=>{
                        return (<>
                                <tr>
                                <td >{defaulter.user}</td> 
                                <td>{defaulter.default_amount}</td>
                                <td>{defaulter.pending_since_date}</td>
                                
                                <td><NavLink to={`EditDefaulter/${defaulter.id}`}><i class="bi bi-pencil-square text-primary"></i></NavLink></td>
                                <td><i class="bi bi-trash text-danger"onClick={()=>deleteDefaulterById(defaulter.id)}></i></td>
                                </tr>
                                
                        </>)
                    })
                }
                
                
              </tbody><br></br>
              
            </table>
            <button className="btn btn-primary" style={{marginLeft:350}}><NavLink to="defaulter" className="text-light">Add Defaulter</NavLink></button>
            </>
    )
}
export default Display