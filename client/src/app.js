import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";

import HomePage from "./pages/home-page";
import ErrorPage from "./pages/error-page";
import CartPage from "./pages/cart-page";
import ProductPage from "./pages/product-details-page";
import ProfilePage from "./pages/profile-page";

import "./app.css";
import PaymentPage from "./pages/payment-page";
import Payment from './components/payment/payment'
import Registration from "./components/user-management/registration";
import Login from "./components/user-management/login";
import ForgotPassword from "./components/user-management/forgot-password";
import OrderConfirmed from "./pages/order-confirm-page";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/favorites">
          <ProfilePage />
        </Route>
        <Route exact path="/product/:id">
          <ProductPage />
        </Route>
        <Route exact path="/shipping">
          <PaymentPage />
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
        <Route exact path="/orderConfirmed">
          <OrderConfirmed />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
