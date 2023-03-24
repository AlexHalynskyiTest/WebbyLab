import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';
import { HOME_PATH } from '../../router/route-types';

const LogoutButton = () => {
  const logout = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(HOME_PATH);
  }

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;