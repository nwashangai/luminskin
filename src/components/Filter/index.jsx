import React from 'react';

// Styles
import './Filter.scss';

// components
import DropDown from 'components/DropDown';

export default ({ filterOptions }) => (
  <div className="filter">
    <div className="filter__container">
      <div className="filter__desc">
        <h1 className="filter__selected-option">All Products</h1>
        <p>A 360° look at Lumin</p>
      </div>
      <div className="filter__select-wrapper">
        <DropDown options={filterOptions} />
      </div>
    </div>
  </div>
);
