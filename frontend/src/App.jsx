import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";

// components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#f1f1f1] min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={<h2 className="text-4xl font-poppins">About</h2>}
        />
      </Routes>
    </div>
  );
}

export default App;
