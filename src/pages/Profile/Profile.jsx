import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import NotSigned from '../../components/NotSigned/NotSigned';

const Profile = () => {
  const { isAuth, name, email } = useAuth();

  return (
    <div>
      {!isAuth && <NotSigned />}
      {isAuth &&
        <div>
          <div>Your profile</div>
          <div>Name: {name}</div>
          <div>E-mail: {email}</div>
          <LogoutButton/>
        </div>
      }
    </div>
  );
};

export default Profile;
