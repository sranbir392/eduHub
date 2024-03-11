import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContextData } from "../authProvider/AuthContainer";

function AuthLayout() {
  return (
    <>
      <div className="flex dark:bg-gray-700 h-[100vh]">
        {/* <section className="flex flex-1 justify-center items-center flex-col py-10"> */}
          <Outlet />
        {/* </section> */}
        {/* <img
          className="hidden md:block h-screen w-1/2  object-cover bg-no-repeat"
          src="https://media.istockphoto.com/id/1468830962/photo/attractive-young-female-university-student-using-a-laptop-while-studying.webp?b=1&s=170667a&w=0&k=20&c=2xaFv1MhGVNz9gkTgPoAmokrGZwxDsMTO9WqyZ03TkI="
          alt="logo"
        /> */}
      </div>
    </>
  );
}

export default AuthLayout;
