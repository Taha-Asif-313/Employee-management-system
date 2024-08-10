import React, { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";
import { AdminContext } from "../../../Context/adminContext";
import axios from "axios";
import AssignTask from "./DialogBoxes/AssignTask";
import FireEmployee from "./DialogBoxes/FireEmployee";
import EditEmployee from "./DialogBoxes/EditEmployee";

const EmployeeList = () => {
  // Sates
  const [assignTask, setassignTask] = useState(false);
  const [fireEmployee, setfireEmployee] = useState(false);
  const [editEmployee, seteditEmployee] = useState(false);
  const [employeeDeleteId, setemployeeDeleteId] = useState("");
  const [employeeAssignId, setemployeeAssignId] = useState("");

  //Context
  const { employeeList, setemployeelist } = useContext(AdminContext);

  // UseEffect use to fetch all employees
  useEffect(() => {
    const fetchDataget = async () => {
      try {
        await axios
          .get("http://localhost:5000/api/admin/all-employees", {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            setemployeelist(res.data);
          });
      } catch (error) {
        toast.error(error.message);
      }
    };

    return () => {
      fetchDataget();
    };
  }, []);

  // Functions

  return (
    <>
      <EditEmployee Close={seteditEmployee} Show={editEmployee} />
      <FireEmployee
        EmployeeId={employeeDeleteId}
        Close={setfireEmployee}
        Show={fireEmployee}
      />
      <AssignTask
        EmployeeId={employeeAssignId}
        Close={setassignTask}
        Show={assignTask}
      />
      <div class="w-full p-4 sm:px-16 rounded-t-lg ">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-5xl text-center font-bold mx-auto my-5 leading-none text-zinc-950">
            Employees
          </h5>
        </div>
        <div class="flow-root">
          <ul className="flex flex-col justify-center gap-2">
            {employeeList.length === 0 ? (
              <div className="text-center">No employees found</div>
            ) : (
              employeeList.map((employee) => {
                return (
                  <li class="py-2 border-l-4 border-red-600 px-5 sm:py-3 rounded-lg bg-zinc-950">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="https://avatar.iran.liara.run/public/boy"
                          alt="Neil image"
                        />
                      </div>
                      <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-red-600 truncate">
                          {employee.fullname}
                        </p>
                        <p class="text-sm text-white truncate ">
                          {employee.email}
                        </p>
                        <p class="text-sm text-white truncate ">
                          Id : <span>{employee._id}</span>
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <div className="btns-options text-xl flex items-center gap-2">
                          <div className="submit-task"></div>
                          <MdAssignmentAdd
                            className="cursor-pointer"
                            onClick={() => {
                              setassignTask(!assignTask);
                              setemployeeAssignId(employee._id);
                            }}
                          />
                          <FaEdit
                            className="cursor-pointer"
                            onClick={() => {
                              seteditEmployee(!editEmployee);
                            }}
                          />
                          <MdDelete
                            className="cursor-pointer"
                            onClick={() => {
                              setfireEmployee(!fireEmployee);
                              setemployeeDeleteId(employee._id);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
