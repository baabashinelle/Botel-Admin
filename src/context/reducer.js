const actionTypes = {
  SET_HOTELS: "SET_HOTELS",
  SET_ROOMS: "SET_ROOMS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_HOTELS:
      return {
        ...state,
        hotels: action.hotels,
      };
    default:
      return state;
  }
};

export default reducer;