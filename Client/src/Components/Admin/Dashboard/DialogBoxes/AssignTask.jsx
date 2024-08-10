import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";



const AssignTask = ({ Show, Close, EmployeeId }) => {
  const navigate = useNavigate()
  const [inputs, setinputs] = useState({title:"",task:""})
  const onChaneHandler = (e)=>{
setinputs({...inputs,[e.target.name]:e.target.value})
console.log(inputs,EmployeeId)
  }
  const assignTaskEmployee = async () => {
    try {
      await axios
        .post(`http://localhost:5000/api/admin/assign-task/${EmployeeId}`,inputs,{withCredentials:true})
        .then((res) => {
          if (res.data.success) {
            toast.success(res.data.message);
            navigate("/admin-pannel");
          } else {
            toast.error(res.data.message);
            navigate("/admin-pannel")
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
        <div className="form w-[40%] relative p-10 bg-zinc-950 flex flex-col justify-center items-center gap-3 rounded-xl border-2 border-red-600">
          <IoIosClose
            onClick={() => {
              Close(!Show);
            }}
            className="text-4xl m-5 absolute top-0 right-0 text-red-600"
          />
          <h1 className="text-4xl text-red-600 font-semibold">Assign Task</h1>
          <input
            className="py-2 px-3 rounded-md w-[90%] outline-none bg-zinc-900 text-white"
            type="text"
            value={inputs.title}
            placeholder="Title"
            name="title"
            onChange={onChaneHandler}
          />
          <textarea
            rows={5}
            className="py-2 px-3 rounded-md w-[90%] outline-none bg-zinc-900 text-white"
            type="text"
            value={inputs.task}
            placeholder="Task"
            name="task"
            onChange={onChaneHandler}
          />
          <button onClick={assignTaskEmployee} className="bg-red-600 py-2 px-4 text-white rounded-lg text-sm w-[90%]">
            Assign Task
          </button>
        </div>
      </div>
    </>
  );
};

export default AssignTask;
