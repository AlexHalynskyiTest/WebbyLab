import React from 'react';
import { Link } from 'react-router-dom';
import { SIGN_IN_PATH } from '../../router/route-types';

const NotSigned = () => {
  return (
    <div>
      You are not authorized. Please,&nbsp;
      <Link to={SIGN_IN_PATH}>sign in to continue</Link>
    </div>
  );
};

export default NotSigned;