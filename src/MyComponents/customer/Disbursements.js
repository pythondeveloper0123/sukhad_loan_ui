import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUser } from './DbServices';
import ASideBar from './ASideBar';
import MyNavBar from '../MyNavBar';

export default function Disbursements() {


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
                            <h2 className='text-primary text-center'>Loan Disbursement Details</h2>
                            <div className="overflow-scroll" style={{ "height": "500px" }}>

                                <div className='container-fluid'>
                                    <div className='row'>
                                        <table className="table table-light" style={{ "width": "100%" }}>

                                            <tbody>
                                                <>
                                                    {apps.map(application => {
                                                        return (
                                                            <>

                                                                <tr>
                                                                    <th scope="col">Insurance Policy Document</th>
                                                                    <td>
                                                                        <a href={application.Loans.Disbursements.insurance_doc} target="_blank" rel="noreferrer">
                                                                            Download Loan Insurance Policy
                                                                        </a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <th scope="col">Loan Payment Mode</th>
                                                                    <td>{application.Loans.Disbursements.payment_mode}</td>
                                                                </tr>

                                                                <tr>
                                                                    <th scope="col">Net Disbursed Amount</th>
                                                                    <td>{application.Loans.Disbursements.net_disbursed_amount}</td>
                                                                </tr>

                                                                <tr>
                                                                    <th scope="col">Disbursement Account Number</th>
                                                                    <td>{application.Loans.Disbursements.disbursed_to_account_no}</td>
                                                                </tr>

                                                                <tr>
                                                                    <th scope="col">Loan Disbursement Receipt</th>
                                                                    <td>
                                                                        <a href={application.Loans.Disbursements.receipt_doc} target="_blank" rel="noreferrer">
                                                                            Download Loan Disbursement Receipt
                                                                        </a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <th scope="col">Loan Disbursement Status</th>
                                                                    <td>{application.Loans.Disbursements.status}</td>
                                                                </tr>

                                                                <tr>
                                                                    <th scope="col">Loan Disbursement Date and Time</th>
                                                                    <td>{application.Loans.Disbursements.response_timestamp}</td>
                                                                </tr>

                                                                <br /><br />
                                                                <hr /><hr />
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
