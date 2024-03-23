import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MainTheme } from './styles/MainTheme';
import { MainSource } from './context/mainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainTheme />
      <MainSource>
        <App />
      </MainSource>
  </React.StrictMode>
);
