import React from 'react';
import '../styles/ProductInfo.scss';

const ProductInfo = () => {
  return (
      <>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="computer"></img>
          <div className="product-info">
              <p>$120.00</p>
              <p>Computer</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium blanditiis repudiandae eligendi possimus maxime beatae earum in, quam nam ad totam distinctio corrupti delectus ea. Harum commodi accusantium distinctio placeat.</p>
              <button className="primary-button add-to-cart-buttom">
                  <img src="./icons/bt_add_to_cart.svg" alt="shopping-cart" />
                  Add to cart
              </button>
          </div>
      </>
  )
}

export default ProductInfo