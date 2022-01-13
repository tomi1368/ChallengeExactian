import React, { useState } from "react";
import { employeeSearch } from "./functions/functions";
import "./Employee.scss";
import { useNavigate } from "react-router-dom";
import {
  errorHandler,
  schema,
  initialValue,
} from "./formSettings/formSettings";
import { Formik, Field, Form } from "formik";

const Employee = () => {
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
          <Formik
            initialValues={initialValue}
            validationSchema={schema}
            onSubmit={(v) => employeeSearch(v, navigate, setErrorDNI)}
          >
            {({ errors }) => {
              return (
                <Form className="search-employee__box__form">
                  <div className="search-employee__box__form__dni">
                    <label htmlFor="dni">DNI</label>
                    <Field
                      name="dni"
                      id="dni"
                      placeholder="Enter employee DNI"
                      type="text"
                    />
                    {errorHandler(errors).dni()}
                  </div>
                  <button type="submit">Search</button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Employee;
