import React, { useState } from "react";
import "./authentication.css";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { signUp } from "Redux/Reducers-Redux/authSlice";
function SignUpForm({children}) {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const dispatch=useDispatch();
  function clickHandler(e) {
    //  to prevent initial refreshing of the page
    e.preventDefault();
dispatch(signUp(details));
  }
  const [viewPassword, setViewPassword] = useState(false);
  return (
    <>
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center mt-2.5">
        Sign-Up
      </h2>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          // placeholder="First Name"
          value={details.name}
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
        />
      </div>

      <div className="relative mb-4">
        <label htmlFor="userName" className="leading-7 text-sm text-gray-600">
          UserName
        </label>
        <input
          type="username"
          name="username"
          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter Your Email"
          value={details.username}
          onChange={(e) => setDetails({ ...details, username: e.target.value })}
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="userName" className="leading-7 text-sm text-gray-600">
          Password
        </label>
        <input
          type={!viewPassword ? "password" : "text"}
          name="password"
          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          value={details.password}
          placeholder="Enter Your Password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
        />
      </div>
      {!viewPassword && (
        <i
          className="fa fa-eye text text-center mb-1"
          aria-hidden="true"
          onClick={(e) => setViewPassword(!viewPassword)}
        ></i>
      )}
      {viewPassword && (
        <i
          className="fas fa-eye-slash text text-center mb-1"
          onClick={(e) => setViewPassword(!viewPassword)}
        ></i>
      )}

      <button
        className="btn btn-outline-pri  py-2 px-8  rounded text-lg"
        onClick={(e) => clickHandler(e)}
      >
        Sign-Up
      </button>
    {children}
      {/* <Link to="/logIn-Page" className="link-btn text-center text-base">
        Already have account?
        <i className="fas fa-chevron-right text-accent"></i>
      </Link> */}
    </>
  );
}

export { SignUpForm };
