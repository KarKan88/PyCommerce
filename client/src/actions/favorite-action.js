import * as actionType from "../action-type/favorites-action-type";
import axios from "axios";

const user_id = "629698a83e746c2eb31e8207"

export const addToFavorites = (item) => async (dispatch, getState) => {
  try {
    await axios.post("/favorites/add-item", {
      userId: user_id,
      productId: item._id,
    });
  } catch (error) { }
  dispatch({
    type: actionType.ADD_TO_FAVORITES,
    payload: {
      item,
    },
  });
};

export const removeFromFavorites = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/favorites/remove-item", {
      data: {
        userId: user_id,
        productId: id,
      },
    });
  } catch (error) { }
  dispatch({
    type: actionType.REMOVE_FROM_FAVORITES,
    payload: {
      id: id,
    },
  });
};

export const getFavoritesItems = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/favorites/get-items/${user_id}`);
    const favoritesItems = [];

    data?.map((value) => {
      favoritesItems.push(value.productDetails[0]);
    });
    dispatch({
      type: actionType.SET_FAVORITES,
      payload: {
        favoritesItems: favoritesItems,
      },
    });
  } catch (error) { }
};
