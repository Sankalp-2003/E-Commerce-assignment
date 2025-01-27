import React, { useContext, useEffect, useState } from "react";
import "../styles/productDetails.scss";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, products]);

  if (!product) {
    return <div>Not Found</div>;
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <FaStar key={`full-${index}`} className="text-yellow-500" />
          ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <FaRegStar key={`empty-${index}`} className="text-gray-300" />
          ))}
      </>
    );
  };

  return (
    <div className="productDetails">
      <div className="left box">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="right box">
        <div>
          <div className="title">{product.title}</div>
          <div className="price">₹ {(product.price * 82).toFixed(2)}</div>
          <div className="desc">{product.description}</div>
          <div className="stars">{renderStars(product.rating?.rate || 0)}</div>
        </div>
        <div className="addto__Cart">Add to Cart</div>
      </div>
    </div>
  );
};

export default ProductDetails;
