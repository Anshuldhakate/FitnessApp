// src/components/AllRoutes.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/HomePage";
import ProfileUpdate from "../Pages/Profile";
import LogWorkout from "../Pages/Log";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<ProfileUpdate/>} />
      <Route path="/logs" element={<LogWorkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default AllRoutes;