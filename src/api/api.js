import { useCookies } from 'react-cookie';
import axios from 'axios';

import { BACKEND_URL } from './endpoints';

const useApi = ({ withAuth = true } = {}) => {
  const [cookies] = useCookies(['accessToken']);

  if (withAuth && !cookies.accessToken) {
    return false;
  }

  return axios.create({
    baseURL: BACKEND_URL,
    headers: {
      ...(cookies.accessToken &&
        withAuth && {
          Authorization: cookies.accessToken,
        }),
    },
  });
};

export default useApi;
