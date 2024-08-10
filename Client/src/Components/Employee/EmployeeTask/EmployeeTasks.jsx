import React, { useContext, useState } from "react";
import { EmployeeContext } from "../../../Context/employeeContext";
import axios from "axios";
import toast from "react-hot-toast";
import useFetch from "../../../Hooks/useFetch";
import Loading from "../../Loading";
import TaskCard from "./TaskCard";
import SubmitTask from "./SubmitTask";

const EmployeeTasks = () => {
  // States
  const [showSubmit, setShowSubmit] = useState(false);
  const [taskId, setTaskId] = useState("");
  const [url, seturl] = useState("");

  // Use EmployeeContext to get EmployeeData
  const { EmployeeData } = useContext(EmployeeContext);

  // Submit task function
  const submitTask = async (taskId) => {
    if (url === "") return toast.error("please fill the field");
    try {
      const res = await axios.post(
        `http://localhost:5000/api/employee/complete-task/${taskId}`,
        { url },
        {
          withCredentials: true,
        }
      );
      toast.success(res.data.message);
      setShowSubmit(false);
      window.location.reload();
    } catch (error) {
      toast.error(error.response ? error.response.data.message : error.message);
    }
  };

  // Use useFetch Custom hook
  const { data, loading, error } = useFetch(
    `http://localhost:5000/api/employee/all-tasks/${EmployeeData.userId}`
  );

  // If loading
  if (loading) return <Loading />;

  // If error
  if (error) toast.error(error);

  return (
    <>
      <SubmitTask
        ShowSubmit={showSubmit}
        SetShow={setShowSubmit}
        Value={url}
        onChange={(e) => {
          seturl(e.target.value);
        }}
        SubmitTask={() => {
          submitTask(taskId);
        }}
      />
      <div className="tasks my-5">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-4xl lg:text-6xl text-center font-bold mx-auto my-10 leading-none text-zinc-950">
            Today's tasks
          </h5>
        </div>
        <div className="flow-root">
          <ul className="flex flex-col justify-center gap-2 items-center">
            {data.length === 0 ? (
              <div>No tasks found</div>
            ) : (
              data.map((taskData) => (
                <TaskCard
                  Id={taskData._id}
                  Date={taskData.date}
                  Title={taskData.title}
                  Task={taskData.task}
                  SetTask={setTaskId}
                  ShowSubmit={setShowSubmit}
                />
                // <div
                //   key={taskData._id}
                //   className="w-[70%] px-10 my-4 py-6 bg-green-100 text-black rounded-lg shadow-zinc-950"
                // >
                //   <div className="flex justify-between items-center">
                //     <span className="font-medium text-green-600">
                //       {taskData.date}
                //     </span>
                //   </div>
                //   <div className="mt-2">
                //     <a
                //       className="text-2xl text-zinc-950 font-bold hover:text-green-600"
                //       href="#"
                //     >
                //       {taskData.title}
                //     </a>
                //     <p className="mt-2 w-[90%] text-zinc-800">{taskData.task}</p>
                //     <div className="btns mt-5 w-full flex justify-end">
                //       <button
                //         className="px-4 py-2 bg-green-600 text-gray-100 font-medium rounded"
                //         onClick={() => {
                //           setTaskId(taskData._id);
                //           setShowSubmit(true);
                //         }}
                //       >
                //         Complete
                //       </button>
                //     </div>
                //   </div>
                // </div>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default EmployeeTasks;
