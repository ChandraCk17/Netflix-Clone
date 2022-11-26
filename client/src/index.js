import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import App from './App';
//import { AuthContextProvider } from "./authContext/AuthContext";

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
*/
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);