import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotSigned from '../../components/NotSigned/NotSigned';
import { useAuth } from '../../hooks/useAuth';
import BackButton from '../../components/BackButton/BackButton';
import useImportMovies from '../../api/useImportMovies';
import { MOVIES_PATH } from '../../router/route-types';

const ImportMovies = () => {
  const { isAuth } = useAuth();
  const importMovies = useImportMovies();
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const ref = useRef();

  const handleImportFile = () => {
    setFile(ref.current.files[0]);
  }

  const handleSaveFile = async () => {
    await importMovies(file);
    navigate(MOVIES_PATH);
  }

  return (
    <div>
      {!isAuth && <NotSigned />}
      {isAuth &&
        <div>
          <div><BackButton /></div>
          <div><input type="file" ref={ref} onChange={handleImportFile} /></div>
          <div><button onClick={handleSaveFile}>Save movies</button></div>
        </div>
      }
    </div>
  );
};

export default ImportMovies;
