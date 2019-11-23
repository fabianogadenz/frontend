import React from 'react';
import logo from './assets/logo_utf.png'
import Routes from './routes';
import NavbarComponent from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
    <NavbarComponent />
    <div className="container">
      <img src={logo} alt="AirCnc" width="40%"/>

      <div className="content">
        <Routes />
        
      </div>
    </div>
    </>
  );
}

export default App;
