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
import Footer from './components/Footer'


function App() {

  return (
    <div className="App">
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route exact path='/' element={<Landing />}/>
                <Route path='/about' element={<About />}/>
            </Routes>
            <Footer/>
    </div>
  );
}

export default App;
