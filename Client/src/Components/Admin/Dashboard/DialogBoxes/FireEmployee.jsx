import React from "react";
import { IoIosClose } from "react-icons/io";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FireEmployee = ({ Show, Close, EmployeeId }) => {
  const navigate = useNavigate();
  const deleteEmployee = async () => {
    try {
      await axios
        .delete(`http://localhost:5000/api/admin/fire-employee/${EmployeeId}`)
        .then((res) => {
          if (res.data.success) {
            toast.success(res.data.message);
            navigate("/admin-pannel/add-new-employees");
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
        <div className="form w-[40%] relative p-10 bg-zinc-950 flex flex-col justify-center items-center gap-3 rounded-xl border-2 border-red-600">
          <IoIosClose
            onClick={() => {
              Close(!Show);
            }}
            className="text-4xl m-3 absolute top-0 right-0 text-red-600"
          />
          <h1 className="text-xl py-5 text-white ">
            Are you confirm to fire this employee ?
          </h1>

          <button
            onClick={deleteEmployee}
            className="bg-red-600 py-2 px-4 text-white rounded-lg text-sm w-full"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default FireEmployee;
