import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homeproduct.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const HomeProducts = ({
    imgsource,
    productclass,
    producttitle,
    productdescription,
    productlink
}) => {
  return (
    <React.Fragment>
     <img src={imgsource} 
     />
     <div className="content">
     <h2> 
     {producttitle}
     </h2>
     <p>
     {productdescription}
     </p>
     <Link className="link-style">
     {productlink}  <i class="fa fa-chevron-right"></i>
     </Link>
       
     </div>
    </React.Fragment>
  );
};

export default HomeProducts;
