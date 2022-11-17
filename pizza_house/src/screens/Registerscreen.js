import { useState, useEffect } from "react";
import React from "react";

import { useDispatch,useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";



export default function Registerscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const dispatch = useDispatch()

  function register(){
    if(password!=cpassword)
    {
        alert('password not matched')
    }
    else
    {
        const user = {name,email,password}
        console.log(user)

        dispatch(registerUser(user))
    }
    

  }
  

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5  shadow-lg p-3 mb-5 bg-white rounded">
          <h2>
            <b>Register</b>
          </h2>

          <div>
            <input type="text" placeholder="name" className="form-control"  value={name} required onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="email" className="form-control" value={email}  required  onChange={(e)=>setEmail(e.target.value)} />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password} 
              required 
              onChange={(e)=>setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="confirm password"
              className="form-control"
              required 
              value={cpassword} onChange={(e)=>setCpassword(e.target.value)}
            />
            <button className="button mb-3" onClick={register}>REGISTER</button>
            <br />
            <a href='/login' style={{color:'black'}}> <b>Click here to LogIn</b></a>
          </div>
        </div>
      </div>
    </div>
  );
}
