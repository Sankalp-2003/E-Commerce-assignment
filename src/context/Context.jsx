import React, { createContext, useEffect, useState } from "react";
import { fetchProducts } from "../utils/Api";

export const ProductContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const getProductDetails = async (id) => {
    setLoadingDetails(true);
    try {
      const details = await fetchProductDetails(id);
      setProductDetails(details);
      setLoadingDetails(false);
    } catch (error) {
      console.error(`Error fetching product details for ID ${id}:`, error);
      setLoadingDetails(false);
    }
  };

  return (
    <Context.Provider
      value={{
        products,
        loading,
        productDetails,
        loadingDetails,
        getProductDetails,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
