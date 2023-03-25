import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import useRegister from '../../api/useRegister';
import { useAuth } from '../../hooks/useAuth';
import signUpSchema from './validationSchema';
import Signed from '../../components/Signed/Signed';
import { MOVIES_PATH } from '../../router/route-types';

const SignUp = () => {
  const register = useRegister();
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    await register(values)
    navigate(MOVIES_PATH)
  }

  return (
    isAuth
      ? <Signed />
      : <div>
        <Formik
          initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
          validationSchema={signUpSchema}
          onSubmit={handleRegister}
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
            <div>
              <div>Repeat password</div>
              <Field type="password" name="confirmPassword" />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
            <button type="submit" >
              Create an account
            </button>
          </Form>
        </Formik>
      </div>
  );
};

export default SignUp;
