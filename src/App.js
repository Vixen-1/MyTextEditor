import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Alert from './components/Alert';

import React, { useState } from 'react';
import {Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (msg, type)=>{
    setAlert({
      message: msg,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#19142b';
      showAlert("Dark mode is successfully enabled", "success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is successfully enabled", "success")
    }
  }

  return (
    <>
      <Navbar mode = {mode} toggleMode = {toggleMode} />
      <Alert alert = {alert}/>
      <Routes>
        <Route path="/home" element={<Home heading="Enter the text to analyze" mode={mode} alert={alert} showAlert={showAlert} />}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

