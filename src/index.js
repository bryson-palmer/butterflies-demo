import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logo from './logo.png'
import { Canvas } from '@react-three/fiber';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className='App-header'>
      <img src={logo} alt='butterfly logo' className='App-logo' />
    </header>
    <Canvas>
      <App />
    </Canvas>
  </React.StrictMode>
);