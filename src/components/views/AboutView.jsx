import './AboutView.css'

const AboutView = () => {
  const STACK = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Vue',
    'Node.js',
    'Ruby on Rails',
    'Python',
    'SQL',
    'MongoDB',
    'Git',
    'Docker',
    'GraphQL'
  ]

  return (
    <section id="about">
      <div className="container">
        <div className="texts">
          <h2><span className='detail'>{'</>'}</span>Sobre</h2>
          <p>Olá, eu sou Matheus, desenvolvedor fullstack habitante do Rio Grande do Sul, Brasil. Para mim, criar sistemas vai além de apenas um trabalho - é uma paixão. Descobri essa vontade inicialmente ao me aventurar no design gráfico usando o Photoshop, o que eventualmente me levou a explorar o empolgante mundo do desenvolvimento web.</p>
          <p>Com 5 anos de experiência no currículo, estou sempre ansioso para aprender e expandir meu conjunto de habilidades. Tenho particular interesse em padrões e princípios de design, e me esforço para aplicá-los em todos os meus projetos.</p>
        </div>

        <div className="stack">
          <div className="badges">
            {STACK.map((item, index) => (
              <span key={index} className="stack-item">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )

}

export default AboutView
