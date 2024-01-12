import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; {new Date().getFullYear()} Dami Adeeso</h4>
      <div className="links">
        <Link href={'https://github.com/DamiAdeeso'}>
          <a target="_blank" aria-label="Link to Github">
            <FiGithub />
          </a>
        </Link>
        <Link href={'https://www.linkedin.com/in/oluwadamilola-adeeso/'}>
          <a target="_blank" aria-label="Link to Linkedin">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={'https://api.whatsapp.com/send?phone=2348084938850'}>
          <a target="_blank" aria-label="Link to whatsapp">
            <FaWhatsapp />
          </a>
        </Link>
      </div>
    </FooterContainer>
  )
}
