import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductPage from "./pages/ProductPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirm from "./pages/OrderConfirm";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState(false);
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
    <>
      <Router>
        <Navbar
          setSearchTerm={setSearchTerm}
          setSearchCategory={setSearchCategory}
          isSmallScreen={isSmallScreen}
        />
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route
            path="products"
            element={
              <ProductPage
                isSmallScreen={isSmallScreen}
                searchTerm={searchTerm}
                searchCategory={searchCategory}
              />
            }
          />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-confirm" element={<OrderConfirm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
