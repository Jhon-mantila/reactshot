import React from 'react'
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';

const MyOrder = () => {
  return (
      <aside className="product-detail">
          <div className="title-container">
              <img src="./icons/flechita.svg" alt="arrow" />
              <p className="title">Shopping cart</p>
          </div>
          <div className="my-orden-content">
            <OrderItem />
              <div className="order">
                  <p>
                      <span>Total</span>
                  </p>
                  <p>$ 560.00</p>
              </div>
              <button className="primary-button">
                  Checkout
              </button>
          </div>
      </aside>
  );
}

export default MyOrder