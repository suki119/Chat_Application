import React, { Component } from 'react';
import Header from '../../../Component/Headder/Headder';
import Sidebar from '../../../Component/SideBar/Sidebar';
import { NavLink } from 'react-router-dom';
import { margin } from '@mui/system';


class AllPatient extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }



    render() {
        return (
            <div className='main-wrapper'>
                <div className='app-header'>
                    <Header />

                </div>
                <div className='app-body'>
                    <div className='body-wrapper'>
                        <div className='app-sidebar'>
                            <Sidebar />
                        </div>
                        <div className='app-content'>

                            <>


                                <div className="mt-5">
                                    <div className="container">
                                        <h3 style={{ marginTop: 60 }} > Patient Details</h3>
                                        <div className="add_btn mt-2 mb-2">
                                            <NavLink to="/AddPatient" style={{ backgroundColor: '#18778B', marginTop: 20, marginLeft: 780, color: '#ffffff' }} className="btn btn-primary" color='##18778B'> + Add Patient</NavLink>
                                        </div>

                                        <table class="table">
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <thead>
                                                <tr className="table-dark">
                                                    <th scope="col">PID</th>
                                                    <th scope="col">First Name</th>
                                                    <th scope="col">Last Name</th>
                                                    <th scope="col">DOB</th>
                                                    <th scope="col">Gender</th>
                                                    <th scope="col">NIC</th>
                                                    <th scope="col">Contact No</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>


                                                
                                                    <tr>
                                                        <th scope="row" >P001 </th>
                                                        <td>Nikini</td>
                                                        <td>Abeywickrama</td>
                                                        <td>2001/07/29</td>
                                                        <td>Female</td>
                                                        <td>200171101758</td>
                                                        <td>0701539773</td>

                                                        <td className="d-flex justify-content-between">
                                                            <NavLink to="/ReadPatient">   <button className="btn btn-success">read</button></NavLink>
                                                            <NavLink to="/EditPatient">   <button className="btn btn-primary">edit</button></NavLink>
                                                            <button className="btn btn-danger">delete</button>
                                                        </td>
                                                    </tr>
                                                

                                                <>
                                                    <tr>
                                                        <th scope="row" >P001 </th>
                                                        <td>Nikini</td>
                                                        <td>Abeywickrama</td>
                                                        <td>2001/07/29</td>
                                                        <td>Female</td>
                                                        <td>200171101758</td>
                                                        <td>0701539773</td>

                                                        <td className="d-flex justify-content-between">
                                                            <NavLink to="/ReadPatient">   <button className="btn btn-success">read</button></NavLink>
                                                            <NavLink to="/EditPatient">   <button className="btn btn-primary">edit</button></NavLink>
                                                            <button className="btn btn-danger">delete</button>
                                                        </td>
                                                    </tr>
                                                </>

                                            </tbody>
                                        </table>


                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AllPatient;











