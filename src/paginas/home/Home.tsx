import React, { useEffect, useState } from 'react';
import './Home.css';

interface myProps{
  titulo: string;
  texto: string;
}

function Home(props:myProps) {

  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <>
    <div>
      {loggedIn ? (
        <h1>Bem-Vindo!</h1> 
      ) : (
        <button onClick={() => setLoggedIn(true)}>Entrar</button>
      )}
    </div>
    <hr />
    <div>
    <h1>{props.titulo}</h1> 
    <p>{props.texto}</p>
    </div>
    </>
  )
}

export default Home