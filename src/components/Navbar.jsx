import React from "react";

const Navbar = () => {
  return (
    <div className="absolute w-full z-40">
      <div className="w-11/12 md:w-4/5 m-auto p-5 flex justify-between items-center text-gray-800">
        <h1 className="text-4xl font-semibold">GSAP Animation</h1>
        <ul className="flex items-center space-x-5">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
