import React from "react";
import "../styles/orderConfirm.scss";
import { Link } from "react-router-dom";

const OrderConfirm = () => {
  return (
    <div className="order__confirm">
      <h3>Thankyou for your order</h3>
      <p>Your order has been placed successfully</p>
      <div className="btns">
        <button className="btn1">Order tracking</button>
        <Link to="/">
          <button className="btn2">Continue shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirm;
