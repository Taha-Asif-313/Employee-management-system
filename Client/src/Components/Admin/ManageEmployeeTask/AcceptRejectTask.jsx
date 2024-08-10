import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../../Context/adminContext";
import { IoIosClose } from "react-icons/io";
import toast from "react-hot-toast";
import axios from "axios";
import { FcApprove } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";

const AcceptRejectTask = ({ Show, Close, employeeId }) => {
  const { submittedTasks, setsubmittedTasks } = useContext(AdminContext);

  // Use useEffect to get all pending Tasks
  if (employeeId !== "") {
    useEffect(() => {
      const fetchDataget = async () => {
        try {
          await axios
            .get(
              `http://localhost:5000/api/admin/all-pending-tasks/${employeeId}`,
              {
                withCredentials: true,
              }
            )
            .then((res) => {
              console.log(res.data);
              setsubmittedTasks(res.data);
            });
        } catch (error) {
          toast.error(error.message);
          console.log(error);
        }
      };

      return () => {
        fetchDataget();
      };
    }, [employeeId]);
  }

  // Reject Task function
  const rejectTask = async (taskId) => {
    if (taskId === "") return toast.error("taskId is emplty");
    try {
      axios
        .post(`http://localhost:5000/api/admin/reject-task/${taskId}`, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.success) {
            toast.success(res.data.message);
            window.location.reload();
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      toast.error(error.response ? error.response.data.message : error.message);
    }
  };

  // Accept Task function
  const acceptTask = async (taskId) => {
    if (taskId === "") return toast.error("taskId is emplty");
    try {
      axios
        .post(`http://localhost:5000/api/admin/accept-task/${taskId}`, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.success) {
            toast.success(res.data.message);
            window.location.reload();
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      toast.error(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <>
      <div
        className={`assign-task w-[80%] h-screen overflow-hidden justify-center items-center top-0 right-0 absolute  ${
          Show ? "flex" : "hidden"
        } bg-[#0000008a] `}
      >
        <div className="form w-[80%] relative p-10 bg-zinc-950 flex flex-col justify-center items-center gap-3 rounded-xl border-2 border-red-600">
          <IoIosClose
            onClick={() => {
              Close(!Show);
            }}
            className="text-4xl m-3 absolute top-0 right-0 text-red-600"
          />
          <h1 className="text-2xl font-semibold py-5 text-red-600 ">
            Sumbitted tasks are :
          </h1>
          <ul className="max-h-44 overflow-y-auto w-full ">
            {submittedTasks.length === 0 ? (
              <div className="text-center text-white">
                No tasks are submitted
              </div>
            ) : (
              submittedTasks.map((task) => {
                return (
                  <li class="my-3 py-3 px-5 sm:py-4 rounded-lg bg-zinc-950 border-t border-b border-red-600">
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
                          Url : <span className="text-white">{task.url}</span>
                        </p>
                        <p class="text-sm text-red-600 truncate ">
                          TaskId :{" "}
                          <span className="text-white">{task.taskId}</span>
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <div className="btns-options text-sm font-light flex items-center gap-2">
                          <div className="accept flex gap-1 items-center bg-green-600 p-2 rounded-md">
                            <FcApprove
                              className="cursor-pointer text-2xl"
                              onClick={() => {
                                acceptTask(task.taskId);
                              }}
                            />
                            Accept
                          </div>
                          <div className="reject flex gap-1 items-center bg-red-600 p-2 rounded-md">
                            <FcDisapprove
                              className="cursor-pointer text-2xl"
                              onClick={() => {
                                rejectTask(task.taskId);
                              }}
                            />
                            Reject
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
    </>
  );
};

export default AcceptRejectTask;
