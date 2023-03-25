import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import NotSigned from '../../components/NotSigned/NotSigned';

const Movie = () => {
  const { isAuth } = useAuth();
  const { movieId } = useParams();

  const movies = useSelector(state => state.movies.movies);
  const { title, year, format, actors } = movies.find(movie => movie.id === Number(movieId)) || {};

  return (
    <div>
      {!isAuth && <NotSigned />}
      {isAuth &&
        <div>
          <div>Title: "{title}"</div>
          <div>Year: {year}</div>
          <div>Format: {format}</div>
          <div>Actors</div>
          <ul>
            {actors?.map(actor => <li>{actor}</li>)}
          </ul>
        </div>
      }
    </div>
  );
};

export default Movie;
