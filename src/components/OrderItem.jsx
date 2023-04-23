import React from 'react';
import '../styles/OrderItem.scss';

const OrderItem = () => {
  return (
      <div className="OrderItem">
          <figure>
              <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="pc"/>
          </figure>
          <p>Computer</p>
          <p>$ 100.00</p>
          <img src="./icons/icon_close.png" alt="closed"/>
      </div>
  )
}

export default OrderItem