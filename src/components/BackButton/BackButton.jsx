import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button/Button';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button name="Back" onClick={() => navigate(-1)} />
  );
};

export default BackButton;