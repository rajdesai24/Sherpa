import request from "../../../services/request";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 
toast.configure() 

export const joinClub = (clubName, user) => {
  return async(dispatch) => {
    await request.patch(`/enterclub/${clubName}`, user).then((response) => {
      dispatch({
        type: "ADD_USER_TO_CLUB",
        payload: response.data
      });
      if(response.data === true){
        toast.success(response.data.message, {autoClose:2000})
      }
      else {
        toast.error(response.data.message)
      }
    })
  };
} 

export const createClub = (clubName) => {
  return async(dispatch) => {
    await request.post(`/create-club`, clubName).then((response) => {
      dispatch({
        type: "CREATE_CLUB",
        payload: response.data
      });
      if(response.data === true){
        toast.success(response.data.message, {autoClose:2000})
      }
      else {
        toast.error(response.data.message)
      }
    })
  };
}

export const getClubs = () => {
  return async(dispatch) => {
    await request.get('/club/all').then((response) => {
      console.log(response,'club')
      dispatch({
        type: "GET_CLUBS",
        payload: response.data
      });
      if(response.data === true){
        toast.success(response.data.message, {autoClose:2000})
      }
      else {
        toast.error(response.data.message)
      }
    })
  };
}