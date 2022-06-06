import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const [data,setData] = useState({})

  const {login,logout} = useContext(AuthContext)

  // const {isAuth,login,logout} = useContext(AuthContext)

  const handleChange = (e)=>{
    setData({...data, [e.target.name]:e.target.value})

    console.log(data)
  }

  const submit = (e)=>{
    e.preventDefault()
    axios.post("https://reqres.in/api/login",data).then((res)=>login())
  }
  return (
    <div>
      <form action="" onSubmit={submit}>
      <input data-cy="login-email" name="email"onChange={handleChange}/>
      <input data-cy="login-password" name="password"onChange={handleChange} />
      <button data-cy="login-submit" >Login</button>
      </form>
    </div>
  );
};

export default Login;
