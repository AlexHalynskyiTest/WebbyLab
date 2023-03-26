import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import signInSchema from './validationSchema';
import useLogin from '../../api/useLogin';
import { useAuth } from '../../hooks/useAuth';
import Signed from '../../components/Signed/Signed';
import { SIGN_UP_PATH, MOVIES_PATH } from '../../router/route-types';
import { signInInputFields } from './formFields';
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import StyledLink from "../../ui/StyledLink/StyledLink";

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
              {signInInputFields.map(props => <Input {...props} />)}
            </div>
            <Button name="Login" type="submit" />
          </Form>
        </Formik>
        <div>Don't have an account?</div>
        <StyledLink to={SIGN_UP_PATH} text="Please sign up" />
      </div>
  );
};

export default SignIn;
