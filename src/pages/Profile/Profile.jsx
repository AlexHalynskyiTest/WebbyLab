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
          <div className="block mb-2 text-xl font-medium text-gray-900">Your profile</div>
          <div>Name: {name}</div>
          <div>E-mail: {email}</div>
          <LogoutButton/>
        </div>
      }
    </div>
  );
};

export default Profile;
