import Project from '../Project'
import projects from '../../data/projects'
import Curriculum from '../Curriculum'
import Contact from '../Contact'
import About from '../About'
import BackToTop from '../BackToTop'

function Home() {
  return (
    <main>
      <h1>Développeur web full-stack</h1>
      <h2>Gabriel CAPELL</h2>
      <div className='container'>
        {projects.map((singleData, index) => {
          return <Project key={index} url={singleData.url} title={singleData.title} img={singleData.img} description={singleData.description} github={singleData.github} />
        })}
      </div>
      <hr />
      <About />
      <hr />
      <Curriculum />
      <hr />
      <Contact />
      <BackToTop />
    </main>
  )
}

export default Home
