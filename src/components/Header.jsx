import github from '/assets/github.png'
import linkedin from '/assets/linkedin.png'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <nav id="top">
      <HashLink to="/" relative="path" smooth={true}><h1>Portfolio</h1></HashLink>
      <div className='link-nav'>
        <HashLink to="/#about" relative="path" smooth={true}>Qui suis-je ?</HashLink>
        <HashLink to="/#cv" relative="path" smooth={true}>CV</HashLink>
        <HashLink to="/#contact" relative="path" smooth={true}>Contact</HashLink>
      </div>
      <div className="logos">
        <a href="https://github.com/gbcpl" target="_blank"><img src={github}></img></a>
        <a href="https://www.linkedin.com/in/gabriel-capell/" target="_blank"><img src={linkedin}></img></a>
      </div>
    </nav>
  )
}

export default Header