import React from 'react';
import NotSigned from '../../components/NotSigned/NotSigned';
import { useAuth } from '../../hooks/useAuth';

const Movie = () => {
  const { isAuth } = useAuth();

  return (
    <div>
      {!isAuth && <NotSigned />}
      {isAuth &&
        <div>
          Movie
        </div>
      }
    </div>
  );
};

export default Movie;
