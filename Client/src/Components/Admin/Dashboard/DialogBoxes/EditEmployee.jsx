import React from 'react'
import { IoIosClose } from "react-icons/io";

const EditEmployee = ({Show,Close}) => {
  return (
    <>
      <div
        className={`assign-task w-[80%] h-screen overflow-hidden justify-center items-center top-0 right-0 absolute  ${
          Show ? "flex" : "hidden"
        } bg-[#0000008a] `}
      >
        <div className="form w-[80%] relative p-10 bg-zinc-950 flex flex-col justify-center items-center gap-5 rounded-xl border-2 border-red-600">
          <IoIosClose
            onClick={() => {
              Close(!Show);
            }}
            className="text-4xl m-5 absolute top-0 right-0 text-red-600"
          />
          <h1 className="text-3xl text-red-600 font-semibold">Edit Employee Data</h1>
          <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  required
                  class="w-full bg-zinc-900 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Full Name"
                  name="fullname"
                 
                />
                <input
                  required
                  class="w-full bg-zinc-900 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Phone Number"
                  name="username"
               
                />
                <input
                  required
                  class="w-full bg-zinc-900 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                  name="email"
          
                />
                <input
                  required
                  class="w-full bg-zinc-900 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Salary"
                  name="email"
               
                />
                <input
                  required
                  class="w-full bg-zinc-900 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Country"
                  name="email"
              
                />
                <input
                  required
                  class="w-full bg-zinc-900 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="CNIC"
                  name="email"
             
                />
                <input
                  required
                  class="w-full bg-zinc-900 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Password"
                  name="password"
          
                />
              </div>
          <button className="bg-red-600 py-2 px-4 text-white rounded-lg text-sm w-full">
            Edit Employee
          </button>
        </div>
      </div>
    </>
  )
}

export default EditEmployee