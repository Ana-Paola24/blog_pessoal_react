import Home from './paginas/home/Home';
import './App.css';
import React, { useEffect, useState } from 'react';

function App(){
  
  const [valor, setValor] = useState(0);

  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  function handleClick() {
    setValor(valor + 1);
  }

  useEffect(() => {
    if (completed) {
      setTarefa('Parabéns! Você concluiu a tarefa!');
    }
  }, [completed]);
  return (
    <>
      <Home titulo='QUALQUER COISA' texto='sem sentido'/>
      <hr />
      <div>
        <p>O valor é: {valor}</p>
        <button onClick={handleClick}>Adicionar +1</button>
      </div>
      <hr />
      <div>
        <h2>Tarefa</h2>
        <h3>{tarefa}</h3>
        <p>Conclua a tarefa</p>
        <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
      </div>
    </>
  )
}


export default App;