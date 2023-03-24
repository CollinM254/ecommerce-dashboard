import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../logic/context/AuthContext';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
