import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import { store } from './app/store'
import { Provider } from 'react-redux'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFC7C7',
      contrastText: '#F6F6F6',
    },
    secondary: {
      main: '#8785A2',
      contrastText: '#fff',
    },
    background: {
      default: '#F6F6F6',
    },
    typography: {
      color: '#F6F6F6',
    },
    background: {
      paper: '#F8FAFC',
    },
    text: {
      primary: '#3D4852',
      secondary: '#F6F6F6',
    },
  }
});

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>

);
