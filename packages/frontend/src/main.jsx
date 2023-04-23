import React from 'react';
import ReactDOM from 'react-dom/client';

import { ReviewApp } from './reviewers/components/ReviewApp';
import './styles.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { purpleTheme } from './theme';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={purpleTheme}>
        <CssBaseline />
        <ReviewApp />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
