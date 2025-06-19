import { useState } from "react";
import axios from "axios";

const LoginPage = ({ onLoginSuccess  }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = async () => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_BASE}/api/auth/login`, {
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
    <div className="bg-[#1e293b99] border border-white/10 p-6 rounded-xl text-white space-y-6 max-w-md mx-auto">
      <h2 className="text-white text-4xl text-center p-4 mb-10">Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 rounded border border-white/10"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 rounded border border-white/10"
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
      <div className="text-sm text-gray-400 text-center">
            <p>Demo credentials:</p>
            <p>Email: admin@example.com</p>
            <p>Password: 123456</p>
          </div>
    </div>
  );
};

export default LoginPage;
