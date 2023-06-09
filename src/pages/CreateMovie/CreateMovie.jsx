import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { IMPORT_MOVIES_PATH, MOVIES_PATH } from '../../router/route-types';
import { useAuth } from '../../hooks/useAuth';
import NotSigned from '../../components/NotSigned/NotSigned';
import movieSchema from './validationSchema';
import useCreateMovie from '../../api/useCreateMovie';
import BackButton from '../../components/BackButton/BackButton';
import Input from '../../ui/Input/Input';
import { createMovieInputFields, formatOptions } from './formFields';
import StyledLink from '../../ui/StyledLink/StyledLink';
import Button from '../../ui/Button/Button';
import Modal from '../../ui/Modal/Modal';

const CreateMovie = () => {
  const { isAuth } = useAuth();
  const createMovie = useCreateMovie();
  const navigate = useNavigate();
  const [creationStatus, setStatus] = useState(false);
  const [error, setError] = useState('');

  const handleCreate = async (values) => {
    const { status, error } = await createMovie(values)
    setStatus(status);
    if (error && error.code === "MOVIE_EXISTS") {
      setError('Movie with such name is already exist. Duplicates are not allowed')
    }
  }

  const handleOkay = () => {
    creationStatus && navigate(MOVIES_PATH)
    setStatus(false)
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
                {createMovieInputFields.map(props => <Input {...props} />)}
              </div>
              <div>
                <div className="block mb-2 text-sm font-medium text-gray-900">Format</div>
                <Field name="format" as="select" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  {formatOptions.map(option => <option value={option}>{option}</option>)}
                </Field>
              </div>
              <div>
                <div className="block mb-2 text-sm font-medium text-gray-900">Actors:</div>
                <FieldArray
                  name="actors"
                >
                  {arrayHelpers => (
                    <div>
                      {values.actors && values.actors.length > 0 ? (
                        values.actors.map((friend, index) => (
                          <div key={index}>
                            <Input name={`actors.${index}`} />
                            <Button name="-" type="button" onClick={() => arrayHelpers.remove(index)} />
                            <Button name="+" type="button" onClick={() => arrayHelpers.push('')} />
                          </div>
                        ))
                      ) : (
                        <Button name="Add an actor" type="button" onClick={() => arrayHelpers.push('')} />
                      )}
                    </div>
                  )}
                </FieldArray>
                <ErrorMessage name="actors" component="div" className="mt-2 text-sm text-red-600" />
              </div>
              <Button type="submit" name="Create"/>
            </Form>
          }
        </Formik>
        <div>
          Have file with movies and want to import?&nbsp;
          <StyledLink text="Import movie" to={IMPORT_MOVIES_PATH}/>
        </div>
        <Modal
          isShown={typeof creationStatus === 'number'}
          onClose={handleOkay}
          header='Creation status'
          text={`Your creation of movie was ${creationStatus ? 'successful' : 'unsuccessful'}. ${error}`}
          noButtonName='Okay'
        />
      </div>
  );
};

export default CreateMovie;
