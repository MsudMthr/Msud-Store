import { combineReducers } from "redux";
import cartReducer from "./Cart/CartReducer";

import productReducer from "./getProductsFromApi/getProductReducer";
import favoriteReducer from './likeProducts/likeProductReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  favorites : favoriteReducer
});

export default rootReducer;
