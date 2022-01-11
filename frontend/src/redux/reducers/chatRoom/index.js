const initialState = {
  userJoin: {},
  getClubs: [],
  createClub: {},
  translate: {}
};
 
const ClubReducer = (state = initialState, action) => {
  console.log(action, "action");
  switch (action.type) {
    case "ADD_USER_TO_CLUB":
      return { ...state, userJoin: action.payload };
    case "GET_CLUBS":
      return { ...state, getClubs: action.payload };
    case "CREATE_CLUB":
      return { ...state, createClub: action.payload };
    case "TRANSLATE":
      return { ...state, translate: action.payload };
    default:
      return state;
  }
};
export default ClubReducer;