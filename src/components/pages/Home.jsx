import Work from '../Work'
import Curriculum from '../Curriculum'
import Contact from '../Contact'
import About from '../About'
import BackToTop from '../BackToTop'
import projects from '../../data/projects';

function Home() {
  return (
    <main>
      <h2>Gabriel CAPELL</h2>
      <Work job="Data Analyst" projects={projects.dataAnalyst} name="data"/>
      <hr />
      <Work job="Développeur web" projects={projects.developpeurWeb} name="web"/>
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
