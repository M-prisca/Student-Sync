import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center h-16 mx-8">
        <div className="flex  ">
          <img className="h-6 " src={logo} alt="Logo" />
          <p className="ml-2 text-green-900 font-bold">STUDENTSYNC</p>
        </div>
        <div className="flex gap-8 text-lg font-semibold">
          <button className="text-green-500 rounded-lg hover:border-4 px-4 ">
            Home
          </button>
          <button className="hover:border-4 px-2 rounded-lg">
            Add Student
          </button>
          <button className="text-green-500 hover:border-4 px-2 rounded-lg">
            All Students
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
