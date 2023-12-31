import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white my-10 rounded-[4px]"
    >
      <h3 className="mb-4">Login</h3>

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 border-2 p-1 "
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 border-2 p-1"
      />

      <button type="submit" className="btn-primary" disabled={isLoading}>
        Login
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
