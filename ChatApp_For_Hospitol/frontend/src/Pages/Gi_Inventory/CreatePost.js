import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Component/Headder/Headder';
import Sidebar from '../../Component/SideBar/Sidebar';


class CreatePost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Name: "",
            company_Name: "",
            Address: "",
            Qty: "",
            price: "",
            MFG: "",
            EXP: ""
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { Name, company_Name, Address, Qty, price, MFG, EXP } = this.state;
        const data = {
            Name: Name,
            company_Name: company_Name,
            Address: Address,
            Qty: Qty,
            price: price,
            MFG: MFG,
            EXP: EXP
        }
        console.log(data);

        const url = `http://localhost:8000/product/save`;
        axios.post(url, data).then((res) => {
            if (res.data.success) {
                alert("Add new product successfully")
                this.setState({
                    Name: "",
                    company_Name: "",
                    Address: "",
                    Qty: "",
                    price: "",
                    MFG: "",
                    EXP: ""
                }

                )
            }
        })


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
                        <div className='col-md-8 mt-4 mx-auto'>
                            <div className='my-div'>
                                <h1 className='h3 mb-3 font-weight-normal'>Create new post</h1>

                                <form className='needs-alidation' noValidate>
                                    <div className='form-group' style={{ marginBottom: '5px' }}>
                                        <label style={{ marginBottom: '5px' }}> Name :</label>
                                        <input type='text'
                                            className='form-control'
                                            name="Name"
                                            placeholder='Enter the Name'
                                            value={this.state.Name}
                                            required 
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='form-group' style={{ marginBottom: '5px' }}>
                                        <label style={{ marginBottom: '5px' }}> Company Name :</label>
                                        <input type='text'
                                            className='form-control'
                                            name="company_Name"
                                            placeholder='Enter the company Name'
                                            value={this.state.company_Name}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='form-group' style={{ marginBottom: '5px' }}>
                                        <label style={{ marginBottom: '5px' }}> Address :</label>
                                        <input type='text'
                                            className='form-control'
                                            name="Address"
                                            placeholder='Enter the Address'
                                            value={this.state.Address}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='form-group' style={{ marginBottom: '5px' }}>
                                        <label style={{ marginBottom: '5px' }}> Qty :</label>
                                        <input type='number'
                                            className='form-control'
                                            name="Qty"
                                            placeholder='Enter the Qty'
                                            value={this.state.Qty}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='form-group' style={{ marginBottom: '5px' }}>
                                        <label style={{ marginBottom: '5px' }}> price (Rs.):</label>
                                        <input type='number'
                                            className='form-control'
                                            name="price"
                                            placeholder='Enter the price'
                                            value={this.state.price}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='form-group row'>
                                        <div className='col-6'>
                                            <label style={{ marginBottom: '5px' }}> MFG [D/M/Y]</label>
                                            <input type='date'
                                                className='form-control'
                                                name="MFG"
                                                placeholder='Enter the MFG'
                                                value={this.state.MFG}
                                                onChange={this.handleInputChange} />
                                        </div>
                                        <div className='col-6'>
                                            <label style={{ marginBottom: '5px' }}> EXP [D/M/Y]</label>
                                            <input type='date'
                                                className='form-control'
                                                name="EXP"
                                                placeholder='Enter the EXP'
                                                value={this.state.EXP}
                                                onChange={this.handleInputChange} />
                                        </div>
                                    </div>

                                    <button className='btn btn-success' type='submit' style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                        <i className='far fa-check-square'></i>
                                        &nbsp;Save
                                    </button>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePost;