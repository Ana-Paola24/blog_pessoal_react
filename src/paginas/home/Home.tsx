import React from 'react'
import './Home.css';
import homeLogo from '../../assets/fundo.png'

const Home = () => {
  return (
    <>
        <h1 className='titulo'>Home</h1>
        <img src={homeLogo} alt='Imagem Tela Inicial' className='img'/>
    </>
  )
}

export default Home