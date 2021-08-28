import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import GoogleFonts from 'react-google-fonts';

const App : React.FC = () => {
  return (
    <React.Fragment>
      <Navbar/>
    </React.Fragment>
  );
}

export default App;
