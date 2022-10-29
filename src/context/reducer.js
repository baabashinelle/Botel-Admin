const actionTypes = {
  SET_HOTELS: "SET_HOTELS",
  SET_ROOMS: "SET_ROOMS",
  ADD_ROOM: "ADD_ROOM",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_HOTELS:
      return {
        ...state,
        hotels: action.hotels,
      };
    case actionTypes.SET_ROOMS:
      return{
        ...state,
        rooms: action.rooms
      };
    case actionTypes.ADD_ROOM:
      return{
        ...state,
        rooms: [...state.rooms, action.room]
      };
    default:
      return state;
  }
};

export default reducer;