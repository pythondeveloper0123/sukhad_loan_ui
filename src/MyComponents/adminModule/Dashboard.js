import React from 'react';
// import { NavLink } from 'react-router-dom';


const Dashboard = () => {
    return (
        <>
            {/* <div style={{ width: '50%' }}> */}
            <div>
                <table class="table table-hover table-">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>abc</td>
                            <td>pqr</td>
                            <td>stu</td>
                            <td>mno</td>
                            <td><i class="bi bi-pencil-square text-info"></i></td>
                            <td><i class="bi bi-trash text-danger"></i></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            
        </>
    );
};

export default Dashboard;