import { useState } from "react";
import axios from "axios";

const LoginPage = ({ onLoginSuccess  }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = async () => {
  try {
    const res = await axios.post("/api/auth/login", {
      email,
      password,
    });
    localStorage.setItem("token", res.data.token);
    onLoginSuccess(res.data.token);
    setStatus("✅ You are already logged in.");
  } catch (err) {
    console.log("🔴 Login Error:", err);
    setStatus("❌ " + (err.response?.data?.message || "Login failed."));
  }
};


  return (
    <div className="text-white space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer active:bg-blue-300"
      >
        Login
      </button>
      <p>{status}</p>
    </div>
  );
};

export default LoginPage;
