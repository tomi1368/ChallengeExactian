import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./NavBar.scss";




const NavBar = () => {

  return (
    <>
    <nav className="nav">
     <div className="nav-logo">
       <Link to="/">
       <img src="https://media.glassdoor.com/sqll/4546366/exactian-squarelogo-1629373007014.png" alt="exactian-logo" />
       </Link>
     </div>
     <ul className="nav-links">
       <Link to={"/employee"}><li>Employee</li></Link>
       <Link to={"/login"} ><li>Login</li></Link>
     </ul>
    </nav>
    <Outlet/>
    </>
  );
};

export default NavBar;
