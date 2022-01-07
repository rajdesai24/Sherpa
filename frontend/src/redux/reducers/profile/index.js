import request from '../../../services/request.js'

export const getUserProfile = () => {
  return async(dispatch) => {
    await request.get('/profile').then((response) => {
      dispatch({
        type: "GET_PROFILE",
        payload: response.data
      });
    })
  };
};

export const createProfile = (account) => {
  return async(dispatch) => {
    await request.post('/profile/account-details', account).then((response) => {
      dispatch({
        type: "CREATE_USER_PROFILE",
        payload: response.data
      })
    })
  }
}