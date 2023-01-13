import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
    {/* <AuthProvider> */}
      
    <ToastContainer position='top-center'/> 
       <App />
    {/* </AuthProvider> */}
      
  </React.StrictMode>
);

reportWebVitals();
