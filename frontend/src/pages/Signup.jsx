import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white my-10 rounded-[4px]"
    >
      <h3 className="mb-4">Sign up</h3>

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 border-2 p-1"
      />

      <label>Password:</label>
      <input
        type="email"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 border-2 p-1"
      />

      <button type="submit" className="btn-primary">
        Sign up
      </button>
    </form>
  );
};

export default Signup;
