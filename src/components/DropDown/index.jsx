import React from 'react';

// Styles
import './DropDown.scss';

// components
import { ReactComponent as Down } from 'assets/images/down.svg';

export default ({ options }) => (
  <div className="dropdown">
    <select name="" className="dropdown__select">
      {options.map((option) => (
        <option key={option.text} selected={option.selected} value={option.value} disabled={option.placeholder}>
          {option.text}
        </option>
      ))}
    </select>
    <div className="dropdown__arrow">
      <Down />
    </div>
  </div>
);
