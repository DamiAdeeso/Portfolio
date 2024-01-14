import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles'
import { List, X } from 'phosphor-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export function Header() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <HeaderContainer style={{ position: 'fixed' }}>
      <div className="mobile-content">
        <Link href={'/'}>
          <a>
            <div className="logo">
              <Image
                className="logo"
                width={30}
                height={30}
                src="/icon.svg"
                alt="logo"
              />
            </div>

            {'DamiAdeeso'.split('').map((letter, index) => {
              return (
                <span key={index} className="logo-name">
                  {letter}
                </span>
              )
            })}
          </a>
        </Link>

        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={25} weight="bold" />
          ) : (
            <List size={25} weight="bold" />
          )}
        </MobileIcon>
      </div>

      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li>
            <Link href={'/'}>
              <a>
                <span>Home</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href={'/about'}>
              <a>
                <span>About</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href={'/experience'}>
              <a>
                <span>Experience</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href={'/projects'}>
              <a>
                <span>Projects</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href={'/resume'}>
              <a>
                <span>Resume</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href={'/contact'}>
              <a>
                <span>Contact</span>
              </a>
            </Link>
          </li>
        </ul>

        <Icons>
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
            <a
              target="_blank"
              aria-label="Link to chat on whatsapp"
            >
              <FaWhatsapp />
            </a>
          </Link>
        </Icons>
      </NavMenu>
    </HeaderContainer>
  )
}
