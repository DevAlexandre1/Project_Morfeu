import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ControlAcessProvider} from './context/HandleControlAcess'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <ControlAcessProvider>
        <App />    
    </ControlAcessProvider>
  </React.StrictMode>
);

reportWebVitals();
