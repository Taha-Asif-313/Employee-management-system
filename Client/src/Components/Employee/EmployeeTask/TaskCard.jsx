import React from "react";

const TaskCard = ({ Id, Date, Title, Task, SetTask, ShowSubmit }) => {
  return (
    <div
      key={Id}
      className="w-[70%] px-10 my-4 py-6 bg-green-100 text-black rounded-lg shadow-zinc-950"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-green-600">{Date}</span>
      </div>
      <div className="mt-2">
        <a
          className="text-2xl text-zinc-950 font-bold hover:text-green-600"
          href="#"
        >
          {Title}
        </a>
        <p className="mt-2 w-[90%] text-zinc-800">{Task}</p>
        <div className="btns mt-5 w-full flex justify-end">
          <button
            className="px-4 py-2 bg-green-600 text-gray-100 font-medium rounded"
            onClick={() => {
              SetTask(Id);
              ShowSubmit(true);
            }}
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
