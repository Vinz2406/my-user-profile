import React, { useState } from 'react';
import './App.css';
import UserProfile from './component/UserProfile';
import UserContext from './Contexts/UserContext';

function App() {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <UserContext.Provider value={{ isOnline, setIsOnline }}>
      <div>
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
