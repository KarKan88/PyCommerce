/*
 * @author: Dhruvrajsinh Omkarsinh Vansia
 */

import axios from "axios";

export const addCost = (cost) => async (dispatch, getState) => {
    
      const user = localStorage.getItem('id');
      if (user) {
          try {
            await axios.post("/checkout", {
              userId: user,
              cost: cost
            });
          } catch (error) {
            console.log(error)
          }
        }
};