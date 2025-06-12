import './ProjectsView.css';
import proj1 from '../../assets/proj1.png';
import proj3 from '../../assets/proj3.png';
import proj4 from '../../assets/proj4.png';
import proj5 from '../../assets/proj5.png';

const PROJECTS = [
  {
    image: proj1,
    name: 'Projeto Guiado #1',
    description: 'Um projeto simples usando HTML e CSS sobre uma banda chamada The Acacia Strain.',
    technologies: ['HTML', 'CSS']
  },
  {
    image: proj3,
    name: 'Clone do Instagram',
    description: 'Clone da página de login do Instagram.',
    technologies: ['HTML', 'CSS']
  },
  {
    image: proj4,
    name: 'Nossa tabuada',
    description: 'Um aplicativo simples para calcular a tabuada de um número.',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    image: proj5,
    name: 'Gerador de QR Code',
    description: 'Um gerador de QR Code para links, simples e funcional.',
    technologies: ['HTML', 'CSS', 'JavaScript']
  }
];

const ProjectsView = () => (
  <section id="projects">
    <div className="container">
      <h2 className="projects-title">Projetos desenvolvidos</h2>
      <p className='projects-text'>Este portfólio é o projeto final da matéria de Desenvolvimento Web do curso de Analíse e Desenvolvimento de Sistemas da Unisinos. Durante a cadeira, como forma de aprendizado, foram desenvolvidos alguns projetos guiados que estão listados abaixo.</p>
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
