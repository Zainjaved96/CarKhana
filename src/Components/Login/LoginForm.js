import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    // Login form aligned by Flexbox and Dividing Width
    <div className="text-gray-900 font-poppins relative bg-white">
      <div className=" px-5 py-24 mx-auto bg-white">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Login
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed  text-muted text-base text-center">
            Already Have an Account? <Link to="/signup">Singup</Link> here.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto ">
          <div className="flex flex-wrap m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-900"
                >
                  Password
                </label>
                <input
                  type="Password"
                  id="password"
                  name="password"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <p className=" text-sm text-muted">Forgot Password?</p>
              <p className=" text-sm text-muted">
                Already Have a Acccount? <Link to="/singup">Singup</Link>
              </p>
            </div>

            <div className="p-2 w-full">
              <button className="flex mx-auto text-white  border-0 py-2 px-8 focus:outline-none bg-gray-800 hover:bg-gray-900 rounded text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
