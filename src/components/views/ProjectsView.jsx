import './ProjectsView.css'

const PROJECTS = [
  {
    image: '/assets/project1.jpg',
    name: 'Projeto 1',
    description: 'Descrição do projeto 1. Um app incrível!',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    image: '/assets/project2.jpg',
    name: 'Projeto 2',
    description: 'Descrição do projeto 2. Outro app sensacional!',
    technologies: ['Vue', 'Firebase']
  },
  // Adicione mais projetos conforme necessário
]

const ProjectsView = () => (
  <section id="projects">
    <div className="container">
      <h2 className="projects-title">Projetos</h2>
      <div className="projects-grid">
        {PROJECTS.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-techs">
                {project.technologies.map((tech) => (
                  <span className="project-tech" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default ProjectsView
