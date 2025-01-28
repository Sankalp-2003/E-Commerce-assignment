import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App.jsx";
import ProductProvider from "./context/ProductProvider.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ProductProvider>
        <App />
      </ProductProvider>
    </Provider>
  </StrictMode>
);
