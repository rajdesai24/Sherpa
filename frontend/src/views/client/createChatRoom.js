import { React, useState } from "react";
import { Link, Redirect, useHistory, Route } from "react-router-dom";
import { useParams } from "react-router";
import '../../components/authentication/signIn.css'
//import {signIn} from "../../redux/actions/auth/index.js";
import { useDispatch } from "react-redux";

const CreateChatRoom = () => {
  //const dispatch = useDispatch()
  const {clubName, language} = useParams()
  const [chatRoomName, setChatRoomName] = useState("");

  const handleSubmit = (event) => {
    //event.preventDefault();
    //const checkLogin = dispatch(signIn({ email, password, role: "CUSTOMER" }))
  } 

  return (
    <>
      <div className="outer">
        <div className="sign-up-card">
          <h3>Log In</h3>
          <div className="input-div">
            <label for="Room Name">Room Name</label>
            <input type="text" placeholder="Room Name"/>
          </div>
          <div className="btn">Create Room</div>
        </div>
      </div>
    </>
  );
};

export default CreateChatRoom;