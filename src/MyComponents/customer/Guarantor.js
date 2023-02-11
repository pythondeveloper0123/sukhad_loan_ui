import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUser } from './DbServices';
import ASideBar from './ASideBar';
import MyNavBar from '../MyNavBar';


export default function Bank() {

    const { id } = useParams('id')
    const [apps, setApp] = useState([]);


    useEffect(() => {
        getLoanbyUserId();
        // eslint-disable-next-line
    }, [])


    const getLoanbyUserId = async () => {
        const getuser = await getUser(id)
        console.log(getuser.data)
        setApp(getuser.data.Applications);

    }
    return (
        <>
            

            <div className='nav nav-tabs container shadow p-3 mb-5 bg-body rounded border border-info'>
                <ASideBar id={id} />
                <div className="b-example-divider" style={{ "width": "4%" }}></div>
                <div className=" p-3 border border-info" style={{ "width": "75%" }}>

                    <div className='container'>
                        <div className='row'>
                            <h2 className='text-primary text-center'>Guarantor Details</h2>

                            <div className="overflow-scroll" style={{ "height": "500px" }}>
                                <div className='container-fluid'>
                                    <div className='row text-center'>

                                        <table className="table table-light" style={{ "width": "100%" }}>
                                            <tbody >
                                                <>
                                                    {apps.map(app => {
                                                        return (
                                                            <>
                                                                <tr>
                                                                    <th scope="col">Guarantor Image</th>
                                                                    <td><img src={app.Guarantors.photo} alt="" width="200" height="200" /></td>
                                                                </tr>

                                                                <tr>
                                                                    <th scope="col">Guarantor Registration ID</th>
                                                                    <td>{app.Guarantors.id}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Relationship With Customer</th>
                                                                    <td>{app.Guarantors.relation_with_customer}</td>
                                                                </tr>

                                                                <tr>
                                                                    <th scope="col">Guarantor Name</th>
                                                                    <td>{app.Guarantors.name}</td>

                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Date Of Birth</th>
                                                                    <td>{app.Guarantors.dob}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Gender</th>
                                                                    <td>{app.Guarantors.gender}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Email</th>
                                                                    <td>{app.Guarantors.email}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Address</th>
                                                                    <td>{app.Guarantors.address}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">City</th>
                                                                    <td>{app.Guarantors.city}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">State</th>
                                                                    <td>{app.Guarantors.state}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Country</th>
                                                                    <td>{app.Guarantors.country}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Pin Code</th>
                                                                    <td>{app.Guarantors.pin_code}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Mobile</th>
                                                                    <td>{app.Guarantors.mobile}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Profession</th>
                                                                    <td>{app.Guarantors.profession}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Income Certificate</th>
                                                                    <td>
                                                                        <a href={app.Guarantors.income_certificate} target="_blank" rel="noreferrer">
                                                                            Guarantor Income Certificate
                                                                        </a>
                                                                    </td>

                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Bank Name</th>
                                                                    <td>{app.Guarantors.bank_name}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Ifsc Code</th>
                                                                    <td>{app.Guarantors.ifsc_code}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Current Account Number</th>
                                                                    <td>{app.Guarantors.current_account_no}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Passbook Copy</th>
                                                                    <td><a href={app.Guarantors.passbook_copy} target="_blank" rel="noreferrer">Passbook Copy</a></td>
                                                                </tr>



                                                                <br />
                                                                <br />


                                                            </>
                                                        )
                                                    }
                                                    )
                                                    }
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