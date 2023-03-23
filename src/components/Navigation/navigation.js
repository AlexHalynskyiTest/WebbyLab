import {
  HOME_PATH,
  MOVIES_PATH,
  SIGN_UP_PATH,
  SIGN_IN_PATH,
  PROFILE_PATH,
} from '../../router/route-types';
import {
  HomeIcon,
  MoviesIcon,
  ProfileIcon,
  SignInIcon,
  SignUpIcon,
} from './Icons';

export const navigation = [
  {
    name: 'Home',
    link: HOME_PATH,
    Icon: HomeIcon,
  },
  {
    name: 'Movies',
    link: MOVIES_PATH,
    Icon: MoviesIcon,
  },
  {
    name: 'Profile',
    link: PROFILE_PATH,
    Icon: ProfileIcon,
  },
  {
    name: 'Sign In',
    link: SIGN_IN_PATH,
    Icon: SignInIcon,
  },
  {
    name: 'Sign Up',
    link: SIGN_UP_PATH,
    Icon: SignUpIcon,
  },
];
