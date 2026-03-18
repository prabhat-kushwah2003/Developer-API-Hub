import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: email,
          password: password,
        },
      );

      const token = response.data.token;

      login(token);

      navigate("/");
    } catch (error) {
      console.log("login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-blue-600 text-3xl">&lt;/&gt;</span>
        Developer API Hub
      </h1>

      {/* Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-2">Welcome back</h2>

        <p className="text-gray-500 mb-6">
          Enter your credentials to access your account
        </p>

        {/* Email */}
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          placeholder="name@example.com"
          value={email}
          className="w-full border p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          className="w-full border p-3 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Sign in
        </button>

        {/* Footer */}
        <p className="text-sm mt-6 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Create account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
