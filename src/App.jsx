import './App.css'
import Project from './components/Project.jsx'
import lespetitsplats from './assets/lespetitsplats.png'
import ohmyfood from './assets/ohmyfood.png'


function App() {

  return (
    <div className='container'>
      <Project url="https://gbcpl.github.io/lespetitsplats/" title="Les petits plats" img={lespetitsplats} description="Algorithme de recherche" />
      <Project url="https://gbcpl.github.io/ohmyfood//" title="Oh my Food" img={ohmyfood} description="Animation CSS" />
    </div>
  )
}

export default App
