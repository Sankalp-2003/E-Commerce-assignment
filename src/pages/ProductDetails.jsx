import React, { useContext, useEffect, useState } from "react";
import "../styles/productDetails.scss";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";
import { Grid } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, products]);

  if (!product) {
    return (
      <div id="not__found">
        <Grid
          visible={true}
          height="80"
          width="80"
          color="#000"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
      </div>
    );
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

  const handleAddToCart = () => {
    dispatch(addToCart(product));
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
        <div className="addto__Cart" onClick={handleAddToCart}>
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
