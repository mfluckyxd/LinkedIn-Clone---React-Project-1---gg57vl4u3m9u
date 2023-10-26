import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Feed from "./feed/Feed";
import ProtectedRoute from "./ProtectedRoute";
import MyNetwork from "./network/MyNetwork";
import Jobs from "./jobs/Jobs";
import MyProfile from "./userProfile/MyProfile";
import Notification from "./notification/Notification";
import Premium from "./premium/Premium";
import FeatureUnavailable from "../Errors/FeatureUnavailable";
import UserProfiles from "./userProfile/UserProfiles";

const Home = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route
            path="/mynetwork"
            element={<ProtectedRoute Component={<MyNetwork />} />}
          />
          <Route path="/jobs" element={<Jobs />} />
          <Route
            path="/messages"
            element={<ProtectedRoute Component={<FeatureUnavailable />} />}
          />
          <Route
            path="/notifications"
            element={<ProtectedRoute Component={<Notification />} />}
          />
          <Route path="/business" element={<FeatureUnavailable />} />
          <Route
            path="/profile"
            element={<ProtectedRoute Component={<MyProfile />} />}
          />
            <Route path="/profile/:id" element={<ProtectedRoute Component={<UserProfiles/>}/>} />

          
          <Route path="/premium" element={<Premium />} />
          <Route path="/unavailable" element={<FeatureUnavailable />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
