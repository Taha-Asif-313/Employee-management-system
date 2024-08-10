import React, { useContext, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { EmployeeContext } from "../Context/employeeContext";
import EmployeeProfile from "../Components/Employee/EmployeeProfile";
import EmployeeTasks from "../Components/Employee/EmployeeTask/EmployeeTasks";
import LogoutEmployee from "../Components/Employee/LogoutEmployee";

const EmployeePannel = () => {
  const [showLogout, setshowLogout] = useState(false);

  const { EmployeeData } = useContext(EmployeeContext);

  return (
    <div className="lg:px-20 py-10">
      <LogoutEmployee Show={showLogout} Close={setshowLogout} />

      <div className="shadow-inner shadow-zinc-950 relative rounded-md p-5">
        <IoIosLogOut
          onClick={() => {
            setshowLogout(!showLogout);
          }}
          className="absolute top-0 right-0 text-2xl lg:text-4xl font-black m-5"
        />
        <EmployeeProfile
          Name={EmployeeData.fullname}
          Age={20}
          Country={EmployeeData.country}
          PhoneNumber={EmployeeData.phone_no}
          Salary={EmployeeData.salary}
          Email={EmployeeData.email}
          Role={EmployeeData.role}
        />
        <EmployeeTasks />
      </div>
    </div>
  );
};

export default EmployeePannel;
