import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero-section flex justify-center items-center w-full h-screen px-24 ">
        <div className="circle bg-black h-screen w-[50%] absolute left-0 top-0 rounded-se-[500px]"></div>
        <div className="left flex flex-col gap-5 w-[40%] text-white z-10">
          <div className="heading text-6xl font-bold">
            Employee <span className="text-green-600">Management</span>{" "}
            <span className="text-red-600">System</span>
          </div>
          <p className="text-sm font-normal">
            An Employee Management System is a comprehensive solution designed
            to streamline HR processes, improve workforce productivity, and
            manage employee data efficiently.
          </p>
          <div className="btns flex gap-5 items-center">
            <a
              href="/admin-login"
              className="admin py-1 rounded-lg px-6 bg-red-600 text-white"
            >
              Admin
            </a>
            <a
              href="/employee-login"
              className="employee py-1 rounded-lg px-6 bg-green-600 text-white"
            >
              Employee
            </a>
          </div>
        </div>
        <div className="right w-[60%] h-full flex justify-end items-center">
          <img className="w-[80%] hue-rotate-[130deg]" src="/hero.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
