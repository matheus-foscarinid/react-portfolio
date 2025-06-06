import './PortfolioHeader.css';

const PortfolioHeader = () => {
  const tabs = [
    { name: 'Home', id: 'home' },
    { name: 'Sobre', id: 'about' },
    { name: 'Projetos', id: 'projects' },
    { name: 'Contato', id: 'contact' },
  ];

  return (
    <header>
      <div class="logo">
        <h2>matheusdias<span class="dev">.dev</span></h2>
      </div>

      <div className="tabs">
        {tabs.map((tab => {
          return (
            <a href={`#${tab.id}`} className="tab" key={tab.id}>
              {tab.name}
            </a>
          )
        }))}
      </div>
    </header>
  )
}

export default PortfolioHeader
