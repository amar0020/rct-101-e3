import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink

const Navbar = () => {
  const {isAuth,logout} = useContext(AuthContext)
  console.log(isAuth)
  return (
    <div data-cy="navbar">
      <Link to={"/:Home"} data-cy="navbar-home-link">Home</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */} Cart:0</span>
      {isAuth ? <button data-cy="navbar-login-logout-button" onClick={logout}>Logout</button> : <Link to ={"/login"}><button data-cy="navbar-login-logout-button">Login</button></Link>}
    </div>
  );
};

export default Navbar;
