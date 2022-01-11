import request from "../../../services/request";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 
toast.configure() 

export const participateChatRoom = (chatRoomName, user) => {
  return async(dispatch) => {
    await request.patch(`/participate-chatroom/${chatRoomName}`, user).then((response) => {
      dispatch({
        type: "USER_PARTICIPATE_CHATROOM",
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

export const createChatRoomlub = (chatRoomName) => {
  return async(dispatch) => {
    await request.post(`/create-chatroom`, chatRoomName).then((response) => {
      dispatch({
        type: "CREATE_CHATROOM",
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

export const getChatRooms = () => {
  return async(dispatch) => {
    await request.get(`/chatrooms`).then((response) => {
      dispatch({
        type: "GET_CHATROOMS",
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

export const translate = (message, language) => {
  return async(dispatch) => {
    await request.get(`/translate`, {message, language}).then((response) => {
      dispatch({
        type: "TRANSLATE",
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