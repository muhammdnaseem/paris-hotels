import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/topbar.css';


const TopBar = () => {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-center justify-content-md-between">

        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-phone d-flex align-items-center"><span>Top 10 Hotels in paris</span></i>
          <i className="bi bi-clock d-flex align-items-center ms-4"><span></span></i>
        </div>

        <div className="languages d-none d-md-flex align-items-center">
          <ul>
            <li>En</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
