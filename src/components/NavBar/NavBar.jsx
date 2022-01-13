import React, { useState } from "react";
import { Link, useNavigate,Outlet } from "react-router-dom";
import "./NavBar.scss";




const NavBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <>
    <nav className="nav">
     <div className="nav-logo">
       <img src="https://media.glassdoor.com/sqll/4546366/exactian-squarelogo-1629373007014.png" alt="" />
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
