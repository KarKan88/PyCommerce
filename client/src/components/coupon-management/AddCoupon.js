/**
 * Author: Hemanth Nadipineni
 * Banner ID: B00899473
 */
/*
Component to add a coupon.
Referenced from the tutorial on freecodecamp: https://www.freecodecamp.org/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/
*/
import React, { useContext } from 'react';
import CouponForm from './CouponForm';
import CouponsContext from '../../context/CouponsContext';
const AddCoupon = ({ history }) => {
    const { coupons, setCoupons } = useContext(CouponsContext);

    const handleOnSubmit = (coupon) => {
        setCoupons([coupon, ...coupons]);
        history.push("/coupons/list");
    };

    return ( <
        React.Fragment >
        <
        CouponForm handleOnSubmit = { handleOnSubmit }
        /> < /
        React.Fragment >
    );
};

export default AddCoupon;