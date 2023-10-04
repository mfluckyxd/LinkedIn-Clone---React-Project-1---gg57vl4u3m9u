import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();
  const isLoggedIn = JSON.parse(sessionStorage.getItem('loginStatus'));

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, []); 

  if (!isLoggedIn) {
    
    return <div>Redirecting to login...</div>;
  }

  return <div>{Component}</div>;
};

export default ProtectedRoute;
