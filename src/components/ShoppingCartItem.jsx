import React from 'react';
import '../styles/ShoppingCartItem.scss';

const ShoppingCartItem = () => {
  return (
      <div class="shopping-cart">
          <figure>
              <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="pc"/>
          </figure>
          <p>Computer</p>
          <p>$ 100.00</p>
      </div>
  )
}

export default ShoppingCartItem;