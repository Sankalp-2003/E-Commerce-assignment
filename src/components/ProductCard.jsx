import React from "react";
import "../styles/productCard.scss";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const rate = product.rating.rate;
  const fullStars = Math.floor(rate);
  const halfStar = rate % 1 >= 0.5;
  const emptyStars = 5 - Math.ceil(rate);

  return (
    <div className="card">
      <div className="img__container">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="title">
        {product.title.length < 50
          ? product.title
          : product.title.slice(0, 40) + "..."}
      </div>
      <div className="price">₹ {(product.price * 82).toFixed(2)}</div>

      <div className="stars">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500" />
        ))}

        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-yellow-500" />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
