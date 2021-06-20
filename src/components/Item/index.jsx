import React from 'react';
import Skeleton from 'react-loading-skeleton';

// utilities
import seperateNumberWithComma from 'utilities/seperateNumberWithComma';

// Styles
import './Item.scss';

export default ({ data, quantity, updateCart, currency, removeItem, isLoading }) => (
  <div className="item">
    <div className="item__description">
      <h6 className="item__title">{isLoading ? 'Refreshing..' : data.title}</h6>
      <p className="item__price">
        {currency} {isLoading ? 'loading...' : seperateNumberWithComma(data.price.toFixed(2))}
      </p>
      <p className="item__controls">
        <div className="item__counts">
          <span onClick={() => updateCart(data.id, 'DECREMENT')}>-</span>
          <span>{quantity}</span>
          <span onClick={() => updateCart(data.id, 'INCREMENT')}>+</span>
        </div>
      </p>
    </div>
    <div className="item__img-wrapper">
      {isLoading ? <Skeleton height={100} width={140} /> : <img src={data.image_url} alt="item" />}
    </div>
    <div className="item__close" onClick={() => removeItem(data.id)}>
      X
    </div>
  </div>
);
