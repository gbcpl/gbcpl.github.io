const Project = ({title, url, description, img}) => {
  return (
    <div className='project-container'>
      <a href={url}>
        <h1>{title}</h1>
        <img src={img} alt=""></img>
        <p>{description}</p>
      </a>
    </div>
  )
}

export default Project;