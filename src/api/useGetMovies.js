import { useDispatch } from 'react-redux';
import useApi from './api';
import { MOVIES_PATH } from './endpoints';
import { moviesLoading, setMovies } from '../redux/slices/moviesSlice';

const useGetMovies = () => {
  const api = useApi();
  const dispatch = useDispatch();

  const getMovies = async () => {
    if (!api) {
      console.error('Not authorized');
      return;
    }
    dispatch(moviesLoading());
    const { data } = await api.get(MOVIES_PATH);
    dispatch(setMovies(data.data));
  }
  return getMovies;
};

export default useGetMovies;
