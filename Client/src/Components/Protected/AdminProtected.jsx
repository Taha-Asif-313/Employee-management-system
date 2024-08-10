import React, { useContext } from "react";
import { AdminContext } from "../../Context/adminContext";
import AdminLogin from "../../Pages/AdminLogin";

const AdminProtected = (props) => {
  // Constants
  const { Component } = props;
  const { isAdminLogin } = useContext(AdminContext);

  // Return the component if logedIn
  return isAdminLogin ? <Component /> : <AdminLogin />;
};

export default AdminProtected;
