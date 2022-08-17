import { useState, useEffect } from 'react';
import './App.css'

const App = () => {

  const [ name, setName ] = useState('Peter');
  
  const sayHello = () => {
    console.log('Hello')
  }

  useEffect( () => {
    setName('Paco');
    sayHello();
  }, []);

  return (
    <div className="App">
      <h1> { name } </h1>
      <button onClick={ () => setName('Pepito')}>Change value</button>
    </div>
  )
}

export default App
