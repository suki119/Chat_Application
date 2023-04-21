import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Component/Headder/Headder';
import Sidebar from '../../Component/SideBar/Sidebar';

export default class ViewMedical extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
       
        const url = `http://localhost:8000/medical/${id}`;
        axios.get(url).then((res) => {
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });
    }

    render() {
        const { Fname, Lname, PatinetId, BirthDate, age, gender, contact, medication, history,description, discount,PastTreatName ,PTreatDate , PDoctorName, Result, NewTreatName, NTreatDate, NDoctorName,diagnosis } = this.state.post;

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
                        <div class="view-container">
                        <div style={{ marginTop: '70px' , marginLeft: '150px' }}>
                            <h4>{Fname} {Lname}</h4>
                            <hr />


                            <dl className='row'>
                                <dt className='col-sm-3'>Patient Id :</dt>
                                <dd className='col-sm-9'>
                                    {PatinetId}
                                </dd>



                                <dt className='col-sm-3'>Patient Bith Date :</dt>
                                <dd className='col-sm-9'>{BirthDate}</dd>

                                <dt className='col-sm-3'>Patient Age :</dt>
                                <dd className='col-sm-9'>{age}</dd>

                                <dt className='col-sm-3'>Patient Gender :</dt>
                                <dd className='col-sm-9'>{gender}</dd>

                                <dt className='col-sm-3'>Patient Contact Number :</dt>
                                <dd className='col-sm-9'>{contact}</dd>

                                <dt className='col-sm-3'>Medication of Patient :</dt>
                                <dd className='col-sm-9'>{medication}</dd>

                                <dt className='col-sm-3'>History of Patient :</dt>
                                <dd className='col-sm-9'>{history}</dd>

                                <dt className='col-sm-3'>Description of Patient :</dt>
                                <dd className='col-sm-9'>{description}</dd>

                                <dt className='col-sm-3'>Discount of Patient :</dt>
                                <dd className='col-sm-9'>{discount}</dd>

                                <dt className='col-sm-3'>Past treatment Name of Patient :</dt>
                                <dd className='col-sm-9'>{PastTreatName}</dd>

                                <dt className='col-sm-3'>Past Treatment Date of Patient :</dt>
                                <dd className='col-sm-9'>{PTreatDate}</dd>

                                <dt className='col-sm-3'>Past Doctor Name of Patient :</dt>
                                <dd className='col-sm-9'>{PDoctorName}</dd>

                                <dt className='col-sm-3'>Diagnosis of Patient :</dt>
                                <dd className='col-sm-9'>{diagnosis}</dd>

                            </dl>

                        </div>

                        </div>
                    </div>
                </div>
            </div>


        )
    }
}