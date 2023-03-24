import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME_PATH } from '../../router/route-types';
import useLogout from '../../hooks/useLogout';

const Signed = () => {
  const logout = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(HOME_PATH);
  }

  return (
    <div>
      <div>You are already signed </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Signed;