import React, { useState } from 'react';

// Styles
import './Header.scss';

// components
import { ReactComponent as Left } from 'assets/images/left.svg';

export default ({ openCart, count }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <a href="/">
            <img
              className="header__nav__logo"
              src="https://store.luminskin.com/_next/static/images/logo-20c2cb1d9d2bb6d2139d0e5cec3103bd.png"
              alt="logo"
            />
          </a>
          <button type="button" className="menu" onClick={setShowMenu}>
            <p />
            <p />
            <p />
          </button>
          <a href="#">
            <span>Shop</span>
          </a>
          <a href="#">Learn</a>
        </nav>
        <div className="header__controls">
          <a href="#">
            <span>Account</span>
          </a>
          <span onClick={openCart}>
            <img className="header__controls__cart" src="/images/cart.png" alt="cart" />
          </span>
          <div className="header__controls__cart-count">{count || ''}</div>
        </div>
      </header>
      <nav className={`header__nav-mobile ${!showMenu ? 'hide' : ''}`}>
        <div className="header__nav-mobile__close" onClick={() => setShowMenu(false)}>
          <Left className="left" />
        </div>
        <span>
          <a href="#" onClick={() => setShowMenu(false)}>
            Shop
          </a>
        </span>
        <span>
          <a href="#" onClick={() => setShowMenu(false)}>
            Learn
          </a>
        </span>
      </nav>
    </>
  );
};
