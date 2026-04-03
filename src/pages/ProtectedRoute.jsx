import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, allowedRole, children }) => {
  // 1. Check if user is logged in at all
  if (!user) {
    // Redirect to the correct login page based on the intended role
    return <Navigate to={allowedRole === 'admin' ? '/admin-login' : '/student-login'} />;
  }

  // 2. Check if the user's role matches the required role
  if (user.role !== allowedRole) {
    // If a student tries to enter /admin-dashboard, send them to an unauthorized page
    return <Navigate to="/unauthorized" />;
  }

  // 3. If everything is correct, show the page
  return children;
};

export default ProtectedRoute;