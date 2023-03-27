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

  const handleImportFile = () => {
    setFile(ref.current.files[0]);
  }

  const handleSaveFile = async () => {
    const { status } = await importMovies(file);
    setStatus(status);
  }

  const handleOkay = () => {
    setStatus(false)
    navigate(MOVIES_PATH)
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
            text={`Your import of movies was ${importStatus ? 'successful' : 'unsuccessful'}`}
            noButtonName='Okay'
          />
        </div>
      }
    </div>
  );
};

export default ImportMovies;
