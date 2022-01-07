import { React, useState } from "react";
import { Link, Redirect, useHistory, Route } from "react-router-dom";
import '../../components/authentication/signIn.css'
//import {signIn} from "../../redux/actions/auth/index.js";
import { useDispatch } from "react-redux";

const SignIn = () => {
  //const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            <label for="Email">Email</label>
            <input type="email" placeholder="Email"/>
          </div>
          <div className="input-div">
            <label for="Password">Password</label>
            <input type="password" placeholder="Password"/>
          </div>
          <div className="btn">Log In</div>
          <p>Don't have account? <Link to = '/sign-up'>Sign Up</Link></p>
        </div>
      </div>
    </>
  );
};

export default SignIn;