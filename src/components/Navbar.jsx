import React, { useContext } from "react";
import "../styles/navbar.scss";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { ProductContext } from "../context/ProductProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { categories } = useContext(ProductContext);
  return (
    <div className="navbar">
      <div className="top">
        <h2>E-Shop</h2>
        <div className="search">
          <div className="filter">
            <select name="filter">
              <option hidden>Filter</option>
              {categories.map((category, idx) => (
                <option value={category} key={idx}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <input type="text" placeholder="Search Products" />
          <div className="btn">
            <FaSearch />
          </div>
        </div>
        <div className="cart">
          <Link to="cart">
            <FaCartShopping />
          </Link>
        </div>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>About</li>
          <li>Contect</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
