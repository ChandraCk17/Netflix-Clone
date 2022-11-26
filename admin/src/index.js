import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';

/*
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
         <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
*/
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);