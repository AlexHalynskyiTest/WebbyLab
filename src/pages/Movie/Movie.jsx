import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import NotSigned from '../../components/NotSigned/NotSigned';
import useGetCurMovie from '../../api/useGetCurMovie';
import BackButton from '../../components/BackButton/BackButton';
import useDeleteMovie from '../../api/useDeleteMovie';
import { MOVIES_PATH } from '../../router/route-types';
import Button from '../../ui/Button/Button';
import Modal from '../../ui/Modal/Modal';

const Movie = () => {
  const { isAuth } = useAuth();
  const { movieId } = useParams();
  const getCurMovie = useGetCurMovie();
  const deleteMovie = useDeleteMovie();
  const navigate = useNavigate();
  const [isShown, setShown] = useState(false);

  useEffect( () => {
    getCurMovie(movieId);
    // eslint-disable-next-line
  }, []);

  const handleDelete = async () => {
    setShown(false);
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
          <div>Actors:</div>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            {actors?.map(actor => <li>{actor.name}</li>)}
          </ul>
          <Button name="Delete movie" onClick={() => setShown(true)}/>
          <Modal
            isShown={isShown}
            onClose={() => setShown(false)}
            onAccept={handleDelete}
            header='Delete movie'
            text={`Are you sure you want to delete "${title}"?`}
            yesButtonName='Yes, sure'
            noButtonName='Cancel'
          />
        </div>
      }
    </div>
  );
};

export default Movie;
