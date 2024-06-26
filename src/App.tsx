import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';

function App(){
  
  return (
    <>
      <NavBar/>
      <Home/>
      <Footer/>
    </>
  )
}


export default App;