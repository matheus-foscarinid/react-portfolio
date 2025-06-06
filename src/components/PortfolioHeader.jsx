import { useEffect, useState } from 'react';
import './PortfolioHeader.css';

const PortfolioHeader = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const tabs = [
    { name: 'Home', id: 'home' },
    { name: 'Sobre', id: 'about' },
    { name: 'Projetos', id: 'projects' },
    { name: 'Contato', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={hasScrolled ? 'scrolled' : ''}>
      <div className="logo">
        <h2>matheusdias<span className="dev">.dev</span></h2>
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
