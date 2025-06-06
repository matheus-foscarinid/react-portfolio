import './AboutView.css'

const AboutView = () => {
  const STACK = [
  { name: 'HTML', color: '#e34c26' },
  { name: 'CSS', color: '#264de4' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'React', color: '#61dafb' },
  { name: 'Vue', color: '#42b883' },
  { name: 'Node.js', color: '#68a063' },
  { name: 'Ruby on Rails', color: '#cc0000' },
  { name: 'Python', color: '#3776ab' },
  { name: 'SQL', color: '#00758f' },
  { name: 'MongoDB', color: '#47a248' },
  { name: 'Git', color: '#f34f29' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'GraphQL', color: '#e535ab' },
  { name: 'PHP', color: '#4f5d95' },
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
            {STACK.map((item) => (
              <span 
                key={item.name} 
                style={{ backgroundColor: item.color }}
                className="badge"
              >{item.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )

}

export default AboutView
