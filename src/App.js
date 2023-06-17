//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const Setmsg = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#485227';
      Setmsg("Dark Model Enable", "Success");
      // document.title = 'Dark mode'
      // setInterval(() => {
      //   document.title = 'check Dark mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'go back to light mode'
      // }, 1500);

    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      Setmsg("Light Model Enable", "Success");
      document.title = 'Light mode'
      // setInterval(() => {
      //   document.title = 'check light mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'go back to dark mode'
      // }, 1500);
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} aboutText="About Utils" togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform show={Setmsg} heading="Enter your text" mode={mode} />
        {/* <About /> */}
      </div>

      {/* <Router>
        <Navbar title="TextUtils" mode={mode} aboutText="About Utils" togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/About" element = {<About />}/>
            <Route exact path="/" element = {<Textform show={Setmsg} heading="Enter your text" mode={mode} />} />
          </Routes>
        </div>
      </Router> */}
    </>
  );
}

export default App;

