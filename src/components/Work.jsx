import Project from './Project'

const Work = ({ job, projects, name }) => {
  return (
    <section>
      <h1 id={name}>{job}</h1>
      <div className="container">
        {projects.map((singleData) => (
          <Project
            key={singleData.title}
            url={singleData.url}
            title={singleData.title}
            img={singleData.img}
            description={singleData.description}
            github={singleData.github}
          />
        ))}
      </div>
    </section>
  )
}

export default Work;