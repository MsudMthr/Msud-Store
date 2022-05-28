import axios from "axios";
const fetchProductsRequest = () => {
  return { type: "FETCH_PRODUCTS_REQUEST" };
};
const fetchProductsSuccess = (data) => {
  return { type: "FETCH_PRODUCTS_SUCCESS", payload: data };
};
const fetchProductsFailure = (error) => {
  return { type: "FETCH_PRODUCTS_FAILURE", payload: error };
};

const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get("/products")
      .then((response) => {
        const products = response.data;
        dispatch(fetchProductsSuccess(products));
        console.log(products);
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductsFailure(errorMsg));
      });
  };
};

export default fetchProducts;