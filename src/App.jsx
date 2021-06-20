import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_CURRENCIES, GET_PRODUCTS } from 'gql';

// components
import Header from 'components/Header';
import Filter from 'components/Filter';
import Products from 'components/Products';
import Modal from 'components/Modal';
import Cart from 'components/Cart';

import './App.scss';

const filterOptions = [
  { text: 'Filter By', value: '', selected: true, placeholder: true },
  { text: 'All Products', value: '' },
  { text: 'New Products', value: '' },
  { text: 'Sets', value: '' },
  { text: 'Skincare', value: '' },
  { text: 'Hair and Body Care', value: '' },
  { text: 'Accessories', value: '' },
];

const App = () => {
  const [isCartOpen, toggleCart] = useState(false);
  const [currency, setCurrency] = useState('NGN');
  const [cart, setCart] = useState([]);
  const { data: currencies } = useQuery(GET_CURRENCIES);
  const {
    refetch,
    loading,
    data: allProducts,
  } = useQuery(GET_PRODUCTS, {
    variables: { currency },
  });

  const updateCart = (id, type) => {
    let newCartItems;
    const product = allProducts.products.find((item) => item.id === id);
    const cartItem = cart.find((item) => item.id === id);

    if (product) {
      switch (type) {
        case 'DECREMENT':
          if (cartItem) {
            if (cartItem.quantity === 1) {
              newCartItems = cart.filter((item) => item.id !== id);
            } else {
              newCartItems = cart.map((item) => {
                if (item.id === id) {
                  return { ...item, quantity: item.quantity - 1 };
                }
                return item;
              });
            }
          }
          break;

        default:
          if (cartItem) {
            newCartItems = cart.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            });
          } else {
            newCartItems = [...cart, { id, quantity: 1 }];
          }
          break;
      }
      setCart(newCartItems);
      toggleCart(true);
    }
  };

  const sumTotal = () => {
    if (!loading && allProducts) {
      return cart.reduce((prev, cur) => {
        const product = allProducts.products.find((item) => item.id === cur.id);
        return product ? prev + product.price * cur.quantity : prev;
      }, 0);
    }
    return 0;
  };

  const removeCartItem = (id) => {
    const newCartItems = cart.filter((item) => item.id !== id);
    setCart(newCartItems);
  };

  useEffect(() => {
    refetch();
  }, [currency]);

  return (
    <>
      <Header openCart={toggleCart} count={cart.length} />
      <main>
        <Filter filterOptions={filterOptions} />
        <Products allProducts={allProducts} currency={currency} isLoading={loading} updateCart={updateCart} />
      </main>
      <Modal classes="cart-modal" show={isCartOpen}>
        <Cart
          closeCart={toggleCart}
          cart={cart}
          products={allProducts ? allProducts.products : []}
          activeCurrency={currency}
          currencies={currencies}
          updateCart={updateCart}
          changeCurrency={setCurrency}
          removeItem={removeCartItem}
          isLoading={loading}
          sumTotal={sumTotal}
        />
      </Modal>
    </>
  );
};

export default App;
