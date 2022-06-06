import "./App.css";

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import {Navbar} from "./components/Navbar/index"
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import RequiredAuth from "./hoc/RequiredAuth";
function App() {

  const {isAuth} = useContext(AuthContext)
  return (

    <div className="App">
      {
        // Code here
      }
      
      <Navbar></Navbar>
      <Routes>

      <Route path="/Home" element={<RequiredAuth><Home></Home></RequiredAuth>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
