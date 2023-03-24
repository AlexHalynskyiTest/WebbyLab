import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/slices/userSlice';

const useLogout = () => {
  const dispatch = useDispatch();
  const [, , removeCookie] = useCookies([]);

  const logout = () => {
    removeCookie('accessToken');
    dispatch(removeUser());
  };

  return logout;
};

export default useLogout;
