import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";

import HomePage from "./pages/home-page";
import ErrorPage from "./pages/error-page";
import CartPage from "./pages/cart-page";
import ProductPage from "./pages/product-details-page";
import ProfilePage from "./pages/profile-page";
import AddCouponPage from "./pages/coupon-management/add-coupon-page";
import EditCouponPage from "./pages/coupon-management/coupon-edit-page";
import CouponsListPage from "./pages/coupon-management/coupon-list-page";
// import CouponsList from './components/coupon-management/CouponsList';
import useLocalStorage from './hooks/useLocalStorage';
// import EditCoupon from './components/coupon-management/EditCoupon';
import CouponsContext from './context/CouponsContext';

import "./app.css";
import Registration from "./components/user-management/registration";
import Login from "./components/user-management/login";
import ForgotPassword from "./components/user-management/forgot-password";
import ProductsPage from "./pages/products-page";

function App() {
  const [coupons, setCoupons] = useLocalStorage('coupons', []);
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


        <CouponsContext.Provider value={{coupons, setCoupons }}>
          <Switch>
        <Route exact path="/coupons/add">
          <AddCouponPage />
        </Route>
        <Route exact path="/coupons/edit">
          <EditCouponPage />
        </Route>
        <Route exact path="/coupons/list">
          <CouponsListPage />
        </Route>
        </Switch>
        </CouponsContext.Provider>
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
        <Route component={ErrorPage} />
        {/* <CouponsContext.Provider value={{coupons, setCoupons }}>
            <Switch>
              <Route component={CouponsList} path="/" exact={true} />
              <Route component={AddCoupon} path="/add" />
              <Route component={EditCoupon} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </CouponsContext.Provider> */}
      </Switch>
    </div>
  );
}

export default App;
