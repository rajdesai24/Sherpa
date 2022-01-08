const initialState = {}

const chatReducer = (state = initialState, action) => {
  console.log(action, "action");
  switch (action.type) {
    case "PROCESS":
      return { ...action.payload };
    default:
      return state;
  }
}
export default chatReducer;