import React, { useState } from 'react';
import Gallery from './components/Gallery'
import './App.css'

function App() {

  const superHeroes = ['Spiderman', 'IronMan', 'Hulk' ];
  const villanus = ['Dr. Doom', 'Thanos', 'Galactus'];
  const [ showSuperHeroes, setShowSuperHeroes ] = useState( true );
  
  return (
    <div className="App">
      <button onClick={ () => setShowSuperHeroes( true) }>Show SuperHeroes</button>
      <button onClick={ () => setShowSuperHeroes( false )}>Show Villans</button>
      
      { showSuperHeroes ? <Gallery title="SuperHeroes" list={ superHeroes } /> : <Gallery title="Villanos" list={ villanus } />}

    </div>
  )
}


export default App
 