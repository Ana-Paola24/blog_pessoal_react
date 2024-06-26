import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import Login from './paginas/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
      <Footer/>
      </BrowserRouter>
    </>
  )
}


export default App;