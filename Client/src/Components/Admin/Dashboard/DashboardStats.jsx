import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineTeam } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlinePendingActions } from "react-icons/md";
const DashboardStats = () => {
  const [employees, setemployees] = useState(0)
  const [salaries, setsalaries] = useState(0)
  const [pendingTasks, setpendingTasks] = useState(0)
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        await axios
          .get("http://localhost:5000/api/admin/all-employees", {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            setemployees(res.data);
          });
      } catch (error) {
        toast.error(error.message);
      }
    };
    const fetchSalaries = async () => {
      try {
        await axios
          .get("http://localhost:5000/api/admin/total-salaries", {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            setsalaries(res.data);
          });
      } catch (error) {
        toast.error(error.message);
      }
    };
    const fetchPendingTasks = async () => {
      try {
        await axios
          .get("http://localhost:5000/api/admin/total-pending-tasks", {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            setpendingTasks(res.data);
          });
      } catch (error) {
        toast.error(error.message);
      }
    };
 
    return () => {
      fetchEmployees();
      fetchSalaries();
      fetchPendingTasks();
    }
  }, [])
  
  return (
    <>
      <div class="w-full bg-white border-b-2 rounded-lg border-red-600">
        <div class="p-4  rounded-lg ">
          <dl class="grid  grid-cols-2 gap-8 mx-auto sm:grid-cols-3 lg:p-8">
            <div class="flex border-l-4 border-purple-600 flex-row gap-2 items-center justify-between bg-purple-50 py-5 px-10 rounded-lg">
              <AiOutlineTeam className=" text-3xl text-purple-600" />
              <div className="data">
                <div className="heading font-medium text-purple-600">Total Employees</div>
                <dt class=" text-black text-xl font-extrabold">{employees.length}</dt>
              </div>
            </div>
            <div class="flex border-l-4 border-green-600 flex-row gap-2 items-center justify-between bg-green-50 py-5 px-10 rounded-lg">
              <GiMoneyStack className=" text-3xl text-green-600" />
              <div className="data">
                <div className="heading font-medium text-green-600">Total Salaries</div>
                <dt class=" text-black text-xl font-extrabold">{salaries} Rs</dt>
              </div>
            </div>
            <div class="flex border-l-4 border-red-600 flex-row gap-2 items-center justify-between bg-red-50 py-5 px-10 rounded-lg">
              <MdOutlinePendingActions className=" text-3xl text-red-600" />
              <div className="data">
                <div className="heading font-medium text-red-600">Total Pending Tasks</div>
                <dt class=" text-black text-xl font-extrabold">{pendingTasks}</dt>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default DashboardStats;
