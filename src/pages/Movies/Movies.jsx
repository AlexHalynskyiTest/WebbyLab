import React from 'react';
import NotSigned from '../../components/NotSigned/NotSigned';
import { useAuth } from '../../hooks/useAuth';

const Movies = () => {
  const { isAuth } = useAuth();

  return (
    <div>
      {!isAuth && <NotSigned />}
      {isAuth &&
        <div>
          Movies
        </div>
      }
    </div>
  );
};

export default Movies;
