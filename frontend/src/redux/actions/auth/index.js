import request from "../../../services/request";
import { history } from "../../../history";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 
toast.configure() 

export const login = (formData, event) => {
  return async (dispatch) => {
    const response = await request.post('/auth/jwt/login', formData);
    if (response.data.success === false) {
      event.preventDefault();
      toast.error("login fail", {autoClose:2000})
      dispatch({
        type:"LOGIN_FAILED",
        payload:response.data
      })
    } else {
      await dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data
      })
      toast.success("login successful", {autoClose:2000})
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('user', JSON.stringify(response.data));
      history.push('/localite-backpacker')
      window.location.reload();
    }
  }
}

export const signUp = (email, password,languages) => {
  return async (dispatch) => {
    console.log(email,password,languages)
    const response = await request.post('/auth/register', { email, password,languages});
    console.log(response.data, "USERINFORMATION");
    if (response.data.success) {
    await dispatch({
      type: "SIGNUP_SUCCESS",
      payload: response.data
    })
    localStorage.setItem('token', response.data.result.access_token);
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