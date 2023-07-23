import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import 'aos/dist/aos.css'; // Import the AOS CSS
import AOS from 'aos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* import {BrowserRouter} from 'react-router-dom' */}
    <App />
  </BrowserRouter>
);
AOS.init(); 
