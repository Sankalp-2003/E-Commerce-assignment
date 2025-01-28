import React from "react";
import "../styles/checkout.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Checkout() {
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="checkout">
      <div className="info">
        {items.length ? (
          <>
            <h4>Order Summary</h4>
            {items.map((item) => (
              <div className="order__list" key={item.id}>
                <div className="order__img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="order__price">
                  <p>{item.title}</p>
                  <span>₹ {(item.price * 82).toFixed(2)}</span>
                  <div className="item__qty">
                    <p>Qty:</p>
                    <p>{item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bottom">
              <div className="top">
                <p>Total Price</p>
                <p>
                  <b>₹ {(totalPrice * 82).toFixed(2)}</b>
                </p>
              </div>
              <Link to="/order-confirm">
                <button>Place Order</button>
              </Link>
            </div>
          </>
        ) : (
          <div className="empty__msg">
            <h1>Cart is Empty!</h1>
            <p>(please add some products to cart.)</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
