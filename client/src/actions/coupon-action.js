/**
 * Author: Hemanth Nadipineni
 */
import * as actionType from "../action-type/coupon-action-type";
import axios from "axios";

/**
 * API call to get all coupons.
 */
export const listCoupons = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/coupons/list-coupons");
    console.log(data);
    dispatch({
      type: actionType.LIST_COUPONS,
      payload: {
        coupons: data,
      },
    });
  } catch (error) { }
};

// /**
//  * API call to get coupon details
//  */
// export const getProductById = (id) => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`/products/get-product/${id}`);
//     dispatch({
//       type: "actionType.GET_PRODUCT_BY_ID",
//       payload: {
//         product: data,
//       },
//     });
//   } catch (error) { }
// };


