import React, { useContext, useEffect, useState } from "react";
import "../styles/productPage.scss";
import ProductCard from "../components/ProductCard";
import { FallingLines } from "react-loader-spinner";
import { ProductContext } from "../context/ProductProvider";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { products, loading } = useContext(ProductContext);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 850) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="products">
      <h2>Products</h2>
      {!loading ? (
        <div className="cards__container">
          {products.map((elem) => (
            <div key={elem.id}>
              <Link to={`/product/${elem.id}`}>
                <ProductCard product={elem} />
              </Link>
            </div>
          ))}
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
