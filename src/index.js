import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {Login} from './components/Login'
import { Register } from './components/Register';
import { ForgotPassword } from './components/ForgotPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
    //    <App />
    // </BrowserRouter>,
    <BrowserRouter>
    <Routes>
      <Route exact path='/'element={<Login/>}/> 
      <Route exact path='/register'element={<Register/>}/> 
      <Route exact path='/ForgotPassword'element={<ForgotPassword/>}/> 
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
