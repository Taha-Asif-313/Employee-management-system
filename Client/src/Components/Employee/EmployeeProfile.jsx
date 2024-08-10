import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";
import { FaAddressBook } from "react-icons/fa";

const EmployeeProfile = ({
  Name,
  Age,
  Country,
  Role,
  Salary,
  PhoneNumber,
  Email,
}) => {
  return (
    <>
      <div class="w-full">
        <div class="lg:p-8 w-full bg-white">
          <div class="flex justify-between items-center">
            <div class="w-full flex gap-5">
              <div className="pic w-[50%]">
              <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-inner shadow-zinc-950 flex items-center justify-center">
                <img src="https://avatar.iran.liara.run/public/boy" alt="" />
                
              </div>
              </div>
           
              <div className="details w-[50%] flex flex-col justify-center items-center">
              <h1 class="text-4xl text-center font-medium text-green-600">
              {Name}, <span class="font-light text-gray-500">{Age}</span>
            </h1>
            <p class="mt-4 text-xl text-center text-green-600 font-normal">
             <span className="text-gray-600">{Role}</span>
            </p>
              </div>
            
            </div>
          </div>
         
          <ul class="mt-16 flex justify-center items-center gap-6 text-center">
           
            <li class="font-normal flex items-center gap-2 text-green-600 mt-3">
              <IoMdMail className="text-2xl"/>  <span className="text-gray-600">{Email}</span>
            </li>
            <li class="font-normal flex items-center gap-2 text-green-600 mt-3">
              <IoMdContact className="text-2xl"/>  <span className="text-gray-600">{PhoneNumber}</span>
            </li>
            <li class="font-normal flex items-center gap-2 text-green-600 mt-3">
              <GiMoneyStack className="text-2xl"/>  <span className="text-gray-600">{Salary}Rs</span>
            </li>
            <li class="font-normal flex items-center gap-2 text-green-600 mt-3">
              <FaAddressBook className="text-2xl"/>  <span className="text-gray-600">{Country}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default EmployeeProfile;
