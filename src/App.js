import React, { useState, useEffect } from 'react';
import { getAllData } from './util/index';
import { Login } from './components/Login';


const URL = 'http://localhost:8000/api/v1/';

function App() {

  const [currentForm,setMessage]=useState('Login');
  // const toggleForm=(forName) => {
  //   setCurrentForm(forName);
  // }
console.log(currentForm);

  useEffect(() => {

    (async () => {
      const myData = await getAllData(URL)
      setMessage(myData.data);
    })();
  
    return () => {
      
      console.log('unmounting');

  
    }
 
  }, []);

  return (
    <>
    
     <h1>{Login}</h1>
      
    </>
  );
}

export default App;

