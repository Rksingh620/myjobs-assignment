import React, { useContext, useState } from "react";
import { AuthContext } from "../utils/context/AuthContext";
import Button from "./Button";
import caretDown from "../Assets/caret-down.svg";
import { useNavigate } from "react-router-dom";

type Props = {};

const NavBar = (props: Props) => {
  const { isLoggedIn, onLogout, user } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        className="max-w-screen h-[70px] bg-none flex justify-between items-center
      border-b border-light md:mx-[70px] mx-5 "
      >
        <h1
          className="text-2xl text-white font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          My<span className="text-blue">Jobs</span>
        </h1>
        {isLoggedIn ? (
          <div
            className="flex gap-1 cursor-pointer relative"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <div className="h-10 w-10 bg-white rounded-full"></div>
            <img src={caretDown} />
            {showDropdown && (
              <div
                className="absolute top-full right-0 mt-2"
                onClick={onLogout}
              >
                <button className="logout-btn">Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="text-white bg-blue/30 border border-blue rounded  p-3"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login/Signup
          </button>
        )}
      </div>
    </>
  );
};

export default NavBar;
