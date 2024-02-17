import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/login.css';
import Input from './components/Input';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import Axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");



  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
  email: email,
  password: password,
})
  .then((response) => {
    // Handle success
    console.log(response.data);
   alert(response.data[0].firstname+" You have logged in Successfully...");
  })
  .catch((error) => {
    // Handle error
    console.error('Axios error:', error);
  });

  }



  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
           <h3 className="title text-center">LOGIN</h3>
          <p className="title-content">Enter email and password to logged in</p>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              {/* Email input */}
           {/* Email input */}
          <Input
          className="form-control form-control-lg"
            type="email"
            id="email"
            placeholder="Enter a valid email address"
            label="Email address"
             onChange={(e) => {setEmail(e.target.value)}}
          />

          {/* Password input */}
          <Input
          className="form-control form-control-lg"
            type="password"
            id="password"
            placeholder="Enter password"
            label="Password"
             onChange={(e) => {setPassword(e.target.value)}}
          />

            <div className="d-flex justify-content-between align-items-center">
              {/* Checkbox */}
              <div className="form-check mb-0">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label className="form-check-label" htmlFor="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" className="text-body">
                Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  onClick={login}
                >
                  Login
                </button>
                <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?  <Link to="/Register" className="link-danger">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        {/* Copyright */}
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2023. All rights reserved.
        </div>
        {/* Right */}
        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        {/* Right */}
      </div>
    </section>
  );
};

export default Login;
