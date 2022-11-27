import React from 'react';
import ReactDOM from 'react-dom';
//import { createRoot } from "react-dom/client";
import App from './App';
import { AuthContextProvider } from "./authContext/AuthContext";


/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<AuthContextProvider>
    <App />
</AuthContextProvider>
</React.StrictMode>
);