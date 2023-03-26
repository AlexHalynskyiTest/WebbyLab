import React from 'react';
import { SIGN_IN_PATH } from '../../router/route-types';
import StyledLink from '../../ui/StyledLink/StyledLink';

const NotSigned = () => {
  return (
    <div>
      <div>You are not authorized.</div>
      <StyledLink text="Please sign in to continue" to={SIGN_IN_PATH} />
    </div>
  );
};

export default NotSigned;