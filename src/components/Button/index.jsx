// react libraries
import React from 'react';

// styles
import './Button.scss';

export default ({ name, classes, ...rest }) => (
  <button type="button" className={`button ${classes}`} {...rest}>
    {name}
  </button>
);
