import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect, useHistory, Route } from "react-router-dom";
//import {signUp} from "../../redux/actions/auth/index.js";
//import { useDispatch } from "react-redux";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSignUp = (e) => {
    if(!email || !password || !confirmPassword) {
      e.preventDefault()
      alert("Please enter all the fields")
    }
    else if(password !== confirmPassword) {
      e.preventDefault()
      alert("Passwords don't match")
    }
    //dispatch(signUp({ email, password})) 
  }

  return (
    <>
      <div className="outer">
        <div className="sign-up-card">
          <h3>Sign Up</h3>
          <div className="input-div">
            <label for="Email">Email</label>
            <input type="email" placeholder="Email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="input-div">
            <label for="Password">Password</label>
            <input type="password" placeholder="Password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="input-div">
            <label for="Password">Confirm Password</label>
            <input type="password" placeholder="Confirm Password" value = {confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </div>
          <div className="btn">Sign Up</div>
          <p>Already have an account? <Link to = '/'>Log In</Link></p>
        </div>
      </div>
    </>
  );
};

export default SignUp;