import React, { useState, useContext, } from "react";

import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {

  const [isAuth,setIsAuth] = useState(AuthContext)
  const navigate = useNavigate()

  if(!isAuth){
   return navigate("/login")
  }
  return children;
};

export default RequiredAuth;
