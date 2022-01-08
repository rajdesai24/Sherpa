import { React, useState } from "react";
import { Link, Redirect, useHistory, Route } from "react-router-dom";
import '../../components/authentication/signIn.css'
import {login} from "../../redux/actions/auth/index.js";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formData = new FormData();
  const username=email
  formData.append("username", username);
  formData.append("password", password);
  const handleSubmit = (event) => {
    //event.preventDefault();
    //const checkLogin = dispatch(signIn({ email, password, role: "CUSTOMER" }))
  } 
  const history = useHistory()
  const handleSignIn = async (event) => {
    if(!email || !password) {
      event.preventDefault()
      alert("Please enter all the fields")
    }
    else {
      dispatch(login( formData , event))
      history.push('/localite-backpacker')
    }
  }


  return (
    <>
      <div className="outer">
        <div className="sign-up-card">
          <h3>Log In</h3>
          <div className="input-div">
            <label for="Email">Email</label>
            <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
          </div>
          <div className="input-div">
            <label for="Password">Password</label>
            <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
          </div>
          <div onClick={(e) => handleSignIn(e)} className="btn">Log In</div>
          <p>Don't have account? <Link to = '/sign-up'>Sign Up</Link></p>
        </div>
      </div>
    </>
  );
};

export default SignIn;