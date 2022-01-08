import request from "../../../services/request";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 
toast.configure() 

export const joinClub = (clubName, user) => {
  return async(dispatch) => {
    await request.post(`/enterclub/${clubName}`, user).then((response) => {
      dispatch({
        type: "ADD_USER_TO_CLUB",
        payload: response.data
      });
      if(response.data.success === true){
        toast.success(response.data.message, {autoClose:2000})
      }
      else {
        toast.error(response.data.message)
      }
    })
  };
}