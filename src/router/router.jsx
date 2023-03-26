import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  HOME_PATH,
  SIGN_UP_PATH,
  SIGN_IN_PATH,
  PROFILE_PATH,
  MOVIES_PATH,
  MOVIE_PATH,
  CREATE_PATH,
  IMPORT_MOVIES_PATH,
} from './route-types';

const Home = lazy(() => import('../pages/Home/Home'));
const SignIn = lazy(() => import('../pages/SignIn/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const Profile = lazy(() => import('../pages/Profile/Profile'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Movie = lazy(() => import('../pages/Movie/Movie'));
const CreateMovie = lazy(() => import('../pages/CreateMovie/CreateMovie'));
const ImportMovies = lazy(() => import('../pages/ImportMovies/ImportMovies'));

const AppLayout = lazy(() => import('../components/Layouts/AppLayout'));

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: HOME_PATH,
        element: <Home />,
      },
      {
        path: SIGN_IN_PATH,
        element: <SignIn />,
      },
      {
        path: SIGN_UP_PATH,
        element: <SignUp />,
      },
      {
        path: PROFILE_PATH,
        element: <Profile />,
      },
      {
        path: MOVIES_PATH,
        element: <Movies />,
      },
      {
        path: MOVIE_PATH,
        element: <Movie />,
      },
      {
        path: CREATE_PATH,
        element: <CreateMovie />,
      },
      {
        path: IMPORT_MOVIES_PATH,
        element: <ImportMovies />,
      },
    ]
  },
]);
