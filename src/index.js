import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {Login} from './components/Login'
import { Register } from './components/Register';
import { ForgotPassword } from './components/ForgotPassword';
import { ResetPassword } from './components/ResetPassword';
import { Cart } from './components/Cart';
import { Shop } from './pages/Shop';

// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
    //    <App />
    <BrowserRouter>
    <Routes>
      <Route exact path='/Login'element={<Login/>}/> 
      <Route exact path='/register'element={<Register/>}/> 
      <Route exact path='/ForgotPassword'element={<ForgotPassword/>}/> 
      <Route exact path='/ResetPassword'element={<ResetPassword/>}/> 
      <Route exact path='/'element={<Cart/>}/>
      <Route exact path='/Cart'element={<Cart/>}/> 
      <Route exact path='/Shop'element={<Shop/>}/> 
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
