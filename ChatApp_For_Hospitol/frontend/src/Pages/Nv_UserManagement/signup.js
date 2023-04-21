
import axios from "axios";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import './Nv_signup.css';

function Signup() {

  const history = useHistory();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [nic, setNic] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [compId, setcompId] = useState("");


  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/admin/signup", {
        fname, lname, email, mobile,nic,password, confirmPassword,compId
      })

        .then(res => {
          if (res.data == "exist") {
            alert("user already exists")
          } else if (res.data == "notexist") {
            alert("added new user")
            history.push("/AdminDashboard", { state: { id: email } })
          }
        })
        .catch(e => {
          alert("wrong details")
          console.log(e);
        })

    } catch (e) {
      console.log(e);
    }
   
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={submit}  >
          <h3>Sign Up</h3>
          <div>
            Register As Admin
          </div>
          <div className="mb-3">
            <label>Company ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Company ID" 
              onChange={(e) => setcompId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Mobile</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter mobile number"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>NIC</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter NIC"
              onChange={(e) => setNic(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Confrim Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password again"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={submit}>
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup