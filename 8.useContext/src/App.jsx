import './App.css'
import PrimerComponente from './components/PrimerComponente'
import SegundoComponente from './components/SegundoComponente'
import { ExampleContextProvider } from './context/context';

function App() {


  return (
    <div className="App">
      <ExampleContextProvider>
        <PrimerComponente />
        <SegundoComponente />
      </ExampleContextProvider>
    </div>
  )
}

export default App
