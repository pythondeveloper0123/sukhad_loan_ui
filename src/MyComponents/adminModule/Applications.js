import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { getUser ,DeleteUserById} from './DBServices';
import SideBarComp from './SideBarComp';


export default function Applications() {

const [users,setUserList]=useState([]);

  useEffect(()=>{
    getAllUserDataFromDB();
  },[users])

  const getAllUserDataFromDB=async()=>{
    const ulist= await getUser();
    console.log(ulist.data);
    setUserList(ulist.data);
    
  }

const DeleteUserByUserId=(userID)=>{
  alert("delete userbyID:"+userID);
  DeleteUserById(userID);

}

    return (
        <>
        <SideBarComp/>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">D.O.B</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Address</th>
                            <th scope="col">City</th>
                            <th scope="col">State</th>
                            <th scope="col">Country</th>
                            <th scope="col">Pin_Code</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Photo</th>
                            <th scope="col">Siganture</th>
                            <th scope="col">Roll</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                            <th scope='col'>Show all Details</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
      users.map(user=>{

        return(
          <>
          <tr>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.dob}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.address}</td>
            <td>{user.city}</td>
            <td>{user.country}</td>
            <td>{user.state}</td>

            <td>{user.pin_code}</td>
            <td>{user.mobile}</td>
            <td><img src={user.photo} style={{width: 100, height: 100}}></img></td>
            <td><img src={user.signature} style={{width: 140, height: 60}}/></td>
            <td>{user.role}</td>
            
            
            <td><NavLink to={`/editapplications/${user.id}`}><i class="bi bi-pencil-square" ></i></NavLink></td>
            <td><i class="bi bi-trash" onClick={()=>DeleteUserByUserId(user.id)}></i></td>
            <td><NavLink to={`/alldetails/${user.id}`}><i class="bi bi-folder-fill"></i></NavLink></td>
          </tr>
          
          
          
          </>
        )
      })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

