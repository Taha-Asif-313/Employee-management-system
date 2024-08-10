import React from "react";
import DashboardStats from "./DashboardStats";
import EmployeeList from "./EmployeeList";
import AssignTask from "./DialogBoxes/AssignTask";
import FireEmployee from "./DialogBoxes/FireEmployee";
import EditEmployee from "./DialogBoxes/EditEmployee";

const AdminDashboard = () => {
  return (
    <>
   
      <div className="main  w-[80%] overflow-auto">
      <div class="w-full flex flex-col justify-center items-center overflow-hidden h-auto">
        <EditEmployee/>
        <FireEmployee/>
        <AssignTask/>
        <DashboardStats />
        <EmployeeList />
      </div>
      </div>
    </>
  );
};

export default AdminDashboard;
