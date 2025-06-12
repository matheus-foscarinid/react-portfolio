// Components
import PortfolioHeader from './components/PortfolioHeader'
import PortfolioFooter from './components/PortfolioFooter'
// Views
import HomeView from './components/views/HomeView'
import AboutView from './components/views/AboutView'
import ProjectsView from './components/views/ProjectsView'
import ContactsView from './components/views/ContactsView'

function App() {
  return (
    <>
      <div className="portfolio-container">
        <PortfolioHeader />

        <HomeView />
        <AboutView />
        <ProjectsView />
        <ContactsView />

        <PortfolioFooter />
      </div>
    </>
  )
}

export default App
