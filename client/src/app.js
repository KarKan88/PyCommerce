import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";

import HomePage from "./pages/home-page";
import ErrorPage from "./pages/error-page";
import CartPage from "./pages/cart-page";
import ProductPage from "./pages/product-details-page";
import ProfilePage from "./pages/profile-page";
import Sellerdashboard from "./pages/seller-dashboard";
import Addproduct from "./pages/addproduct";
import Viewproduct from "./pages/viewproduct";

import "./app.css";
import Registration from "./components/user-management/registration";
import Login from "./components/user-management/login";
import ForgotPassword from "./components/user-management/forgot-password";
import ProductsPage from "./pages/products-page";

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
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/registration">
          <Registration/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/forgotpassword">
          <ForgotPassword/>
        </Route>
        <Route exact path="/products">
          <ProductsPage/>
        </Route>
      
        <Route exact path="/edit-product/:id">
          <Addproduct/>
        </Route>
        <Route exact path="/seller-dashboard">
          <Sellerdashboard/>
        </Route>
        <Route exact path="/add-product">
          <Addproduct/>
        </Route>
        <Route exact path="/view-product">
          <Viewproduct/>
        </Route>
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
