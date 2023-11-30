import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../services/authService";
import axiosInstance from "../services/axiosInstance";

export default function SignIn() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("auth/customer/signin", user);
      const { access_token } = response.data;
      auth.setAuthToken(access_token);
      // navigate("/");
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth.getAuthToken()) navigate("/");
  }, []);

  return (
    <div className="container mx-auto w-96 h-96 items-center justify-center flex">
      <form className="form-control" onSubmit={handleSubmit}>
        <div className=" ">
          <h1 className="text-center text-xl font-bold text-orange-500 uppercase">
            Sign in
          </h1>
          <label className="label " htmlFor="email">
            <span className="label-text text-md font-bold">Email</span>
          </label>
          <input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
            type="email"
            id="email"
            required
            placeholder="Enter your email"
            className="input input-bordered text-sm w-96"
          />
          <label className="label" htmlFor="password">
            <span className="label-text text-md font-bold">Password</span>
          </label>
          <input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
            type="password"
            id="password"
            required
            placeholder="Enter your password"
            className="input input-bordered text-sm w-96"
          />
        </div>
        <button
          className={`btn bg-gray-900 mt-3 px-5 hover:bg-gray-800 text-white font-bold ${
            user.email && user.password ? "btn-active" : "btn-disabled"
          }`}
          type="submit"
        >
          Sign In
        </button>
        <div className="flex dark:text-white flex-col text-center text-sm mt-3 text-gray-950">
          <Link className="hover:underline" to="/">
            Forget password?
          </Link>
          <div className="mt-1">
            <span>Don't have account? </span>
            <Link className="hover:underline" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
