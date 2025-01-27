import React, { useState } from "react";
import "../styles/cart.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  return (
    <div className="cart__page">
      <h3>SHOPPING CART</h3>
      <div className="container">
        <div className="left">
          <div className="heading">
            <div className="main">
              <p>PRODUCTS</p>
            </div>
            <div className="other">
              <p>PRICE</p>
              <p>QUANTITY</p>
              <p>SUBTOTAL</p>
              <p>REMOVE</p>
            </div>
          </div>
          <div className="list">
            <div className="img__container">
              <img
                src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
            <div className="title">Watch</div>
            <div className="price">₹ 3000</div>
            <div className="quantityButton">
              <button className="decrement" onClick={decrement}>
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button className="increment" onClick={increment}>
                +
              </button>
            </div>
            <div className="subtotal">₹ 3000</div>
            <div className="remove">
              <RiDeleteBin6Line />
            </div>
          </div>
        </div>
        <div className="right">hdfi</div>
      </div>
    </div>
  );
};

export default Cart;
