import React, { useContext, useEffect } from "react";
import "../styles/productPage.scss";
import ProductCard from "../components/ProductCard";
import { FallingLines } from "react-loader-spinner";
import { ProductContext } from "../context/ProductProvider";
import { Link } from "react-router-dom";

const ProductPage = ({ searchTerm, isSmallScreen, searchCategory }) => {
  const { products, loading } = useContext(ProductContext);

  const filteredProducts = products.filter((product) => {
    if (searchCategory) {
      return product.category.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  return (
    <div className="products">
      <h2>Products</h2>
      {!loading ? (
        <div className="cards__container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((elem) => (
              <div key={elem.id}>
                <Link to={`/product/${elem.id}`}>
                  <ProductCard product={elem} />
                </Link>
              </div>
            ))
          ) : (
            <div className="no__products">
              <h1>No products found!</h1>
            </div>
          )}
        </div>
      ) : (
        <div className="loader">
          <FallingLines
            color="#444"
            width={isSmallScreen ? "100" : "200"}
            visible={true}
            ariaLabel="falling-circles-loading"
          />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
