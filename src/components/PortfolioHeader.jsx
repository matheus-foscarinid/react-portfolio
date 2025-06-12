import { useEffect, useState } from 'react';
import MenuIcon from '../icons/MenuIcon'
import './PortfolioHeader.css';

const PortfolioHeader = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const tabs = [
    { name: 'Home', id: 'home' },
    { name: 'Sobre', id: 'about' },
    { name: 'Projetos', id: 'projects' },
    { name: 'Contato', id: 'contact' },
  ];

  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  const showMenu = () => {
    console.log('Menu icon clicked');
  }

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
        <h2>matheus-foscarinid<span className="dev">.dev</span></h2>
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

      {isMobile() && (
        <div className="menu-icon" onClick={showMenu}>
          <MenuIcon />
        </div>
      )}
    </header>
  )
}

export default PortfolioHeader
