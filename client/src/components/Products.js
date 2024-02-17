import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/products.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Products = ({
    imagesource,
    description,
    producttitle,
    productid
}) => {
  return (
    <React.Fragment>
     <div>
     <div className="col-sm-4 img">
     <img src={imagesource} /> 
     </div>
    <div className="col-sm-4 product-description">
     <h2>
     {producttitle}
     </h2>
     <p>
     {description}
     </p>
     <button id={productid}>
     Book
     </button>
     </div>
     </div>
    </React.Fragment>
  );
};

export default Products;
