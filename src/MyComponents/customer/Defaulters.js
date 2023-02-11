import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUser } from './DbServices';
import ASideBar from './ASideBar';
import MyNavBar from '../MyNavBar';

export default function Defaulters() {

    const { id } = useParams('id')
    const [user, setUser] = useState({})

    useEffect(() => {
        getDefaulterbyUserId();
        // eslint-disable-next-line
    }, [])


    const getDefaulterbyUserId = async () => {
        const getuser = await getUser(id)
        console.log(getuser.data)
        setUser(getuser.data.Defaulters)
    }

    return (
        <>
            
            <div className='nav nav-tabs container shadow p-3 mb-5 bg-body rounded border border-info'>
                <ASideBar id={id} />
                <div className="b-example-divider" style={{ "width": "4%" }}></div>
                <div className=" p-3 border border-info" style={{ "width": "75%" }}>
                    <div className='container'>
                        <div className='row'>
                            <h2 className='text-primary text-center'>Emi and Default Amount Details</h2>
                            <div className="overflow-scroll" style={{ "height": "500px" }}>
                                <table className="table table-light" style={{ "width": "100%" }}>

                                    <tbody className='text-center'>
                                        <>

                                            <tr>
                                                <th scope="col">Defaulted Emi Amount</th>
                                                <td>{user.default_amount}</td>
                                            </tr>

                                            <tr>
                                                <th scope="col">Emi Amount Pending Since </th>
                                                <td>{user.pending_since_date}</td>
                                            </tr>
                                        </>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
