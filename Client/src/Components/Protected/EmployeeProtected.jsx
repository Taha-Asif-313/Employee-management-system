import React, { useContext } from "react";
import EmployeeLogin from "../../Pages/EmployeeLogin";
import { EmployeeContext } from "../../Context/employeeContext";
import { useEffect } from "react";

const EmployeeProtected = (props) => {
  // Constants
  const { Component } = props;
  const { isEmployeeLogin } = useContext(EmployeeContext);

  // Return the component if logedIn
  return isEmployeeLogin ? <Component /> : <EmployeeLogin />;
};

export default EmployeeProtected;
