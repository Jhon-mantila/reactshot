import React from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/Orders.scss';

const Orders = () => {
  return (
      <div className="my-order">
          <div className="my-order-container">
              <div className="title">
                  <h1>My orders</h1>
              </div>
              <div className="my-orden-content">
                    <OrderItem />
              </div>
          </div>
      </div>
  )
}

export default Orders;