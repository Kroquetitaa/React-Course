import React from 'react';
import { useState } from 'react';
import './App.css'

function App() {
  
  const [ number, setNumber ] = useState(0);
  const [ name, setName ] = useState('Antonio');

  return (
    <div className="App">
      <p> { number }</p>
      <button onClick={ () => setNumber( number + 1 ) }>+</button>
      <button onClick={ () => setNumber( number - 1 ) }>-</button>
      <button onClick={ () => setNumber( 0 ) }>Reset</button>
      <hr />
      <p> { name } </p>
      {/* <button onClick={ () => setName('Alberto') }>Cambio de profesor </button> */}
      <button onClick={ () => name === 'Antonio' ? setName('Alberto') : setName('Antonio') }>Cambio de profesor </button>
    </div>
  )
}

export default App
