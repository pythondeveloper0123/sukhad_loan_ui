import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUser } from './DbServices';
import ASideBar from './ASideBar';
import MyNavBar from '../MyNavBar';

export default function Loan() {

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
                            <h2 className='text-primary text-center'>Loan Details</h2>
                            <div className="overflow-scroll" style={{ "height": "500px" }}>
                                <table className="table table-light" style={{ "width": "100%" }}>

                                    <tbody >
                                        <>
                                            {apps.map(app => {
                                                // if (app.status == "")
                                                return (
                                                    <>
                                                        <tr>
                                                            <th scope="col">ID</th>
                                                            <td>{app.Loans.id}</td>
                                                        </tr>

                                                        <tr>
                                                            <th scope="col">Loan Principal Amount</th>
                                                            <td>{app.Loans.loan_principal_amount}</td>

                                                        </tr>
                                                        <tr>
                                                            <th scope="col">Loan Tenure</th>
                                                            <td>{app.Loans.loan_tenure}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="col">Interest Rate</th>
                                                            <td>{app.Loans.interest_rate}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="col">Total Amount And Processing Fees</th>
                                                            <td>{app.Loans.total_amount_and_processing_fees}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="col">Installment</th>
                                                            <td>{app.Loans.installment}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="col">Maturity Date</th>
                                                            <td>{app.Loans.maturity_date}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="col">Sanction Letter</th>
                                                            <td><a href={app.Loans.sanction_letter} target="_blank" rel="noreferrer">Sanction Letter</a></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="col">Status</th>
                                                            <td>{app.Loans.status}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="col">Response Timestamp</th>
                                                            <td>{app.Loans.response_timestamp}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="col">Remark</th>
                                                            <td>{app.Loans.remark}</td>
                                                        </tr>
                                                        <br />
                                                        <br />
                                                        <hr />

                                                    </>

                                                )

                                            })
                                            }
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
