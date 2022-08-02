
import React from 'react';
import './CartWidget.css';

function CartWidget(props) {
  return (
    <button className="product-cart">
        <a href="#">
            <i className="fas fa-shopping-cart" />{props.children}          
        </a> 
    </button>
  );
}

export default CartWidget;