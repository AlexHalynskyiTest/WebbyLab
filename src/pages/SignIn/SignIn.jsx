import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import signInSchema from './validationSchema';
import useLogin from '../../api/useLogin';
import { useAuth } from '../../hooks/useAuth';
import Signed from '../../components/Signed/Signed';
import { SIGN_UP_PATH, MOVIES_PATH } from '../../router/route-types';

const SignIn = () => {
  const login = useLogin();
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async (values) => {
    await login(values)
    navigate(MOVIES_PATH)
  }

  return (
    isAuth
      ? <Signed />
      : <div>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={signInSchema}
          onSubmit={handleSignIn}
        >
          <Form>
            <div>
              <div>Name</div>
              <Field name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <div>E-mail</div>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <div>Password</div>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" >
              Login
            </button>
          </Form>
        </Formik>
        <div>Don't have an account?</div>
        <Link to={SIGN_UP_PATH}>Please sign up</Link>
      </div>
  );
};

export default SignIn;
