import * as Yup from 'yup';

const movieSchema = Yup.object().shape({
  title: Yup.string()
    .required('Required')
    .test('empty', 'Empty field is not allowed', val => val?.split(' ').filter(Boolean).length > 0),
  year: Yup.number()
    .min(1880, 'Minimum 1880 year')
    .max(2030, 'Maximum 2030 year')
    .required('Required'),
  format: Yup.string(),
  actors: Yup.array()
    .min(1, 'Must include minimum 1 actor')
    .required('Must have actors')
    .of(Yup.string()
      .matches(
        /^[a-zA-Z\s,-]*$/,
        "Only letters, comma and hyphen allowed in actor name"
      )
      .test('len', 'Actor name must contain at least 1 letter', val => val?.length > 0)
      .test('empty', 'Empty field is not allowed', val => val?.split(' ').filter(Boolean).length > 0)),
});

export default movieSchema
