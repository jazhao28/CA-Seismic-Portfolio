import logo from './logo.svg';
import './App.css';
import React from "react";
import { Routes, Route, useLocation} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

function App() {

  

  const location = useLocation();
  const isHomepage = location.pathname === "/";
  return (
<>
    <Navbar/>
    <div className={`p-6 min-h-screen ${isHomepage ? 'bg-gradient-to-br from-yellow-200 to-white' : 'bg-white'}`}>

      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
    </>

  );
}

export default App;
