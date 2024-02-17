import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/register.css';
import Input from './components/Input';
import { Link } from 'react-router-dom';
import Axios from 'axios';


function Register(){
 
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

const register = async (e) => {
  e.preventDefault();
alert(`First Name: ${fname}\nLast Name: ${lname}\nEmail: ${email}\nPassword: ${password}`);
  try {
    const response = await Axios.post("http://localhost:3001/register", {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    });

    

    if (response.data.message) {
      setRegisterStatus(response.data.message);
    } else {
      setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
    }
  } catch (error) {
    console.error('Error during registration:', error.message);
  }
}





  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
      
        <div className="row d-flex justify-content-center align-items-center h-100">
        
          <div className="col-md-9 col-lg-6 col-xl-5">
          <h3 className="title text-center">REGISTRATION</h3>
          <p className="title-content">Fill the registration form and click Register button</p>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              


            <Input type="text" id="fname" className="form-control form-control-lg" placeholder="Enter First Name" label="First Name" 
             onChange={(e) => {setFname(e.target.value)}} />

            
            <Input type="text" id="lname" className="form-control form-control-lg" placeholder="Enter Last Name" label="Last Name"
             onChange={(e) => {setLname(e.target.value)}} />

           
            <Input type="email" id="email" className="form-control form-control-lg" placeholder="Enter a valid email address" label="Email address"
             onChange={(e) => {setEmail(e.target.value)}} />
           
            <Input type="password" id="password" className="form-control form-control-lg" placeholder="Enter password" label="Password"
             onChange={(e) => {setPassword(e.target.value)}} />

            <div className="d-flex justify-content-between align-items-center">
            
            
           
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  onClick={register}
                >
                  Regiter
                </button>
                <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account? <Link to="/login" className="link-danger">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="privacy d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2023. All rights reserved.
        </div>
        
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
        
      </div>
    </section>
  );
};

export default Register;
