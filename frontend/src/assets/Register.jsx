import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8800/register',values)
    .then(res => {
      if(res.data.Status === "Success"){
        navigate("/login")
      }else{
        alert("Error")
      }
    })
    .catch(err => console.log(err));
    console.log("Register clicked")

  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <form onSubmit={handleSubmit}>
            <h1>Create Account </h1>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="form-control rounded-0"
                onChange={e => setValues({...values , name: e.target.value})}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="form-control rounded-0"
                onChange={e => setValues({...values , email: e.target.value})}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="form-control rounded-0"
                onChange={e => setValues({...values , password: e.target.value})}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Sign up
            </button>
            <p>You are agree to our terms and conditions</p>
            <Link
              to={"/login"}
              className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
