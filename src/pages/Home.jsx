import React from "react";
import "../styles/home.scss";
import ProductPage from "./ProductPage";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="left">
          <div className="content">
            <p>SHOP BY CATEGORIES</p>
            <div className="lists">
              <ul>
                <li>Electronics</li>
                <li>Fashion</li>
                <li>Home & Kitchen</li>
                <li>Beauty</li>
                <li>Sports</li>
                <li>Automotive</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="img__container">
            <img
              src="https://camo.githubusercontent.com/5d69adb5abb9f3734f5ad026f174b5e2a5375248074f1b6872f3887479092dcb/68747470733a2f2f74342e667463646e2e6e65742f6a70672f30332f30362f36392f34392f3336305f465f3330363639343933305f53335a384839516b314d4e37395a556537624557715446756f6e525a64656d772e6a7067"
              alt=""
            />
          </div>
          <h3>Welcome to E-Shop</h3>
          <h4>millions+ products</h4>
          <button>shop now</button>
        </div>
      </div>
      <ProductPage />
    </>
  );
};

export default Home;
