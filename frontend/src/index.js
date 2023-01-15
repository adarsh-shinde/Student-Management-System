import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StudentsContextProvider } from './Context/StudentsContext';
import { StudentContextProvider } from './Context/StudentContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StudentsContextProvider>
    <StudentContextProvider>
      <App />
    </StudentContextProvider>
  </StudentsContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

