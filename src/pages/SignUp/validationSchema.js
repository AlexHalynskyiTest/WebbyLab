import * as Yup from 'yup';
import signInSchema from '../SignIn/validationSchema';

const signUpSchema = signInSchema.shape({
  confirmPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export default signUpSchema
