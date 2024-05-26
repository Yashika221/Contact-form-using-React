import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// steps to install this npm package and modules to create a react app
//step-1 npm create-react-app nameofapp
//step-2 npm init react-app nameofapp
//step-3 cd (copy the path of new folder)
//step-4 npm start 
reportWebVitals();
