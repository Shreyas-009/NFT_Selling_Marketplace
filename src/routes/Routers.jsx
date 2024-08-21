import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Bid from "../pages/Bid";
import Collection from "../pages/Collection";
import Saved from "../pages/Saved";
import Profile from "../pages/Profile";
import Setting from "../pages/Setting";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/bid" element={<Bid />} />
    </Routes>
  );
};

export default Routers;
