import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import NotSigned from '../../components/NotSigned/NotSigned';
import { useAuth } from '../../hooks/useAuth';
import useGetMovies from '../../api/useGetMovies';
import { CREATE_PATH } from '../../router/route-types';

const Movies = () => {
  const { isAuth } = useAuth();
  const getMovies = useGetMovies();
  const navigate = useNavigate();

  useEffect( () => {
    getMovies();
    // eslint-disable-next-line
  }, []);

  const movies = useSelector(state => state.movies.movies);

  return (
    <div>
      {!isAuth && <NotSigned />}
      {isAuth &&
        <div>
          <button onClick={() => navigate(CREATE_PATH)}>Create movie</button>
          {movies.map((movie) => <div key={movie.id}><Link to={String(movie.id)}> {movie.title} ({movie.year}) </Link></div>)}
        </div>
      }
    </div>
  );
};

export default Movies;
