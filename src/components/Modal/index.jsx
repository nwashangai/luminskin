import React from 'react';

// Styles
import './Modal.scss';

export default ({ children, classes = '', show }) => (
  <div className={`modal ${classes} ${!show ? 'hide' : ''}`}>
    <div className="modal__blur" />
    {children}
  </div>
);
