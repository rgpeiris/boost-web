import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const PublicRoutes: React.FC = () => {
  const isAuth = useAuth();
  return isAuth ? <Navigate replace to="/transaction" /> : <Outlet />;
};

export default PublicRoutes;
