import React, { Component } from 'react';
import Header from './Headder/Headder';
import Sidebar from './SideBar/Sidebar';
import { SidebarData } from './SideBar/SideBarData';
import { Col, Row } from 'react-bootstrap';
import { useLocation,useNavigate } from 'react-router-dom';




const PatientsDashboard = () => {

    return( 
        
        <><div className='main-wrapper'>
            <div className='app-header'>
                <Header />
               
            </div>
            <div className='app-body'>
                <div className='body-wrapper'>
                    <div className='app-sidebar'>
                        <Sidebar />
                    </div>
                    <div className='app-dashboard'>
                        <Row>
                        
                               <button>My Appointment</button>
                             <button>Hello PATIENT and welcome to the home</button>
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
export default PatientsDashboard;