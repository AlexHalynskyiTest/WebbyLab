import React from 'react';
import NotSigned from '../../components/NotSigned/NotSigned';
import { useAuth } from '../../hooks/useAuth';
import StyledLink from '../../ui/StyledLink/StyledLink';
import { MOVIES_PATH } from '../../router/route-types';

const Home = () => {
  const { isAuth, name } = useAuth();

  return (
    <div>
      {!isAuth &&
        <div>
          <div className="block mb-2 text-xl font-medium text-gray-900">Welcome to WebbyLab Movies!</div>
          <NotSigned />
        </div>}
      {isAuth &&
        <div>
          <div className="block mb-2 text-xl font-medium text-gray-900">Dear {name},</div>
          <div>Welcome to WebbyLab Movies!</div>
          <StyledLink text="Start work with movies" to={MOVIES_PATH} />
        </div>}
    </div>
  );
};

export default Home;
