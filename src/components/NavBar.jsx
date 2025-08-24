import React from "react";
import logo from "../assets/logo.png";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center h-16 mx-30">
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

      <section className="flex justify-between items-center h-[80vh] mx-30">
        <div>
          <p
            className="text-2xl text-green-500 font-bold
          "
          >
            Students management platform
          </p>
          <p className="text-4xl font-bold text-green-900 mt-4">
            STUDENTSYNC <br />
            MANAGEMENT WEB APP
          </p>
          <p className="text-2xl text-yellow-600 font-semibold mt-2">
            Student for the academic year 2025/2026
          </p>
        </div>
        <div className="">
          <img className="h-40" src={pic1} alt="" />
          <div className="flex">
            {" "}
            <img className="h-30" src={pic2} alt="" />
            <img className="h-30" src={pic3} alt="" />
            <img className="h-30" src={pic4} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
