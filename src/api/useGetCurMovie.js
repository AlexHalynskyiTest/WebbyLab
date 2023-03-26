import { useDispatch } from 'react-redux';
import useApi from './api';
import { MOVIE_PATH } from './endpoints';
import { curMovieLoading, setCurMovie } from '../redux/slices/curMovieSlice';

const useGetCurMovie = () => {
  const api = useApi();
  const dispatch = useDispatch();

  const getCurMovie = async (movieId) => {
    if (!api) {
      console.error('Not authorized');
      return;
    }
    dispatch(curMovieLoading());
    const { data } = await api.get(MOVIE_PATH.replace('{movieID}', movieId));
    dispatch(setCurMovie(data.data));
  }
  return getCurMovie;
};

export default useGetCurMovie;
