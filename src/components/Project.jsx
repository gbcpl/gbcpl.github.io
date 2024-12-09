const Project = ({title, url, description, img, github}) => {
  return (
    <div className='project-container'>
      <a href={url} target="_blank">
        <h2>{title}</h2>
        <img src={img} alt={description}></img>
      </a>
      <p>{description}</p>
      <a href={github} target="_blank">Voir sur Github</a>
    </div>
  )
}

export default Project;