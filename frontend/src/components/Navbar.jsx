import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white">
      <div className="container px-2 py-5 mx-auto border-2 flex items-center justify-between">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "font-bold" : " font-thin")}
        >
          <h1 className="text-4xl">Workout Buddy</h1>
        </NavLink>
        <nav className="flex items-center">
          <div className="flex items-center gap-3">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
