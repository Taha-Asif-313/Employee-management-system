import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AdminContext } from "../../../Context/adminContext";
import axios from "axios";
import AcceptRejectTask from "./AcceptRejectTask";

const ManageEmployeeTask = () => {
  //Context
  const { employeeList, setemployeelist } = useContext(AdminContext);

  // States
  const [employeeId, setemployeeId] = useState("");
  const [acceptReject, setacceptReject] = useState(false);

  // Use euseEffect to get all employees
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
        console.log(error);
      }
    };

    return () => {
      fetchDataget();
    };
  }, []);

  return (
    <div className="main-employees flex w-[80%] justify-center p-10 ">
      <AcceptRejectTask
        Show={acceptReject}
        Close={setacceptReject}
        employeeId={employeeId}
      />
      <div className="manage-employees w-full h-auto rounded-lg bg-zinc-950 overflow-y-scroll">
        <h1 className="text-center text-6xl py-10 font-semibold text-red-600 ">
          Pending Tasks
        </h1>
        <div class="w-full p-4 sm:px-16 rounded-t-lg ">
          <div class="flow-root ">
            <ul className="flex flex-col justify-center gap-2">
              {employeeList.length === 0 ? (
                <div className="text-center">No employees found</div>
              ) : (
                employeeList.map((employee) => {
                  return (
                    <li class="py-3 px-5 sm:py-4 rounded-lg bg-zinc-950 border-t border-b border-red-600">
                      <div class="flex items-center">
                        <div class="flex-shrink-0">
                          <img
                            class="w-8 h-8 rounded-full"
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
                            <div className="submit-task">
                              <button
                                onClick={() => {
                                  setacceptReject(true);
                                  setemployeeId(employee._id);
                                }}
                                className="py-1 px-4 bg-red-600 text-sm font-normal rounded-md flex justify-center items-center gap-2"
                              >
                                Submitted Tasks
                                <span className=" w-5 h-5 text-[12px] flex justify-center items-center rounded-full  bg-black ">
                                  {Object.keys(employee.completedTasks).length}
                                </span>
                              </button>
                            </div>
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
      </div>
    </div>
  );
};

export default ManageEmployeeTask;
