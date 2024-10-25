import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + '/api/user/admin', { email, password });

      if (response.data && response.data.sucess) {  
        setToken(response.data.token);
        toast.success("Login successful!");
      } else {
        const errorMessage = response.data?.message || "Login failed";
        toast.error(errorMessage);
      }
    } catch (error) {
       
      toast.error(error.response?.data?.message || "An error occurred during login");
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-sm rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Email Address
            </p>
            <input
              type="email"
              placeholder="your@email.com"
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              className="rounded-md w-full px-3 py-2 border broder-gray-300 outline-none"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
