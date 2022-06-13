import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productReducer from "./producd-reducer";
import favoritesReducer from "./favories-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartReducer", "userReducer"],
};


const rootReducer = combineReducers({
  productReducer,
  favoritesReducer,
});

export default persistReducer(persistConfig, rootReducer);
