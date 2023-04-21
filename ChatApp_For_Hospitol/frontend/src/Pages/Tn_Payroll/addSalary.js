import React, { Component } from 'react';
import Header from '../../Component/Headder/Headder';
import Sidebar from '../../Component/SideBar/Sidebar';
import './addSalary.css'; 

class addSalary extends Component {

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

                            <h1>Hiiii</h1>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default addSalary;