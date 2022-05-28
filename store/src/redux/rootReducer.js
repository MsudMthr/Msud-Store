import { combineReducers } from "redux";

import { productReducer } from "./getProductsFromApi/getProductReducer";

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;
