import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import GoogleFonts from 'react-google-fonts';
import { BrowserRouter } from 'react-router-dom';
import AppRouter  from './routes/AppRouter';
import { Box, CssBaseline } from '@material-ui/core';

const App : React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Box>
          <AppRouter/>
        </Box>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
