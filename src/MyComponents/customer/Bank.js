import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUser } from './DbServices';
import ASideBar from './ASideBar';
import MyNavBar from '../MyNavBar';





export default function Bank() {

  const { id } = useParams('id')
  const [user, setUser] = useState({})

  useEffect(() => {
    getBankbyUserId();
    // eslint-disable-next-line
  }, [])


  const getBankbyUserId = async () => {
    const getuser = await getUser(id)
    console.log(getuser.data)
    setUser(getuser.data.Banks)
  }

  return (
    <>
     
      <div className='nav nav-tabs container shadow p-3 mb-5 bg-body rounded border border-info'>
        <ASideBar id={id} />
        <div className="b-example-divider" style={{ "width": "4%" }}></div>
        <div className=" p-3 border border-info" style={{ "width": "75%" }}>
          <div className='container'>
            <div className='row'>
              <h2 className='text-primary text-center'>Bank Details</h2>
              <div className="overflow-scroll" style={{ "height": "500px" }}>
                <table className="table table-light" style={{ "width": "100%" }}>

                  <tbody>
                    <>
                      <tr>
                        <th scope="col">ID</th>
                        <td>{user.id}</td>
                      </tr>
                      <tr>
                        <th scope="col">Bank Name</th>
                        <td>{user.bank_name}</td>
                      </tr>
                      <tr>
                        <th scope="col">Current Account Number</th>
                        <td>{user.current_account_no}</td>
                      </tr>
                      <tr>
                        <th scope="col">Ifsc Code</th>
                        <td>{user.ifsc_code}</td>
                      </tr>
                      <tr>
                        <th scope="col">Passbook Copy</th>
                        <td>
                          <a href={user.passbook_copy} target="_blank" rel="noreferrer">
                            Passbook Copy
                          </a>
                        </td>
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

