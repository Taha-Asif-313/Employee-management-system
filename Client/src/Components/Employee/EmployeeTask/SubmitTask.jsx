import React from "react";
import { IoIosClose } from "react-icons/io";

const SubmitTask = ({ onChange, ShowSubmit, SetShow, Value, SubmitTask }) => {
  return (
    <div
      className={`h-screen w-full left-0 justify-center items-center ${
        ShowSubmit ? "flex" : "hidden"
      } fixed top-0 z-10 bg-[#09090a] bg-opacity-10`}
    >
      <form className="py-10 px-5 rounded-lg relative bg-zinc-950 text-white w-[30%] flex flex-col gap-3 justify-center items-center">
        <IoIosClose
          onClick={() => SetShow(false)}
          className="absolute top-0 right-0 m-4 text-3xl cursor-pointer"
        />
        <h1 className="text-xl">Want to submit!</h1>
        <form className="w-full flex justify-center">
          <input
            type="url"
            placeholder="Enter the Url to verify the project"
            value={Value}
            onChange={onChange}
            required
            className="py-3 px-3 rounded-md border-2 border-green-600 w-[80%] my-5 text-sm bg-zinc-900"
          />
        </form>
        <button
          type="submit"
          onClick={SubmitTask}
          className="bg-green-600 py-2 px-4 rounded-md text-sm"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default SubmitTask;
