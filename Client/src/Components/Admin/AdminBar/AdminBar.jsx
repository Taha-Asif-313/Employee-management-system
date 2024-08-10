import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AdminBar = () => {
  const navigate = useNavigate();

  const listItems = [
    { name: "Dashboard", url: "/admin-pannel" },
    { name: "Add Employee", url: "/admin-pannel/add-new-employees" },
    { name: "Manage Employee Tasks", url: "/admin-pannel/manage-tasks" },
  ];

  const logOut = async () => {
    try {
      await axios
        .get(`http://localhost:5000/api/admin/logout`, {
          withCredentials: true,
        })
        .then((res) => {
          localStorage.removeItem("AdminData");
          navigate("/");
          toast.success(res.data.message);
        });
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      {
        <div className=" w-full lg:w-[20%] flex flex-col justify-between py-10 gap-10 z-30 px-4 rounded-r-xl border-r border-red-600 fixed bg-zinc-950 left-0 top-0  h-screen">
          <div className="links flex flex-col justify-center gap-4">
            <h1 className="text-red-600 text-center text-2xl font-bold pb-10">
              Admin Controllers
            </h1>
            {listItems.map((item) => {
              return (
                <Link
                  to={item.url}
                  className="list-items active:bg-red-600 text-center list-none py-2 px-5 hover:bg-red-600 rounded-xl transition-all text-white border-2 border-red-600 cursor-pointer text-sm"
                >
                  <li>{item.name}</li>
                </Link>
              );
            })}
          </div>
          <div className="btns flex flex-col items-center justify-center gap-2">
            <Link
              onClick={logOut}
              className="singup-btn border-2 border-red-600 text-white w-[60%] font-semibold text-center rounded-xl py-2 px-5 transition-all hover:bg-red-600 cursor-pointer"
            >
              Logout
            </Link>
          </div>
        </div>
      }
    </>
  );
};

export default AdminBar;
