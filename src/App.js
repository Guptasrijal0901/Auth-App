import './App.css';
import Home from './Component/Home';
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Code from "./Component/Code";
import Private from './Component/Private';
import { Route , BrowserRouter as Router, Routes } from "react-router-dom"
import React from 'react'

const App = () => {
  return (
    <div>
    <Router>
    <Routes>
    <Route  path='/' Component={Home}/>
    <Route  path='/Signup' Component={Signup}/>
    <Route  path='/Login' Component={Login}/>
    <Route  path='/Code' Component={Code}/>
    <Route  path='/Private' Component={Private}/>
    </Routes>
    </Router>
    </div>
  )
}

export default App;
