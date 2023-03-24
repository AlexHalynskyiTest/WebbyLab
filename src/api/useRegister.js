import { useCookies } from 'react-cookie';
import useApi from './api';
import { USERS_PATH } from './endpoints';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';

const useRegister = () => {
  const [, setCookie] = useCookies([]);
  const api = useApi({ withAuth: false });
  const dispatch = useDispatch();

  const register = async (body) => {
    const { data } = await api.post(USERS_PATH, body);
    const token = data?.token;
    if (!token) {
      console.error('Missing token');
      return false;
    }
    setCookie('accessToken', token);
    const { email, name } = body;
    dispatch(setUser({ email, name }));
  };

  return register;
};

export default useRegister;
