import { useState, useEffect } from "react";
import React from "react";

import { useDispatch,useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";




export default function Loginscreen() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    if(localStorage.getItem('currentUser'))
    {
      window.location.href="/"
    }

  },[])
  
  const dispatch  = useDispatch()
  
   function login(){
    const user={email,password}
    dispatch(loginUser(user))
   }
  

  

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
          <h2>
            <b>Login</b>
          </h2>

          <div>
          
            <input type="text" placeholder="email" className="form-control" value={email}  required  onChange={(e)=>setEmail(e.target.value)} />
            <input
              type="text"
              placeholder="password"
              className="form-control"
              value={password} 
              required 
              onChange={(e)=>setPassword(e.target.value)}
            />
          
            <button className="button mb-3" onClick={login}>login</button>
            <br/>
            <a href="/register" style={{color:'black'}}><b>Click here to register</b></a>
          </div>
        </div>
      </div>
    </div>
  );
}
