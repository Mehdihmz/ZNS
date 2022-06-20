import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './Pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/main.scss'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

