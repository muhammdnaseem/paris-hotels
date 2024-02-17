import React, { useState } from 'react';
import '../css/review.css'; // Import your CSS file for styling

const ReviewSection = ({ reviews, average }) => {
  return (
      <React.Fragment>
    <div className="review-container">
      <span className="heading">User Reviews</span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>
<p>{average} average based on {reviews} reviews.</p>
<hr style={{border: "3px solid #f1f1f1"}} />
    </div>
    </React.Fragment>
  );
};

export default ReviewSection;
