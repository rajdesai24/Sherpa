import request from "../../../services/request";

export const login = ({email, password}, event) => {
  return async (dispatch) => {
    const response = await request.post('/auth/login', {email, password, role:"CUSTOMER"});
    if (response.data.success === true) {
      console.log(response, "response data");
      await dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.result.userData[0]
      })
    
      toast.success("Login Successful!", {autoClose:2000})
      localStorage.setItem('token', response.data.result.token);
      localStorage.setItem('user', JSON.stringify(response.data.result));
    } else if (response.status === 403){
      console.log(response.data, "response data");
      toast.danger("Either the email or password is incorrect", {autoClose:2000})
      dispatch({
        type:"LOGIN_FAILED",
        payload:response.data
      })
    }
    //return response.data;
  }
}

export const signup = ({userName, email, password}) => {
  return async (dispatch) => {
    const response = await request.post('/auth/signup', {userName, email, role:"USER", password});
    console.log(response.data, "USERINFORMATION");
    if (response.data.success) {
    await dispatch({
      type: "SIGNUP_SUCCESS",
      payload: response.data
    })
    
    localStorage.setItem('token', response.data.result.token);
    localStorage.setItem('user', JSON.stringify(response.data.result));
    } else {
      dispatch({
        type:"LOGIN_FAILED",
        payload:response.data
      })
    }
    return response.data;
  }
}

export const verifyEmail = (userId) => {
  return async (dispatch) => {
    const response = await request.get(`/auth/verify-email/${userId}`);
    await dispatch({
      type: "VERIFY_EMAIL",
      payload: response.data
    })
  }
}

export const adminLogin = ({email, password, role}) => {
  return async (dispatch) => {
    const response = await request.post('/auth/login', {email, password, role});
    console.log(response.data, "USERINFORMATION");
    if (response.data.success) {
    await dispatch({
      type: "LOGIN_SUCCESS",
      payload: response.data.result.userData[0]
    })
    
    localStorage.setItem('token', response.data.result.token);
    localStorage.setItem('user', JSON.stringify(response.data.result));
    } else {
      dispatch({
        type:"LOGIN_FAILED",
        payload:response.data
      })
    }
    return response.data;
  }
}

export const otp = ({email}) => {
  return async (dispatch) => {    
    console.log("forgot pass");
    const response = await request.patch(`/auth/forgot-password`, {email})
    console.log(response.data, "fhfgg")
    return response.data;
  }
}

export const verifyOtp = ({email, otp}) => {
  return async (dispatch) => {
    const response = await request.patch('/auth/verify-Otp', {email, otp})
    return response.data;
  }
}

export const resetPassword = ({password, userId}) => {
  console.log(password, userId)
  return async (dispatch) => {
    const response = await request.put('/auth/register', {password, userId});
    console.log(response.status, "response")
    return response.data;
  }
}

export const logOut = () => {
  localStorage.clear();
  console.log("Logging out")
  if (localStorage.length === 0) return true;
  return false;
}