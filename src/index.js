import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Home/Home';
import Project from './Project/Project.js';
import About from './About/About.js';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="About" element={<About />} />
      <Route path="Project" element={<Project />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

