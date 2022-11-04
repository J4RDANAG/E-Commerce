import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import  CartState  from "./context/cart/CartState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartState>
        <App />
      </CartState>
    </AuthContextProvider>
  </React.StrictMode>
);
