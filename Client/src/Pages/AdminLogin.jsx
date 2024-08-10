import React, { useContext, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import {AdminContext} from "../Context/adminContext"
import Loading from "../Components/Loading"
import toast from "react-hot-toast";
import axios from "axios";

const AdminLogin = () => {
  const [inputs, setinputs] = useState({ email: "", password: "" });
  const [loading, setloading] = useState(false);

  // Use context of amdin
  const { setisAdminLogin, setAdminData } = useContext(AdminContext);

  const navigate = useNavigate();

  // Functions
  const onChaneHandler = (e) => {
    setinputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const fetchDataPost = async (e) => {
    e.preventDefault();
    setloading(true); // corrected from setloading to setLoading
    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        inputs,
        { withCredentials: true }
      );
      if (res.data.success) {
        setisAdminLogin(true); // corrected from setisLogin to setIsLogin
        toast.success(res.data.message);
        navigate("/admin-pannel");
        setAdminData(res.data); // corrected from setuserData to setUserData
        localStorage.setItem("AdminData", JSON.stringify(res.data));
      } else {
        toast.error(res.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response ? error.response.data.message : error.message); // improved error handling
    } finally {
      setloading(false);
    }
  };

  if(loading) return <Loading/>

  return (
    <>
      <div className="login-page w-full h-screen px-5 flex justify-center items-center bg-red-50">
        <Link to={"/"}>
          <IoMdArrowBack className="text-2xl lg:text-4xl font-semibold absolute top-0 left-0 mx-10 my-5 text-red-600" />
        </Link>
        <form className="login-form flex flex-col w-full items-center justify-center gap-3 px-5 py-5 lg:w-[30%] rounded-lg bg-white border-2 border-black">
          <h1 className="lg:text-4xl text-3xl py-5 font-bold text-red-600">
            Admin
          </h1>
          <input
            name="email"
            onChange={onChaneHandler}
            value={inputs.email}
            required
            placeholder="Enter email"
            type="text"
            className="field rounded-lg py-2 px-4 border-2 border-black outline-none w-full"
          />
          <input
            name="password"
            onChange={onChaneHandler}
            value={inputs.password}
            required
            placeholder="Enter password"
            type="text"
            className="field rounded-lg py-2 px-4 border-2 border-black w-full"
          />
          <button
            onClick={fetchDataPost}
            className="bg-red-600 text-white font-semibold rounded-lg w-full py-2 px-5 text-center"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
