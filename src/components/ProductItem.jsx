import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import bt_add_cart_image from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
    const { addToCart } = useContext(AppContext);

    const handleClick = item => {
        addToCart(item);
    }
  return (
      <div className="product-card">
          <img src={product.images[0]} alt={product.title} className="product-img"/>
              <div className="product-info">
                  <div>
                      <p>${product.price}</p>
                      <p>{product.title}</p>
                  </div>
                  <figure onClick={() => handleClick(product)}>
                      <img src={bt_add_cart_image} alt=""/>
                  </figure>
              </div>
      </div>
  )
}

export default ProductItem;