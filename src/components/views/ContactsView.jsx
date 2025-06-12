import './ContactsView.css'
import GithubIcon from '../../icons/GithubIcon'
import LinkedinIcon from '../../icons/LinkedinIcon'
import LeetcodeIcon from '../../icons/LeetcodeIcon'
import EmailIcon from '../../icons/EmailIcon'

const ContactsView = () => {
  const CONTACTS = [
    {
      name: 'E-mail',
      href: 'mailto:matheus.foscarinid@gmail.com',
      icon: <EmailIcon />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/matheus-foscarinid/',
      icon: <LinkedinIcon />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/matheus-foscarinid',
      icon: <GithubIcon />,
    },
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/u/matheus-foscarinid/',
      icon: <LeetcodeIcon />,
    },
  ]

  return (
    <section id="contact">
      <div className="container">
        <h2 className="contact-title">Contato</h2>
        <p className="contact-text">
          Entre em contato através dos links abaixo:
        </p>
        <div className="contact-grid">
          {CONTACTS.map((contact, idx) => (
            <a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              aria-label={contact.name}
            >
              <div className="contact-icon">{contact.icon}</div>
              <span className="contact-name">{contact.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactsView
