import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '@/layouts/App';

function Client() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Client;
