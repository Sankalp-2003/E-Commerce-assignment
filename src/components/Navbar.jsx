import React, { useContext, useEffect, useState } from "react";
import "../styles/navbar.scss";
import { FaCartShopping, FaFilter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { ProductContext } from "../context/ProductProvider";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdClear } from "react-icons/md";

const Navbar = ({ setSearchTerm, isSmallScreen, setSearchCategory }) => {
  const { categories, products } = useContext(ProductContext);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [input, setInput] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
    setSearchTerm(value);
    setShowSuggestion(true);
    if (value && window.location.pathname !== "/products") {
      navigate("/products");
    }
  };

  const clearInput = () => {
    setInput("");
    setSearchTerm("");
    setShowSuggestion(false);
    if (input) {
      navigate(-1);
    }
  };
  const handleSuggestionClick = (title) => {
    setInput(title);
    setSearchTerm(title);
    setShowSuggestion(false);
  };

  const handleSearchButtonClick = () => {
    if (input) {
      setInput(filteredProducts[0].title);
      setSearchTerm(filteredProducts[0].title);
      setShowSuggestion(false);
    }
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSearchTerm(category);
    setSearchCategory(true);
    navigate("/products");
  };

  const clearCategory = () => {
    setSelectedCategory("");
    setSearchTerm("");
    setSearchCategory(false);
    if (selectedCategory) {
      navigate(-1);
    }
  };

  const filteredProducts = input
    ? products.filter((product) =>
        product.title.toLowerCase().includes(input.toLowerCase())
      )
    : products;
  return (
    <div className="navbar">
      <div className="top">
        <h2>E-Shop</h2>
        {isSmallScreen && selectedCategory ? (
          <div className="categort_title">{selectedCategory}</div>
        ) : null}
        {selectedCategory && (
          <div className="filter__clear" onClick={clearCategory}>
            Clear Filter
          </div>
        )}
        <div className="search">
          <div className="filter">
            <select
              name="filter"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option hidden>Filter</option>
              {categories.map((category, idx) => (
                <option value={category} key={idx}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            placeholder="Search Products"
            value={input}
            onChange={handleInputChange}
          />
          {input && (
            <div className="clear__btn" onClick={clearInput}>
              <MdClear />
            </div>
          )}
          <div className="btn" onClick={handleSearchButtonClick}>
            <FaSearch />
          </div>
        </div>
        {input && (
          <div className="search__suggestions">
            {filteredProducts.slice(0, 5).map(
              (product) =>
                showSuggestion && (
                  <div
                    className="suggestion"
                    key={product.title}
                    onClick={() => handleSuggestionClick(product.title)}
                  >
                    {isSmallScreen
                      ? product.title.length < 28
                        ? product.title
                        : product.title.slice(0, 25) + "..."
                      : product.title}
                  </div>
                )
            )}
          </div>
        )}
        <Link to="cart">
          <div className="cart">
            <FaCartShopping />
            {totalQuantity ? (
              <span className="cart-count">{totalQuantity}</span>
            ) : null}
          </div>
        </Link>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
