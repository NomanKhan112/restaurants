const shefReducer = (state = [], action) => {
  const { type, payload } = action;

  if (action.type === "Login") {
    return {
      ...state,
      payload,
    };
  } else if (action.type === "get_orders") {
    return {
      ...state,
      getOrdersData: payload,
    };
  } else return state;
};

export default shefReducer;
