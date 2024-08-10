// src/AuthContext.jsx
import React, { createContext, useState } from "react";

// Create the context
const AdminContext = createContext();

// Create the provider component
const AdminProvider = ({ children }) => {

  const [isAdminLogin, setisAdminLogin] = useState(() => {
    const AdminLogin = localStorage.getItem("AdminData");
    return AdminLogin ? true : false;
  });
  let [AdminData, setAdminData] = useState(() => {
    const AdminData = localStorage.getItem("AdminData");
    return AdminData ? JSON.parse(AdminData) : null;
  });
  let [employeeList, setemployeelist] = useState([]);
  const [submittedTasks, setsubmittedTasks] = useState([])

  return (
    <AdminContext.Provider
      value={{ isAdminLogin, setisAdminLogin, AdminData, setAdminData, employeeList, setemployeelist , submittedTasks, setsubmittedTasks}}
    >
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminProvider };
