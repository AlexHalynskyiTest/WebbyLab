import React from 'react';
import useRegister from '../../api/useRegister';
import { useAuth } from '../../hooks/useAuth';
import useLogout from '../../hooks/useLogout';
import useLogin from "../../api/useLogin";
import useGetMovies from "../../api/useGetMovies";

const SignUp = () => {
  const register = useRegister();
  const { isAuth, name, email } = useAuth();
  const logout = useLogout();
  const login = useLogin();
  const getMovies = useGetMovies();

  const user = {
    email: "ohalynskyi7@gmail.com",
    name: "Alex Halynskyi",
    password: "1234",
    confirmPassword: "1234"
  };

  const userLogin = {
    email: "ohalynskyi1@gmail.com",
    name: "Alex Halynskyi",
    password: "1234",
  };

  const handleClick = () => {
    register(user);
  }

  const handleGetMovies = async () => {
    const response = await getMovies();
    console.log(response?.data);
  }

  return (
    isAuth
      ? <div>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <button onClick={() => logout()}>Logout</button>
        <button onClick={handleGetMovies}>Get movies</button>
      </div>
      : <div>
      <div>
        Sign Up
      </div>
      <div>
        <button onClick={handleClick}>
          Register
        </button>
        <button onClick={() => login(userLogin)}>
          Login
        </button>
        <button onClick={handleGetMovies}>Get movies</button>
      </div>
    </div>
  );
};

export default SignUp;
