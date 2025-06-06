import './HomeView.css'
import myPhoto from '../../assets/my-photo.jpeg'
import GithubIcon from '../../icons/GithubIcon'
import LinkedinIcon from '../../icons/LinkedinIcon'

const HomeView = () => {
  const MY_SUMMARY = 'Sou desenvolvedor fullstack pleno, do Rio Grande do Sul, Brasil. Eu me especializo na criação de Apps de alta qualidade e escaláveis com experiências excepcionais para os usuários. Com experiência no desenvolvimento tanto do front-end quanto do back-end, sou capaz de construir soluções completas e eficientes.'

  const openLink = (subject) => {
    const SUBJECTS = {
      github: 'https://github.com/matheus-foscarinid',
      linkedin: 'https://www.linkedin.com/in/matheus-foscarinid/',
      resume: 'https://www.matheusdias.dev/dias-matheus-cv.pdf'
    }

    const url = SUBJECTS[subject];
    if (url) window.open(url, '_blank');
  }

  return (
    <section id="home">
      <div className="container">
        <div className="my-photo">
          <img src={myPhoto} alt="Matheus Dias" />
        </div>

        <div className="home-view">
          <h1 className="main-title">Olá! Meu nome é <span className="name">Matheus Dias</span></h1>
          <h2>Sou um desenvolvedor fullstack</h2>

          <p className="resume">{MY_SUMMARY}</p>

          <div>
            <div className="main-buttons">
              <button className="resume-button" onClick={() => openLink('resume')}>
                Ver currículo
              </button>
              <div className="media-icons">
                <button className="icon" onClick={() => openLink('github')}>
                  <GithubIcon />
                </button>
                <button className="icon" onClick={() => openLink('linkedin')}>
                  <LinkedinIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeView
