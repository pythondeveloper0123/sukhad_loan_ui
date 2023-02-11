import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUser } from './DbServices';
import ASideBar from './ASideBar';
import MyNavBar from '../MyNavBar';



export default function Bank() {

    const { id } = useParams('id')
    const [apps, setApp] = useState([]);


    useEffect(() => {
        getApplicationbyUserId();
        // eslint-disable-next-line
    }, [])


    const getApplicationbyUserId = async () => {
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
                            <h2 className='text-primary text-center'>Application Details</h2>

                            <div className="overflow-scroll" style={{ "height": "500px" }}>
                                <div className='container-fluid'>
                                    <div className='row'>

                                        <table className="table table-light" style={{ "width": "100%" }}>

                                            <tbody>
                                                <>
                                                    {apps.map(application => {
                                                        return (
                                                            <>
                                                                {/* <div className='container-fluid' style={{ "width": "100%" }}> */}
                                                                <tr>
                                                                    <th scope="col">Application No</th>
                                                                    <td>{application.id}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Aadhaar Number</th>
                                                                    <td>{application.aadhaar_no}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Pan Number</th>
                                                                    <td>{application.pan_no}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Type of Employement</th>
                                                                    <td>{application.type_of_employment}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Business Title</th>
                                                                    <td>{application.business_title}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Business Type</th>
                                                                    <td>{application.business_type}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Business Address</th>
                                                                    <td>{application.business_address}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">GST Registration Number</th>
                                                                    <td>{application.gst_registration_no}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Business License Number</th>
                                                                    <td>{application.business_license_no}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Expected Average Annual Turnoverr</th>
                                                                    <td>{application.expected_average_annual_turnover}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Years In Current Business</th>
                                                                    <td>{application.years_in_current_business}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Collateral</th>
                                                                    <td>{application.collateral}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Status</th>
                                                                    <td>{application.status}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Application Generation Time</th>
                                                                    <td>{application.application_timestamp}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="col">Remark</th>
                                                                    <td>{application.remark}</td>
                                                                </tr>
                                                                <br />
                                                                <br />
                                                                <hr /><hr />
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
