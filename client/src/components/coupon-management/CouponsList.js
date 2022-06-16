import React, { useContext } from 'react';
import _ from 'lodash';
import Coupon from './Coupon';
import CouponsContext from '../../context/CouponsContext';

/*
Component to display all coupons.
Referenced from the tutorial on freecodecamp: https://www.freecodecamp.org/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/
*/

const CouponsList = () => {
  const {coupons, setCoupons } = useContext(CouponsContext);

  const handleRemoveCoupon = (id) => {
    setCoupons(coupons.filter((coupon) => coupon.id !== id));
  };

  return (
    <React.Fragment>
      <div className="coupon-li">
        {!_.isEmpty(coupons) ? (
          coupons.map((coupon) => (
            <Coupon key={coupon.id} {...coupon} handleRemoveCoupon={handleRemoveCoupon} />
          ))
        ) : (
          <p className="message">No coupons available. Please add some coupons.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default CouponsList;
