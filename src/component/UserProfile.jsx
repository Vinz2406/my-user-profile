import React, { useContext } from 'react';
import UserContext from '../Contexts/UserContext';

function UserProfile() {
  const { isOnline, setIsOnline } = useContext(UserContext);

  return (
    <div>
      <h1>User is : {isOnline ? 'En ligne' : 'Hors ligne'}</h1>

      <button onClick={() => setIsOnline(!isOnline)}>
        Click to change user status
      </button>
    </div>
  );
}

export default UserProfile;
