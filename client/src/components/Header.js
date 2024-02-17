import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/header1.css";
import React from 'react';


function Header() {
  return (
    <React.Fragment>
   
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />


<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

    <Navbar expand="lg" className="bg-transparent mt-5" class="header" id="header">

      <Container>
        <Navbar.Brand href="#">PARIS HOTELS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="items" href="#PlatineHotel">Platine Hotel</Nav.Link>
             <Nav.Link href="#ShangriLaParis">Shangri La Paris</Nav.Link>
              <Nav.Link href="#MandarinOriental">Mandarin Oriental</Nav.Link>
              

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </React.Fragment>
  );
}

export default Header;