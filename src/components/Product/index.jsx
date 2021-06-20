import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// utilities
import seperateNumberWithComma from 'utilities/seperateNumberWithComma';

// components
import Button from '../Button';

// Styles
import './Product.scss';

export default ({ product, currency, updateCart }) => (
  <div className="product">
    <div className="product__body">
      <LazyLoadImage
        alt="thumbnail"
        className="product__image"
        width="auto"
        effect="blur"
        height={170}
        src={product.image_url}
      />
      <div className="product__name">{product.title}</div>
      <div className="product__price">
        {currency}&nbsp;{seperateNumberWithComma(product.price.toFixed(2))}
      </div>
      <Button onClick={() => updateCart(product.id, 'INCREMENT')} name="Add to Cart" classes="" />
    </div>
  </div>
);
