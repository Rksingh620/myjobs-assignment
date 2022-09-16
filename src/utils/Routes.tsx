import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Jobs from "../Pages/Jobs";
import Login from "../Pages/Login";
import { AuthContext } from "./context/AuthContext";

type Props = {};

const RootRoute = (props: Props) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Routes>
      {!isLoggedIn ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      ) : (
        <>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </>
      )}
    </Routes>
  );
};

export default RootRoute;
