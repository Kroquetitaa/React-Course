import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header'
import About from './Components/About'
import Gallery from './Components/Gallery'
import Footer from './Components/Footer'

function App() {


  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/gallery' element={ <Gallery /> }/>
          <Route path='/about' element={ <About /> }/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )

}

export default App
