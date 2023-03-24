import { useDispatch } from 'react-redux';
import useApi from './api';
import { MOVIES_PATH } from './endpoints';

const useGetMovies = () => {
  const api = useApi();
  const dispatch = useDispatch();

  const getMovies = async () => {
    if (!api) {
      console.error('Not authorized');
      return;
    }
    const { data } = await api.get(MOVIES_PATH);
    return data
  }

  return getMovies;
};

export default useGetMovies;
