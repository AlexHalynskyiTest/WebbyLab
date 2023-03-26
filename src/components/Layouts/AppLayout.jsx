import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Navigation/NavBar';

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <div className="sm:ml-64 w-1/5 p-4">
        <Outlet />
      </div>
    </>
  )
};

export default AppLayout;