const subscribeSuccess = (user) => {
  return { type: "SUBSCRIBE_SUCCESS", payload: user };
};
const subscribeFailure = (error) => {
  return { type: "SUBSCRIBE_FAILURE", payload: error };
};

export { subscribeFailure, subscribeSuccess };
