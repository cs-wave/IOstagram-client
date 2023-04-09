import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import './index.css';

const root = document.getElementById('root') as HTMLElement;
ReactDOMClient.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
