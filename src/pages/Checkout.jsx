import React from 'react';
import OrderItem from '@components/OrderItem';
import Menu from '@components/Menu';
import '@styles/Checkout.scss';

const Checkout = () => {
  return (
      <div className="my-order">
          <div className="my-order-container">
              <div className="title">
                  <h1>My order</h1>
              </div>
              <div className="my-orden-content">
                  <div className="order">
                      <p>
                          <span>09.01.2023</span>
                          <span>6 articles</span>
                      </p>
                      <p>$ 560.00</p>
                  </div>
              </div>
              <OrderItem />
          </div>
      </div>
  )
}

export default Checkout