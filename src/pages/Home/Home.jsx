import React from 'react';
import NotSigned from '../../components/NotSigned/NotSigned';
import { useAuth } from '../../hooks/useAuth';

const Home = () => {
  const { isAuth } = useAuth();

  return (
    <div>
      <div>Home</div>
      {!isAuth && <NotSigned />}
    </div>
  );
};

export default Home;
