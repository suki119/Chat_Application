import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Component/Headder/Headder';
import Sidebar from '../../Component/SideBar/Sidebar';

export default class PostDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        const url = `http://localhost:8000/product/${id}`;
        axios.get(url).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post
                });
                console.log(this.state.post);
            }
        });
    }

    render() {
        const { Name, company_Name, Address, Qty, price, MFG, EXP } = this.state.post;

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
                        <div className='my-div'>
                            <div style={{ marginTop: '20px' }}>
                                <h4>{Name}<t> <a className="btn btn-danger" href="/product" style={{marginLeft:900}} >
                                        &nbsp;Back
                                    </a></t>
                                    </h4>
                                <hr />


                                <dl className='row'>
                                    <dt className='col-sm-3'>Company Name :</dt>
                                    <dd className='col-sm-9'>
                                        {company_Name}

                                    </dd>



                                    <dt className='col-sm-3'>Address    :</dt>
                                    <dd className='col-sm-9'>{Address}</dd>

                                    <dt className='col-sm-3'>Qty :</dt>
                                    <dd className='col-sm-9'>{Qty}</dd>

                                    <dt className='col-sm-3'>price :</dt>
                                    <dd className='col-sm-9'>{price}</dd>

                                    <dt className='col-sm-3'>MFG :</dt>
                                    <dd className='col-sm-9'>{MFG}</dd>

                                    <dt className='col-sm-3'>EXP :</dt>
                                    <dd className='col-sm-9'>{EXP}</dd>

                                </dl>
                            </div>

                        </div>


                    </div>
                </div>
            </div>


        )
    }
}