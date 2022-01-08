const initialState = {
  userJoin: {}
};
 
const ClubReducer = (state = initialState, action) => {
  console.log(action, "action");
  switch (action.type) {
    case "ADD_USER_TO_CLUB":
      return { ...state, userJoin: action.payload.result };
    default:
      return state;
  }
};
export default ClubReducer;