import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import useRegister from '../../api/useRegister';
import { useAuth } from '../../hooks/useAuth';
import signUpSchema from './validationSchema';
import Signed from '../../components/Signed/Signed';
import { MOVIES_PATH } from '../../router/route-types';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import { signUpInputFields} from './formFields';

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
              {signUpInputFields.map(props => <Input {...props} />)}
            </div>
            <Button name="Create an account" type="submit" />
          </Form>
        </Formik>
      </div>
  );
};

export default SignUp;
