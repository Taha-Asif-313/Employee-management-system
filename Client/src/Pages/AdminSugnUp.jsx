import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../Components/Loading";
// import { AuthContext } from "../Context/authContext";
import toast from "react-hot-toast";
 
 const AdminSignUp = () => {
    const navigate = useNavigate();
    // States
    const [inputs, setinputs] = useState({
      fullname: "",
      username: "",
      email: "",
      password: "",
      bio: "",
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
          "http://localhost:5000/api/user/signup",
          inputs
        );
        if (res.data.success) {
          toast.success(res.data.message);
          navigate("/login");
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
    <div className="main-employees flex w-full">
    <>
      <div class="flex justify-center items-center min-h-screen w-full px-2 py-10 ">
        <div class="container mx-auto my-4 px-4 lg:px-20">
          <div class="w-full p-8 my-4 md:px-12  mr-auto rounded-2xl shadow-2xl bg-zinc-950">
            <div class="flex">
              <h1 class="font-bold text-red-600 text-5xl">Register the admin</h1>
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
                name="username"
                value={inputs.username}
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
                type="email"
                placeholder="Gender"
                name="email"
                value={inputs.email}
                onChange={onChaneHandler}
              />
              <input
                required
                class="w-full bg-zinc-900 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Country"
                name="email"
                value={inputs.email}
                onChange={onChaneHandler}
              />
              <input
                required
                class="w-full bg-zinc-900 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="CNIC"
                name="email"
                value={inputs.email}
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
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  </div>
   )
 }
 
 export default AdminSignUp