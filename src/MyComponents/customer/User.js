import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUser } from './DbServices';
import ASideBar from './ASideBar';
import MyNavBar from '../MyNavBar';
export default function User() {

    const { id } = useParams('id')
    const [user, setUser] = useState({})


    useEffect(() => {
        getUserById();
        // eslint-disable-next-line
    }, [])

    const getUserById = async () => {
        const getuser = await getUser(id)
        console.log(getuser.data)
        setUser(getuser.data)

    }

    return (
        <>

            
            <div className='nav nav-tabs container shadow p-3  bg-body rounded border border-info start-0' style={{ "height": "150%" }}>

                <ASideBar id={id} />
                <div className="b-example-divider" style={{ "width": "4%" }}></div>
                <div className=" p-3 border border-info" style={{ "width": "75%" }}>

                    <div className='container'>
                        <div className='row'>
                            <h2 className='text-primary text-center'>Personal Information</h2>

                            <div className="overflow-scroll" style={{ "height": "500px" }}>
                                <div className="container-fluid text-center">
                                    <img src={user.photo} alt="" width="200" height="200" />
                                </div>


                                <div className='container-fluid'>
                                    <div className='row'>

                                        <h2 className='text-primary text-center'> Mr.{user.first_name} {user.last_name}</h2>

                                        <table className="table table-light" style={{ "width": "100%" }}>

                                            <tbody>
                                                <>
                                                    <tr>
                                                        <th scope="col">Customer Registration ID</th>
                                                        <td>{user.id}</td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="col">First Name</th>
                                                        <td>{user.first_name}</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="col">Last Name</th>
                                                        <td>{user.last_name}</td>
                                                    </tr>

                                                    <tr>

                                                        <th scope="col">Date of Birth</th>
                                                        <td>{user.dob}</td>

                                                    </tr>

                                                    <tr>
                                                        <th scope="col">Gender</th>
                                                        <td>{user.gender}</td>

                                                    </tr>

                                                    <tr>
                                                        <th scope="col">Email</th>
                                                        <td>{user.email}</td>
                                                    </tr>

                                                    <tr>

                                                        <th scope="col">Address</th>
                                                        <td>{user.address}</td>

                                                    </tr>

                                                    <tr>
                                                        <th scope="col">City</th>
                                                        <td>{user.city}</td>
                                                    </tr>

                                                    <tr>

                                                        <th scope="col">State</th>
                                                        <td>{user.state}</td>

                                                    </tr>

                                                    <tr>
                                                        <th scope="col">Country</th>
                                                        <td>{user.country}</td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="col">Pin Code</th>
                                                        <td>{user.pin_code}</td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="col">Mobile</th>
                                                        <td>{user.mobile}</td>
                                                    </tr>
                                                </>
                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
