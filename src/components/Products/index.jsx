import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

// Styles
import './Products.scss';

// components
import Product from 'components/Product';

const renderSkeleton = (windowWidth) => {
  const width = windowWidth >= 1300 ? 1300 / 3 - 3 : windowWidth >= 768 ? windowWidth / 3 - 3 : windowWidth / 2 - 10;
  return (
    <div className="skeleton">
      <Skeleton height={200} width={width} />
      <Skeleton width={width} />
      <Skeleton width={width} />
      <Skeleton height={50} width={width} />
    </div>
  );
};

export default ({ isLoading, allProducts, currency, updateCart }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect((_) => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className="products">
      <div className="products__wrapper">
        {isLoading ? (
          <>
            <>{renderSkeleton(windowWidth)}</>
            <>{renderSkeleton(windowWidth)}</>
            {windowWidth >= 768 && <>{renderSkeleton(windowWidth)}</>}
          </>
        ) : (
          <>
            {allProducts &&
              allProducts.products.map((product) => (
                <Product currency={currency} product={product} key={product.id} updateCart={updateCart} />
              ))}
          </>
        )}
      </div>
    </div>
  );
};
