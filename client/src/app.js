import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";

import HomePage from "./pages/home-page";
import ErrorPage from "./pages/error-page";

import ProductPage from "./pages/product-details-page";
import FavoritesPage from "./pages/favorites-page";

import "./app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/product/:id">
          <ProductPage />
        </Route>
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
