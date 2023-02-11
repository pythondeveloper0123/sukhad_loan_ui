import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUser } from './DbServices';
import ASideBar from './ASideBar';
import MyNavBar from '../MyNavBar';

export default function CustomerHome() {

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
            
            <div className='nav nav-tabs container shadow p-3 mb-5 bg-body rounded border border-info'>
                <ASideBar id={id} />
                <div className="b-example-divider" style={{ "width": "4%" }}></div>
                <div className=" p-3 border border-info" style={{ "width": "75%" }}>

                    <div className='container'>
                        <div className='row'>
                            <h2 className='text-primary text-center'>Welcome To Sukhad Loan!!</h2>

                            <div className="overflow-scroll" style={{ "height": "500px" }}>
                                <div className="container-fluid text-center">
                                    <img src={user.photo} alt="" width="200" height="200" />
                                </div>


                                <div className='container-fluid'>
                                    <div className='row'>

                                        <h6 className='text-primary text-center'> Mr.{user.first_name} {user.last_name}</h6>
                                    </div>
                                </div>

                                <h2 className='text-secondary text-center'>We're delighted to have you as our customer. ...</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
