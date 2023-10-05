import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Feed from "./feed/Feed";
import ProtectedRoute from "./ProtectedRoute";
import MyNetwork from "./network/MyNetwork";
import Jobs from "./jobs/Jobs";
import UserProfile from "./UserProfile.jsx/UserProfile";

const Home = () => {
  return (
    <div className='main-container'>
      <Navbar/>
      <div className="content">
    
      
      <Routes>
      <Route path="/" element={<Feed/>} />
        <Route path="/mynetwork" element={<ProtectedRoute Component={<MyNetwork/>}/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/messages" element={<ProtectedRoute Component={<div>msg section</div>}/>}/>
        <Route path="/notifications" element={<ProtectedRoute Component={<div>notification section</div>}/>}/>
        <Route path="/business" element={<div>business section</div>}/>
        <Route path='/profile' element={<ProtectedRoute Component={<UserProfile/>}/>}/>
        
      </Routes>
      </div>
    </div>
  );
};

export default Home;
