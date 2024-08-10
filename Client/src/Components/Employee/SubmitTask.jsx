import axios from "axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { EmployeeContext } from "../../Context/employeeContext";

const SubmitTask = ({Show,Close,SubmitStatus}) => {
    
  return (
    <div
      className={`assign-task fixed z-10 w-full h-screen overflow-hidden justify-center items-center top-0 right-0  ${
        Show ? "flex" : "hidden"
      } bg-[#0000008a] `}
    >
      <div className="form w-[40%] relative p-10 bg-zinc-950 flex flex-col justify-center items-center gap-3 rounded-xl border-2 border-green-600">
        <IoIosClose
          onClick={() => {
            Close(!Show);
          }}
          className="text-4xl m-3 absolute top-0 right-0 text-green-600"
        />
        <h1 className="text-xl py-5 text-white ">
          Are you confirm that you complete this task?
        </h1>
        <input type="url" placeholder="Enter the Url to verify the project" className="py-3 px-3 rounded-md border border-red-600 w-full" />

        <button
          onClick={()=>{SubmitStatus(true)}}
          className="bg-green-600 py-2 px-4 text-white rounded-lg text-sm "
        >
          Confirm
        </button>
      </div>
    </div>
  )
}

export default SubmitTask