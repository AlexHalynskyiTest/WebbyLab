import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import NotSigned from '../../components/NotSigned/NotSigned';
import useGetCurMovie from '../../api/useGetCurMovie';

const Movie = () => {
  const { isAuth } = useAuth();
  const { movieId } = useParams();
  const getCurMovie = useGetCurMovie();

  useEffect( () => {
    getCurMovie(movieId);
    // eslint-disable-next-line
  }, []);

  const curMovie = useSelector(state => state.curMovie.curMovie);
  const { title, year, format, actors } = curMovie || {};

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
            {actors?.map(actor => <li>{actor.name}</li>)}
          </ul>
        </div>
      }
    </div>
  );
};

export default Movie;
