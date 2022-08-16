import Title from './components/Title'
import Image from './components/Image'
import Card from './components/Card'

const App = () =>{

  const movies = ['Titanic', 'Robocop','Terminator'];

  return (
    <div>
      <Title text="Titulo" number="1"/>
      <Title text="Subtitulo" number="2"/>
      <Image source="https://i.blogs.es/e1feab/google-fotos/1366_2000.jpg" alternative="imagen"/>
      { movies.map( movie => <Card movieTitle={ movie } key={ movie }/> )}
    </div> 
  )
}

export default App
