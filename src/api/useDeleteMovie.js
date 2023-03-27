import useApi from './api';
import { MOVIE_PATH } from './endpoints';

const useDeleteMovie = () => {
  const api = useApi();

  const deleteMovie = async (movieId) => {
    if (!api) {
      console.error('Not authorized');
      return;
    }
    const { data } = await api.delete(MOVIE_PATH.replace('{movieID}', movieId));
    return data
  }
  return deleteMovie;
};

export default useDeleteMovie;
