
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'



function App() {
  const[mode, setmode]=useState('light');

  function togglemode() {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor="grey";
      document.body.style.color="white";
    }

    else {
      setmode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
  }
  return (
    <>
     <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
     <div className='container my-3'>
     <TextForm heading="Enter The Text To Analyze"/>  
     </div>
     
    </>
  );
}

export default App;
