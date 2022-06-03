import { combineReducers } from "redux";
import cartReducer from "./Cart/CartReducer";

import productReducer from "./getProductsFromApi/getProductReducer";
import favoriteReducer from "./likeProducts/likeProductReducer";
import filterReducer from "./filterProducts/filterProductsReducer";
import subscribeReducer from "./subscribe/subscribeReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  favorites: favoriteReducer,
  filterProducts: filterReducer,
  userState: subscribeReducer,
});

export default rootReducer;
