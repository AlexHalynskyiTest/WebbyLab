import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import useApi from './api';
import { SESSIONS_PATH } from './endpoints';
import { setUser } from '../redux/slices/userSlice';

const useLogin = () => {
  const [, setCookie] = useCookies([]);
  const api = useApi({ withAuth: false });
  const dispatch = useDispatch();

  const login = async (body) => {
    const { email, password, name } = body;
    const { data } = await api.post(SESSIONS_PATH, { email, password });
    const token = data?.token;
    if (!token) {
      console.error('Missing token');
      return false;
    }
    setCookie('accessToken', token);
    dispatch(setUser({ email, name }));
  };

  return login;
};

export default useLogin;
