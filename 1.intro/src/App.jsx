import './App.css'

const App = () => {
  const title = 'Wello World';
  const saludo = () => {
    return 'Hola';
  }
  const alimentos = ['tomate','lechuga','pepino'];
  const isRendered = true;
  return (
   <section className='App'>
      <h1> { title } </h1>
      <p> { saludo() } </p>
      { alimentos.map( alimento => (
        <p>Esto es un { alimento } </p>
      ))}
      <h4> { isRendered ? 'Soy true' : 'Soy false' } </h4>
   </section>
  )
}

export default App
