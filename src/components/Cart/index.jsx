import React from 'react';

// components
import { ReactComponent as Right } from 'assets/images/right.svg';
import Product from 'components/Item';
import Button from 'components/Button';

// utilities
import seperateNumberWithComma from 'utilities/seperateNumberWithComma';

// Styles
import './Cart.scss';

const getProduct = (cartItem, products) => {
  const product = products.find((item) => cartItem.id === item.id);
  return product || {};
};

export default ({
  closeCart,
  activeCurrency,
  currencies,
  changeCurrency,
  cart,
  updateCart,
  products,
  removeItem,
  isLoading,
  sumTotal,
}) => (
  <div className="cart">
    <div className="cart__main">
      <div className="cart__head">
        <div className="cart__title">
          <h1>Your Cart</h1>
          <div className="cart__title__close" onClick={() => closeCart(false)}>
            <Right className="right" />
          </div>
        </div>
        <div className="cart__currency-wrapper">
          <select onChange={(e) => changeCurrency(e.target.value)}>
            {currencies &&
              currencies.currency.map((currency) => (
                <option selected={activeCurrency === currency} value={currency} key={currency}>
                  {currency}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="cart__items-wrapper">
        {cart.map((item) => (
          <Product
            isLoading={isLoading}
            currency={activeCurrency}
            quantity={item.quantity}
            data={getProduct(item, products)}
            updateCart={updateCart}
            removeItem={removeItem}
            key={item.id}
          />
        ))}
      </div>
    </div>
    <div className="cart__footer">
      <p className="cart__footer__total">
        <span>Subtotal</span>
        <span>
          {activeCurrency} {isLoading ? 'calculating...' : seperateNumberWithComma(sumTotal().toFixed(2))}
        </span>
      </p>
      <Button name="Proceed To Checkout" classes="checkout" />
    </div>
  </div>
);
