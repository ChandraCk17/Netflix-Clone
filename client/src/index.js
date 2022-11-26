import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import { AuthContextProvider } from "./authContext/AuthContext";

{/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
*/}
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);