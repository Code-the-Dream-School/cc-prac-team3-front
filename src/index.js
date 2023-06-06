import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {Login} from './components/Login'
import { Register } from './components/Register';
import { ForgotPassword } from './components/ForgotPassword';
import { Next } from './components/Next';
import { ResetPassword } from './components/ResetPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
    //    <App />
    <BrowserRouter>
    <Routes>
      <Route exact path='/Login'element={<Login/>}/> 
      <Route exact path='/register'element={<Register/>}/> 
      <Route exact path='/ForgotPassword'element={<ForgotPassword/>}/> 
      <Route exact path='/Next'element={<Next/>}/> 
      <Route exact path='/ResetPassword'element={<ResetPassword/>}/> 
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
