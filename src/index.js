import React from 'react';
import './index.scss'
import ReactDOM from 'react-dom/client';
import Router from './routes/Router';
import { ContextProvider } from './context/ContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ContextProvider>
      <Router />
    </ContextProvider>
  // </React.StrictMode>

);