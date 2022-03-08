import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// let name = "Divyanshu";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500)
  };
  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   // document.body.classList.remove('bg-primary')
  // }
  
  const toggleMode = ()=> {
  // const toggleMode = (cls)=> {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success")
      // document.title = 'TextUtils - Home'
      // setInterval(()=>{
      //   document.title = 'Install TextUtils';
      // },2000)
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing';
      // },1500)
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      // document.title = 'TextUtils - Dark Mode'
      showAlert("Dark Mode has been enabled","success")
    }
  };
  return (
    <>
    <Router>

    {/* <Navbar title="Hello" aboutText="About US"></Navbar> */}
    <Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}></Alert>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          
          <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character Counter, Remove extra spaces" mode={mode}/>
          </Route>
        </Switch>
    {/* <About/> */}
    </div>
    </Router>
    </>
    );
  }
  
  export default App;
  