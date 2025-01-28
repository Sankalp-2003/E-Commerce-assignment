import "../styles/cart.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };
  return (
    <div className="cart__page">
      <h3>SHOPPING CART</h3>
      {items.length ? (
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
            {items.map((item) => (
              <div className="list" key={item.id}>
                <div className="product">
                  <div className="img__container">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="title">
                    {item.title.length < 23
                      ? item.title
                      : item.title.slice(0, 25) + "..."}
                  </div>
                </div>
                <div className="bottom">
                  <div className="price">₹ {(item.price * 82).toFixed(2)}</div>
                  <div className="quantityButton">
                    <button
                      className="decrement"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="increment"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="subtotal price">
                    ₹ {(item.totalPrice * 82).toFixed(2)}
                  </div>
                  <div className="remove" onClick={() => handleRemove(item.id)}>
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="right">
            <div className="cart__card">
              <div className="col col1">
                <h5>CART TOTAL:</h5>
                <span>
                  <p>TOTAL ITEMS</p>
                  <p>{totalQuantity}</p>
                </span>
              </div>
              <div className="col col2">
                <h5>Shipping:</h5>
                <div className="address">
                  <p>XYZ, Bangalore</p>
                  <span>change address</span>
                </div>
              </div>
              <div className="col col3">
                <div className="top">
                  <p>Total Price</p>
                  <p>₹ {(totalPrice * 82).toFixed(2)}</p>
                </div>
                <Link to="/checkout">
                  <button>Proceed to Checkout</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty__cart">
          <div className="empty__cart__img">
            <img
              src="https://e-shop-sankalp-2003.netlify.app/assets/emptycart-SWUyC74Z.png"
              alt="Empty"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
