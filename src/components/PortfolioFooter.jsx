import GithubIcon from '../icons/GithubIcon'
import LinkedinIcon from '../icons/LinkedinIcon'
import './PortfolioFooter.css'

const PortfolioFooter = () => (
  <footer className="portfolio-footer">
    <div className="footer-content">
      <div className="footer-links">
        <a
          href="https://github.com/matheus-foscarinid"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/matheus-foscarinid/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinIcon />
        </a>
      </div>
      <div className="footer-text">
        <span>
          © {new Date().getFullYear()} Matheus Dias. Todos os direitos reservados.
        </span>
      </div>
    </div>
  </footer>
)

export default PortfolioFooter
