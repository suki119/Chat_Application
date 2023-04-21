import React, { Component } from 'react';
import Header from '../../Component/Headder/Headder';
import Sidebar from '../../Component/SideBar/Sidebar';
import { Col, Row } from 'react-bootstrap';
import './Appointment.css';
import { NavLink } from 'react-router-dom';

class AppointmentDashboard extends Component {

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
                        <div className='Ksapp-dashboard'>

                        <Row>
                                 
                               <button>Doctor Details </button>
                             <button>Shedul your Appointment</button>
                             <button>Manage your Appointment</button>
                             <button>Calender</button>
                             
                        </Row>

                        

                       </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default AppointmentDashboard;