import useApi from './api';
import { IMPORT_MOVIES_PATH } from './endpoints';

const useImportMovies = () => {
  const api = useApi();

  const importMovies = async (file) => {
    if (!api) {
      console.error('Not authorized');
      return;
    }
    const formdata = new FormData();
    formdata.append("movies", file, file.name);
    const { data } = await api.post(IMPORT_MOVIES_PATH, formdata);
    return data
  }
  return importMovies;
};

export default useImportMovies;
