import useApi from './api';
import { MOVIES_PATH } from './endpoints';

const useCreateMovie = () => {
  const api = useApi();

  const createMovie = async (movie) => {
    if (!api) {
      console.error('Not authorized');
      return;
    }
    const { data } = await api.post(MOVIES_PATH, movie);
    return data
  }
  return createMovie;
};

export default useCreateMovie;
