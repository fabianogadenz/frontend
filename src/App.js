import React from 'react';
import logo from './assets/logo_utf.png'
import Routes from './routes';
import NavbarComponent from './components/Navbar';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <>
      <NavbarComponent />

      {/* <div className="container">
        <img src={logo} alt="AirCnc" width="40%" />

        
      </div> */}


      <div className="content">
        <Routes />
      </div>
    </>
  );
}

export default App;
