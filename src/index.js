import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { ForgotPassword } from "./components/ForgotPassword";
import { ResetPassword } from "./components/ResetPassword";
import { Cart } from "./components/Cart";
import { Shop } from "./components/Shop";
import { CartCheckout } from "./components/CartCheckout";
import { ShippingInfo } from "./components/ShippingInfo";
import useLocalStorage from "./util/useLocalStorage";
import Homepage from "./Homepage";

const App = () => {
  const [items, setItems] = useLocalStorage("cartItems", []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
        <Route exact path="/ResetPassword" element={<ResetPassword />} />
        <Route
          exact
          path="/Cart"
          element={<Cart items={items} setItems={setItems} />}
        />
        <Route exact path="/Shop" element={<Shop />} />
        <Route
          exact
          path="/CartCheckout"
          element={<CartCheckout items={items} setItems={setItems} />}
        />
        <Route
          exact
          path="/OrderSuccess"
          element={<ShippingInfo items={items} setItems={setItems} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//
