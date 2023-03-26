import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';
import { HOME_PATH } from '../../router/route-types';
import Button from '../../ui/Button/Button';

const LogoutButton = () => {
  const logout = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(HOME_PATH);
  }

  return (
    <Button name="Logout" onClick={handleLogout} />
  );
};

export default LogoutButton;