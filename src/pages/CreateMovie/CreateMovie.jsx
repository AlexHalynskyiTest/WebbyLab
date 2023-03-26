import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { IMPORT_MOVIES_PATH, MOVIES_PATH } from '../../router/route-types';
import { useAuth } from '../../hooks/useAuth';
import NotSigned from '../../components/NotSigned/NotSigned';
import movieSchema from './validationSchema';
import useCreateMovie from '../../api/useCreateMovie';
import BackButton from '../../components/BackButton/BackButton';

const CreateMovie = () => {
  const { isAuth } = useAuth();
  const createMovie = useCreateMovie();
  const navigate = useNavigate();

  const handleCreate = async (values) => {
    await createMovie(values)
    navigate(MOVIES_PATH)
  }

  return (
    !isAuth
      ? <NotSigned />
      : <div>
        <BackButton />
        <Formik
          initialValues={{ title: '', year: '', format: 'VHS', actors: [''] }}
          validationSchema={movieSchema}
          onSubmit={handleCreate}
        >
          {({values}) =>
            <Form>
              <div>
                <div>Title</div>
                <Field name="title" />
                <ErrorMessage name="title" component="div" />
              </div>
              <div>
                <div>Year</div>
                <Field name="year" />
                <ErrorMessage name="year" component="div" />
              </div>
              <div>
                <div>Format</div>
                <Field name="format" as="select">
                  <option value="VHS">VHS</option>
                  <option value="DVD">DVD</option>
                  <option value="Blu-Ray">Blu-Ray</option>
                </Field>
              </div>
              <div>
                <div>Actors</div>
                <FieldArray
                  name="actors"
                >
                  {arrayHelpers => (
                    <div>
                      {values.actors && values.actors.length > 0 ? (
                        values.actors.map((friend, index) => (
                          <div key={index}>
                            <Field name={`actors.${index}`} />
                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              -
                            </button>
                            <button
                              type="button"
                              onClick={() => arrayHelpers.push('')}
                            >
                              +
                            </button>
                          </div>
                        ))
                      ) : (
                        <button type="button" onClick={() => arrayHelpers.push('')}>
                          Add an actor
                        </button>
                      )}
                    </div>
                  )}
                </FieldArray>
                <ErrorMessage name="actors" component="div" />
              </div>
              <button type="submit" >
                Create
              </button>
            </Form>
          }
        </Formik>
        <div>
          Have file with movies and want to import?&nbsp;
          <Link to={IMPORT_MOVIES_PATH}>Import movie</Link>
        </div>
      </div>
  );
};

export default CreateMovie;
