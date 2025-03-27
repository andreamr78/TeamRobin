import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('id_token'); // Use id_token for consistency
  const location = useLocation();

  if (token && location.pathname === '/') {
    return <Navigate to="/home" />; // Redirect to homepage if logged in
  }

  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;