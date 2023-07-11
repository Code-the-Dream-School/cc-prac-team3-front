  import React from "react";
  import ReactDOM from 'react-dom/client';
  // import App from './App';
  import { BrowserRouter,Routes,Route } from "react-router-dom";
  import reportWebVitals from './reportWebVitals';
  import {Login} from './components/Login'
  import { Register } from './components/Register';
  import { ForgotPassword } from './components/ForgotPassword';
  import { ResetPassword } from './components/ResetPassword';
  import { Shop } from './components/Shop';
  import { CartCheckout } from "./components/CartCheckout";
  import { ShippingInfo } from "./components/ShippingInfo";
  import useLocalStorage from "./util/useLocalStorage";
  import Homepage from "./Homepage";
  import { NewProducts } from "./components/NewProducts";


  const App=()=>{
    const [items, setItems] = useLocalStorage('cartItems',[])
    const [userToken,setUserToken]=useLocalStorage('userToken',null)
    let count=(null)
    for (let y=0; y<items.length;y++){
      count=items[y].quantity+count
    }

    return(
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Homepage count={count}/>}/>
        <Route exact path='/Login'element={<Login userToken={userToken} setUserToken={setUserToken} count={count}/>}/> 
        <Route exact path='/register'element={<Register userToken={userToken} setUserToken={setUserToken} count={count}/>}/> 
        <Route exact path='/ForgotPassword'element={<ForgotPassword count={count}/>}/> 
        <Route exact path='/ResetPassword'element={<ResetPassword count={count}/>}/> 
        <Route exact path='/Shop'element={<Shop items={items} setItems={setItems} count={count} userToken={userToken}/> }/> 
        <Route exact path='/CartCheckout'element={<CartCheckout items={items} setItems={setItems} count={count}/>}/> 
        <Route exact path='/OrderSuccess'element={<ShippingInfo  items={items} setItems={setItems} count={count}/>}/> 
        <Route exact path='/NewProducts'element={<NewProducts  items={items} setItems={setItems} count={count} userToken={userToken} />}/> 
      </Routes>
      </BrowserRouter>
    )
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <App/>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();


  // 