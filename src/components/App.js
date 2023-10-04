import React, { useEffect } from 'react'
import '../styles/App.css';
import axios from 'axios'
import Signup from './userAuth/Signup';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Login from './userAuth/Login';
import Home from './home/Home';

const App = () => {

  
  return (
    <>
    
      
      <Routes>
        <Route path='*' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />

      </Routes>
    
    </>
  )
}


export default App;
