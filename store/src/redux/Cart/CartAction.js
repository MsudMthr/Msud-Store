export const addItem = (data) => {
  return { type: "ADD_ITEM", payload: data };
};
export const removeItem = (data) => {
  return { type: "REMOVE_ITEM", payload: data };
};
export const increase = (data) => {
  return { type: "INCREASE", payload: data };
};
export const decrease = (data) => {
  return { type: "DECREASE", payload: data };
};
export const clear = () => {
  return { type: "CLEAR" };
};
export const checkOut = (data) => {
  return { type: "CHECKOUT" };
};
