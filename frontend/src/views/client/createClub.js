import { React, useState } from "react";
import { Link, Redirect, useHistory, Route } from "react-router-dom";
import '../../components/authentication/signIn.css'
//import {signIn} from "../../redux/actions/auth/index.js";
import { useDispatch } from "react-redux";

const CreateClub = () => {
  //const dispatch = useDispatch()
  const user = localStorage.getItem("token")
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit = (event) => {
    //event.preventDefault();
    //const checkLogin = dispatch(signIn({ email, password, role: "CUSTOMER" }))
  } 

  return (
    <>
      { user ?
        <>
          <div className="outer">
            <div className="sign-up-card">
              <h3>Log In</h3>
              <div className="input-div">
                <label for="Title">Title</label>
                <input type="text" placeholder="Club Title"/>
              </div>
              <div className="input-div">
                <label for="Language">Language</label>
                <input type="text" placeholder="Language"/>
              </div>
              <div className="btn">Create Club</div>
            </div>
          </div>
        </>
      : <Link to="/login">Please Log In</Link> }
    </>
  );
};

export default CreateClub;