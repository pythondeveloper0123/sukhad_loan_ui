import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUser } from './DbServices';
import ASideBar from './ASideBar';
import MyNavBar from '../MyNavBar';


export default function Vendor() {
    const { id } = useParams('id')
    const [apps, setApp] = useState([]);

    useEffect(() => {
        getVendorbyUserId();
        // eslint-disable-next-line
    }, [])


    const getVendorbyUserId = async () => {
        const getuser = await getUser(id)
        console.log(getuser.data)
        setApp(getuser.data.Applications)
    }
    return (
        <>
            
            <div className='nav nav-tabs container shadow p-3 mb-5 bg-body rounded border border-info'>
                <ASideBar id={id} />
                <div className="b-example-divider" style={{ "width": "4%" }}></div>
                <div className=" p-3 border border-info" style={{ "width": "75%" }}>

                    <div className='container'>
                        <div className='row'>
                            <h2 className='text-primary text-center'>Vendor Details</h2>

                            <div className="overflow-scroll" style={{ "height": "500px" }}>
                                <div className='container-fluid'>
                                    <div className='row text-center'>

                                        <table className="table table-light" style={{ "width": "100%" }}>
                                            <tbody >
                                                <>

                                                    {apps.map(app => {
                                                        return (
                                                            <>
                                                                {app.Vendors.map((vendor) => {
                                                                    // if (installment.status == "")

                                                                    return (
                                                                        <>

                                                                            <tr >
                                                                                <th scope="col">Vendor id</th>
                                                                                <td>{vendor.id}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="col">Guarantor Name</th>
                                                                                <td>{vendor.name}</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="col">Vendor Type</th>
                                                                                <td>{vendor.vendor_type}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="col">Email</th>
                                                                                <td>{vendor.email}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="col">Address</th>
                                                                                <td>{vendor.address}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="col">City</th>
                                                                                <td>{vendor.city}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="col">State</th>
                                                                                <td>{vendor.state}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="col">Country</th>
                                                                                <td>{vendor.country}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="col">Pin Code</th>
                                                                                <td>{vendor.pin_code}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="col">Mobile</th>
                                                                                <td>{vendor.mobile}</td>
                                                                            </tr>

                                                                            <tr>
                                                                                <th scope="col">Bank Name</th>
                                                                                <td>{vendor.bank_name}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="col">Ifsc Code</th>
                                                                                <td>{vendor.ifsc_code}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="col">Current Account Number</th>
                                                                                <td>{vendor.current_account_no}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="col">Passbook Copy</th>
                                                                                <td><a href={vendor.passbook_copy} target="_blank" rel="noreferrer">Passbook Copy</a></td>
                                                                            </tr>


                                                                            <br />
                                                                            <br />
                                                                            <hr />
                                                                            <hr />

                                                                        </>
                                                                    )
                                                                }
                                                                )
                                                                }
                                                                {/* </tr> */}
                                                                {/* </div> */}

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
