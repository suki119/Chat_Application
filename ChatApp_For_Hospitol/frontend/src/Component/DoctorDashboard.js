import React, { Component,useEffect } from 'react';
import Header from './Headder/Headder';
import DoctorSideBar from './SideBar/DoctorSideBar/DoctorSideBar';
import { SidebarData } from './SideBar/SideBarData';
import { Col, Row } from 'react-bootstrap';
import { useLocation,useNavigate,useHistory } from 'react-router-dom';




const DoctorDashboard = () => {
    const history = useHistory();

    useEffect(() => {

        const userId = sessionStorage.getItem("LogUserId");
        const userName = sessionStorage.getItem("LogUserName");

        if (userId === null || userId === "" || userName === null || userName === "") {
            history.push('/');
        }

    });

    return( 
        
        <><div className='main-wrapper'>
            <div className='app-header'>
                <Header />
               
            </div>
            <div className='app-body'>
                <div className='body-wrapper'>
                    <div className='app-sidebar'>
                        <DoctorSideBar />
                    </div>
                    <div className='app-dashboard'>
              
                        <Row>
                          
                               <button>My Appointment</button>
                             <button>Hello DOCTOR and welcome to the home</button>
                             <button>Patient Details</button>
                             <button>Doctor Details</button>
                             <button>Medical Records</button>
                        </Row>

                        <Row>
                             <button>Minor Staff Details</button>
                             <button>Inventory Details</button>
                             <button>Payroll Details</button>
                             <button>Assing Task</button>
                             <button>Chat</button>
                        </Row>

                    </div>
                </div>
            </div>
        </div></>

    )
}
export default DoctorDashboard;