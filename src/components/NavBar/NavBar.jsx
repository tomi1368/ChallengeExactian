import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { logOut } from "./functions/functions";
import "./NavBar.scss";




const NavBar = () => {
  const navigate = useNavigate()
  return (
    <>
    <nav className="nav">
     <div className="nav-logo">
       <Link to="/">
       <img src="https://media.glassdoor.com/sqll/4546366/exactian-squarelogo-1629373007014.png" alt="exactian-logo" />
       </Link>
     </div>
     <ul className="nav-links">
       { localStorage.getItem("user-token") && <Link to={"/employee"}><li>Employee</li></Link>}
       { localStorage.getItem("user-token") ?   <button className="nav-links__logout" onClick={()=>logOut(navigate)}>Log Out</button> : <Link to={"/login"} ><li>Login</li></Link>}
     </ul>
    </nav>
    <Outlet/>
    </>
  );
};

export default NavBar;
