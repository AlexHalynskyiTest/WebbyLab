import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import NotSigned from '../../components/NotSigned/NotSigned';
import useGetCurMovie from '../../api/useGetCurMovie';
import BackButton from '../../components/BackButton/BackButton';
import useDeleteMovie from '../../api/useDeleteMovie';
import { MOVIES_PATH } from '../../router/route-types';

const Movie = () => {
  const { isAuth } = useAuth();
  const { movieId } = useParams();
  const getCurMovie = useGetCurMovie();
  const deleteMovie = useDeleteMovie();
  const navigate = useNavigate();

  useEffect( () => {
    getCurMovie(movieId);
    // eslint-disable-next-line
  }, []);

  const handleDelete = async () => {
    await deleteMovie(movieId);
    navigate(MOVIES_PATH);
  }

  const curMovie = useSelector(state => state.curMovie.curMovie);
  const { title, year, format, actors } = curMovie || {};

  return (
    <div>
      {!isAuth && <NotSigned />}
      {isAuth &&
        <div>
          <BackButton />
          <div>Title: "{title}"</div>
          <div>Year: {year}</div>
          <div>Format: {format}</div>
          <div>Actors</div>
          <ul>
            {actors?.map(actor => <li>{actor.name}</li>)}
          </ul>
          <button onClick={handleDelete}>Delete movie</button>
        </div>
      }
    </div>
  );
};

export default Movie;
