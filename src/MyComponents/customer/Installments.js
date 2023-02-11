import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUser } from './DbServices';
import ASideBar from './ASideBar';
import MyNavBar from '../MyNavBar';



export default function Installments() {

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

                    <div className='container-fluid'>
                        <div className='row'>
                            <h2 className='text-primary text-center'>Installment Details</h2>
                            <div className="overflow-scroll" style={{ "height": "500px" }}>

                                <div className='container-fluid'>
                                    <div className='row'>
                                        <table className="table table-light " style={{ "width": "100%" }} >
                                            <tbody>

                                                <>
                                                    {apps.map((app) => {
                                                        return (
                                                            <>
                                                                {app.Loans.Installments.map((installment) => {
                                                                    // if (installment.status == "")
                                                                    return (
                                                                        <>

                                                                            <tr >
                                                                                <th scope="col">Installment id</th>
                                                                                <td>{installment.id}</td>
                                                                            </tr>

                                                                            <tr>
                                                                                <th scope="col">Loan Remaining Amount</th>
                                                                                <td>{installment.remaining_amount}</td>
                                                                            </tr>

                                                                            <tr>
                                                                                <th scope="col">Installment Number</th>
                                                                                <td>{installment.installment_no}</td>
                                                                            </tr>

                                                                            <tr>
                                                                                <th scope="col">Monthly Installment Amount</th>
                                                                                <td> {installment.monthly_installment_amount}</td>
                                                                            </tr>

                                                                            <tr>
                                                                                <th scope="col">Installment Expected Date</th>
                                                                                <td> {installment.installment_expected_date}</td>
                                                                            </tr>

                                                                            <tr>
                                                                                <th scope="col">Installment Paid Date</th>
                                                                                <td> {installment.installment_paid_date}</td>
                                                                            </tr>

                                                                            <tr>
                                                                                <th scope="col">Penalty Amount</th>
                                                                                <td> {installment.penalty_amount}</td>
                                                                            </tr>

                                                                            <tr>
                                                                                <th scope="col">Installment Status</th>
                                                                                <td> {installment.status}</td>
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
