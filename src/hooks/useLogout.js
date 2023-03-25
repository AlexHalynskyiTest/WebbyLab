import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/slices/userSlice';
import { logoutMovies } from '../redux/slices/moviesSlice';

const useLogout = () => {
  const dispatch = useDispatch();
  const [, , removeCookie] = useCookies([]);

  const logout = () => {
    removeCookie('accessToken');
    dispatch(removeUser());
    dispatch(logoutMovies());
  };

  return logout;
};

export default useLogout;
