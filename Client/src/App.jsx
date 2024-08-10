import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import AdminSignUp from "./Pages/AdminSignUp";
import AdminLogin from "./Pages/AdminLogin";
import AdminPannel from "./Pages/AdminPannel";
import EmplyeeLogin from "./Pages/EmployeeLogin";
import EmplyeePannel from "./Pages/EmployeePannel";
import AddNewEmployee from "./Pages/AddNewEmployee";
import ManageTasks from "./Pages/ManageTasks";
import Dashboard from "./Pages/Dashboard";
import AdminProtected from "./Components/Protected/AdminProtected";
import EmployeeProtected from "./Components/Protected/EmployeeProtected";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin-signup" element={<AdminSignUp />} />
        <Route path="/Admin-login" element={<AdminLogin />} />
        <Route
          path="/Admin-pannel"
          element={<AdminProtected Component={AdminPannel} />}
        >
          <Route index element={<AdminProtected Component={Dashboard} />} />
          <Route
            path="add-new-employees"
            element={<AdminProtected Component={AddNewEmployee} />}
          />
          <Route
            path="manage-tasks"
            element={<AdminProtected Component={ManageTasks} />}
          />
        </Route>
        <Route path="/Employee-login" element={<EmplyeeLogin />} />
        <Route
          path="/Employee-pannel"
          element={<EmployeeProtected Component={EmplyeePannel} />}
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
