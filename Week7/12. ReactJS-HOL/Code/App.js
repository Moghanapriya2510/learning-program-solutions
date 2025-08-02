// src/App.js
import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <h1>Flight Ticket Booking App</h1>
      {isLoggedIn ? (
        <>
          <UserPage />
          <LogoutButton onClick={handleLogout} />
        </>
      ) : (
        <>
          <GuestPage />
          <LoginButton onClick={handleLogin} />
        </>
      )}
    </div>
  );
}

export default App;