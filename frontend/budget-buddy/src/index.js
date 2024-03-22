import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MainTheme } from './styles/MainTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainTheme />
    <App />
  </React.StrictMode>
);
