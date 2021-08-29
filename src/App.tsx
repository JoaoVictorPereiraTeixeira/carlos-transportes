import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import GoogleFonts from 'react-google-fonts';
import { BrowserRouter } from 'react-router-dom';

const App : React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
