import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../services/authService";
import axiosInstance from "../services/axiosInstance";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("auth/customer/signup", user);
      console.log(response.status);
      // if (response.status === 400) {
      //   setError(response.data.message);
      // } else {
      //   const { access_token } = response.data;
      //   auth.setAuthToken(access_token);
      //   navigate("/");
      //   window.location = "/";
      // }
    } catch (error) {
      // setError(error.response.data.message);

      console.log(error);
    }
  };

  return (
    <div className="container mx-auto my-5 items-center justify-center flex">
      <form className="form-control" onSubmit={handleSubmit}>
        <div className=" ">
          <h1 className="text-center text-xl font-bold text-orange-500 uppercase">
            Sign up
          </h1>
          {error && (
            <div className="alert alert-error rounded-sm container mx-auto my-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-white">{error}</span>
            </div>
          )}
          <label className="label " htmlFor="name">
            <span className="label-text text-md font-bold">Name</span>
          </label>
          <input
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            value={user.name}
            type="name"
            id="name"
            required
            placeholder="Enter your name"
            className="input input-bordered text-sm w-96"
          />
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
          <label className="label " htmlFor="number">
            <span className="label-text text-md font-bold">Phone Number</span>
          </label>
          <input
            onChange={(e) => setUser({ ...user, number: e.target.value })}
            value={user.number}
            type="number"
            id="number"
            required
            placeholder="Enter your number"
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
          Sign Up
        </button>
        <div className="flex dark:text-white flex-col text-center text-sm mt-3 text-gray-950">
          <div className="mt-1">
            <span>Already have account? </span>
            <Link className="hover:underline" to="/signin">
              Sign In
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
