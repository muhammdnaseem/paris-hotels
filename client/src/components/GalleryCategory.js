import React, { useState, useEffect } from 'react';
import '../css/gallerycategory.css';
import { SecondHeading } from './Headings';
import Button from '../components/Button';

const GalleryCategory = ({ data }) => {
  const { sliderImageUrlShangriLaParis, sliderImageUrlpaletinehotel, sliderImageUrlMandarinOriental } = data;

  const allImages = [
    ...sliderImageUrlpaletinehotel,
    ...sliderImageUrlShangriLaParis,
    ...sliderImageUrlMandarinOriental,
  ];
  
  const [filter, setFilter] = useState('all');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(allImages.map((image) => image.category))];
    setCategories(uniqueCategories);
  }, [allImages]);

  const handleFilterClick = (value) => {
    setFilter(value);
  };

  return (
    <React.Fragment>
      <div className="row gallery-category">
        <div align="left">
          <button className="btn btn-default filter-button" onClick={() => handleFilterClick('all')}>
            View All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className="btn btn-default filter-button"
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <br />
        {allImages.map((image, index) => (
          <div
            className={`gallery_product filter ${image.category}`}
            key={index}
            style={{ display: filter === 'all' || filter === image.category ? 'block' : 'none' }}
          >
            <img src={image.url} className="img-responsive gallery-image" alt={image.title} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default GalleryCategory;
