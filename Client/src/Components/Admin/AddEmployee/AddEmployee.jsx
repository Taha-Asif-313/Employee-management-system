import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../Components/Loading";
// import { AuthContext } from "../Context/authContext";
import toast from "react-hot-toast";

const AddEmployee = () => {
  const navigate = useNavigate();
  // States
  const [inputs, setinputs] = useState({
  fullname:"",
phone_no:"",
email:"",
password:"",
country:"",
role:"",
CNIC:"",
salary:0
  });
  const [loading, setloading] = useState(false);

  // const { setisLogin } = useContext(AuthContext);

  // Functions
  const onChaneHandler = (e) => {
    setinputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const fetchDataPost = async (e) => {
    e.preventDefault();
    setloading(true); // corrected from setloading to setLoading
    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/add-employee",
        inputs,
        {withCredentials:true}
      );
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response ? error.response.data.message : error.message);
    } finally {
      setloading(false);
    }
  };

  if (loading) return <Loading />;
  return (
    <div className="main-employees flex w-[80%]">
      <>
        <div class="flex justify-center items-center min-h-screen w-full px-2 py-10 ">
          <div class="container mx-auto my-4 px-4 lg:px-20">
            <div class="w-full p-8 my-4 md:px-12  mr-auto rounded-2xl shadow-2xl bg-zinc-950">
              <div class="flex">
                <h1 class="font-bold text-red-600 text-5xl">Add Employee</h1>
              </div>
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  required
                  class="w-full bg-zinc-900 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Full Name"
                  name="fullname"
                  value={inputs.fullname}
                  onChange={onChaneHandler}
                />
                <input
                  required
                  class="w-full bg-zinc-900 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Phone Number"
                  name="phone_no"
                  value={inputs.phone_no}
                  onChange={onChaneHandler}
                />
                <input
                  required
                  class="w-full bg-zinc-900 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={inputs.email}
                  onChange={onChaneHandler}
                />
                <input
                  required
                  class="w-full bg-zinc-900 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Salary"
                  name="salary"
                  value={inputs.salary}
                  onChange={onChaneHandler}
                />
                   <input
                  required
                  class="w-full bg-zinc-900 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Role"
                  name="role"
                  value={inputs.role}
                  onChange={onChaneHandler}
                />
                <input
                  required
                  class="w-full bg-zinc-900 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Country"
                  name="country"
                  value={inputs.country}
                  onChange={onChaneHandler}
                />
                <input
                  required
                  class="w-full bg-zinc-900 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="CNIC"
                  name="CNIC"
                  value={inputs.CNIC}
                  onChange={onChaneHandler}
                />
                <input
                  required
                  class="w-full bg-zinc-900 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={inputs.password}
                  onChange={onChaneHandler}
                />
              </div>

              <div class="my-2 w-full lg:w-1/4">
                <button
                  onClick={fetchDataPost}
                  class="mt-5 text-center text-md font-bold tracking-wide bg-red-600 text-white py-2 px-4 rounded-full w-full 
                    focus:outline-none focus:shadow-outline"
                >
                  Add Employee
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AddEmployee;
