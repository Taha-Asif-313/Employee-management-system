// src/AuthContext.jsx
import React, { createContext, useEffect, useState } from "react";

// Create the context
const EmployeeContext = createContext();

// Create the provider component
const EmployeeProvider = ({ children }) => {
  const [isEmployeeLogin, setisEmployeeLogin] = useState(() => {
    const savedData = localStorage.getItem("EmployeeData");
    return savedData ? true : false;
  });
  let [EmployeeData, setEmployeeData] = useState(() => {
    const savedData = localStorage.getItem("EmployeeData");
    return savedData ? JSON.parse(savedData) : null;
  });
  let [employeeTasks, setemployeeTasks] = useState(()=>{
    const savedData = localStorage.getItem("EmployeeTasks")
    return savedData ? JSON.parse(savedData) : []
  });

  useEffect(() => {
    localStorage.setItem("EmployeeData", JSON.stringify(EmployeeData));
  }, [EmployeeData]);

 


  

  return (
    <EmployeeContext.Provider
      value={{
        isEmployeeLogin,
        setisEmployeeLogin,
        EmployeeData,
        setEmployeeData,
        employeeTasks,
        setemployeeTasks,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };
