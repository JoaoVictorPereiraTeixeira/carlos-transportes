import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import GoogleFonts from 'react-google-fonts';
import { BrowserRouter } from 'react-router-dom';
import AppRouter  from './routes/AppRouter';
import { Box, CssBaseline } from '@material-ui/core';
import Footer from './components/Footer';

const App : React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Navbar/>
        <Box>
          <AppRouter/>
        </Box>
        <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
