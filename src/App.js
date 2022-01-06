import logo from './logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home.js'
import About from "./components/About.js"
import Landing from './components/Landing.js'


function App() {

  return (
    <div className="App">
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route exact path='/' element={<Landing />}/>
            </Routes>
    </div>
  );
}

export default App;
