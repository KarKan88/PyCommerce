import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";

import HomePage from "./pages/home-page";
import ErrorPage from "./pages/error-page";

import ProductPage from "./pages/product-details-page";
import ProfilePage from "./pages/profile-page";

import "./app.css";
import PaymentPage from "./pages/payment-page";

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
        <Route exact path="/payment">
          <PaymentPage />
        </Route>
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
