import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { reqEmployee } from "./apiRequest/apiRequest";
import Declarations from "./presentational/Declarations";
import "./EmployeeSelected.scss";
import Loader from "./presentational/Loader";

const EmployeeSelected = () => {
  const [DNI, setDNI] = useSearchParams();
  const [employee, setEmployee] = useState(null);
  const [DNIError, setDNIError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let query = DNI.get("dni") ? `&dni=${DNI.get("dni")}` : "";
    reqEmployee(setEmployee, query, setDNIError,setLoading);
  }, []);
  return (
    <>
      {DNIError && (
        <div className="modal">{DNIError.message}, vuelva a buscar</div>
      )}
      <h2 className="employee-title">Employee info</h2>
      { loading && <Loader/>}
      {employee  ? (
        <>
          <div className="employee-data">
            <ul className="employee-data__emp">
              <li>{`Employee Name : ${employee.employee_name}`}</li>
              <li>{`Employee Code : ${employee.employee_code}`}</li>
              <li>{`Tasks: ${employee.tasks || "empty"}`}</li>
            </ul>

            <ul className="employee-data__contr">
              <li>{`Contractor Name : ${employee.contractor_name}`}</li>
              <li>{`Contractor Code : ${employee.contractor_code}`}</li>
            </ul>
          </div>

          <Declarations declarations={employee.declaration_sites} />
        </>
      ) : (
        <h3 className="employee-title">
          Error : User didn´t found or doesn´t exist
        </h3>
      )}
    </>
  );
};

export default EmployeeSelected;
