import React, { useState } from "react";
import { employeeSearch } from "./functions/functions";
import "./Employee.scss";
import { useNavigate } from "react-router-dom";

const Employee = () => {
  const [dni, setDNI] = useState({ dni: "" });
  const [errorDNI, setErrorDNI] = useState(null);
  const navigate = useNavigate();
  
  return (
    <>
      <div className="search-employee">
        {errorDNI && (
          <div className="search-employee__error">{errorDNI.message}</div>
        )}

        <div className="search-employee__box">
          <h2>Search Employee</h2>
          <div className="search-employee__box__form">
            <div className="search-employee__box__form__dni">
              <label htmlFor="dni">DNI</label>
              <input
                name="dni"
                id="dni"
                onChange={(e) => setDNI({ [e.target.name]: e.target.value })}
                placeholder="Enter employee DNI"
                type="number"
              />
            </div>
            <input
              value="Search"
              type="button"
              onClick={() => employeeSearch(dni, navigate,setErrorDNI)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
