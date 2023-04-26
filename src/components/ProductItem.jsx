import React, { useState } from 'react';
import '@styles/ProductItem.scss';

import bt_add_cart from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
    const [cart, setCart] = useState([]);

    const handleClick = () => {
        setCart([]);
    }
  return (
      <div className="product-card">
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="product-img"/>
              <div className="product-info">
                  <div>
                      <p>$120.00</p>
                      <p>Computer</p>
                  </div>
                  <figure onClick={handleClick}>
                      <img src={bt_add_cart} alt=""/>
                  </figure>
              </div>
      </div>
  )
}

export default ProductItem;