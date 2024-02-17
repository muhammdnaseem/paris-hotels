import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/titlecomponent.css';
import Button from '../components/Button';
import Nav from 'react-bootstrap/Nav';


const TitleComponent = ({buttonlink}) => {
  return (
    <React.Fragment>
     <div className="home-large-section">
        
<h1>&quot; I am a fan of traveling, exploring and being adventurous. I am a fan of Mandarin Oriental. &quot;</h1>
 <Nav.Link href={buttonlink}>
   <Button id="boot-table" className="orangered-colored-button mt-3" text="Become a Fan" iconClass="fa-print d-none" />
</Nav.Link>
</div>
    </React.Fragment>
  );
};

export default TitleComponent;
