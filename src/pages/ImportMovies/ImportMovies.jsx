import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotSigned from '../../components/NotSigned/NotSigned';
import { useAuth } from '../../hooks/useAuth';
import BackButton from '../../components/BackButton/BackButton';
import useImportMovies from '../../api/useImportMovies';
import { MOVIES_PATH } from '../../router/route-types';
import Button from '../../ui/Button/Button';
import Modal from '../../ui/Modal/Modal';

const ImportMovies = () => {
  const { isAuth } = useAuth();
  const importMovies = useImportMovies();
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const ref = useRef();
  const [importStatus, setStatus] = useState(false);
  const [error, setError] = useState('');

  const handleImportFile = (event) => {
    const importedFile = ref.current.files[0]
    const { type, size } = importedFile
    if (type !== 'text/plain') {
      setStatus(0)
      setFile(null)
      setError('Wrong type of file. Only .txt files are acceptable.')
      event.target.value = null
    } else if (size === 0) {
      setStatus(0)
      setFile(null)
      setError('Wrong content of file, file could not be empty.')
      event.target.value = null
    } else {
      setFile(importedFile);
      setError('')
    }
  }

  const handleSaveFile = async () => {
    if (file) {
      const { status } = await importMovies(file);
      setStatus(status);
    }
  }

  const handleOkay = () => {
    importStatus && navigate(MOVIES_PATH)
    setStatus(false)
  }

  return (
    <div>
      {!isAuth && <NotSigned />}
      {isAuth &&
        <div>
          <div><BackButton /></div>
          <div><input type="file" ref={ref} onChange={handleImportFile} /></div>
          <div><Button name="Save movies" onClick={handleSaveFile}/></div>
          <Modal
            isShown={typeof importStatus === 'number'}
            onClose={handleOkay}
            header='Import status'
            text={`Your import of movies was ${importStatus ? 'successful' : 'unsuccessful'}. ${error}`}
            noButtonName='Okay'
          />
        </div>
      }
    </div>
  );
};

export default ImportMovies;
