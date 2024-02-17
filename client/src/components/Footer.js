import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/footer.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


const Footer = () => {
  return (
    <React.Fragment>
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row before-footer">
          <div className="col-sm-3">
             <h1 className="logo me-auto me-lg-0">
             <a href="index.html">Paris Hotels</a></h1>
          </div>
          <div className="col-sm-9">
          <h2>
          Paris Hotel
          </h2>
          <h5>
        Address:  All Hotels in Paris


          </h5>
          </div>
          </div>
          <div className="row">
           

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Usefull Links</h4>
              <ul>
               <li><i className="bx bx-chevron-right"></i> <Nav.Link className="items" href="#PlatineHotel">Platine Hotel</Nav.Link></li>
    <li><i className="bx bx-chevron-right"></i> <Nav.Link href="#ShangriLaParis">Shangri La Paris</Nav.Link></li>
    <li><i className="bx bx-chevron-right"></i> <Nav.Link href="#MandarinOriental">Mandarin Oriental</Nav.Link></li>
              
             
              
              </ul>
            </div>
   {/*
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Explore</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Gift Cards</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Residences</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Best Rate Promise</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Media Centre</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Shop MO</a></li>
              </ul>
            </div>

         <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
              </form>
            </div>
           

             <div className="col-lg-3 col-md-6 footer-links">
              <h4>Support</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Contact Us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Fans of M.O.Login</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Modify/Cancel Reservation</a></li>
           
              </ul>
            </div>

             <div className="col-lg-3 col-md-6 footer-links">
              <h4>Connect</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Facebook</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Twitter</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Instagram</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Youtube</a></li>
                
              </ul>
            </div>
             */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
         2023 © Paris Hotel Group Limited
        | 
Privacy Policy
|
Ad & Cookie Policy
|
Legal Notices
        </div>
        <div className="credits">
       
        </div>
      </div>
    </footer>
    </React.Fragment>
  );
};

export default Footer;
