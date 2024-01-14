import Image from 'next/image'
import Link from 'next/link'
import { Button, Container, ButtonAlternatives } from '../../styles/styles'
import { AboutContainer } from './styles'
import { ArrowRight, TelegramLogo } from 'phosphor-react'

export function About () {
  return (
    <Container>
      <AboutContainer>
        <div className='AboutImg'>
          <Image
            width={500}
            height={500}
            className='AboutImg'
            src='/about.svg'
            alt='Imagem de perfil'
          />
        </div>

        <div className='aboutContent'>
          <div className='aboutDescription'>
            <h2>A little about myself ...</h2>
            <p>
              As a committed Software Engineer, I possess expertise in both
              frontend and backend development. I specialize in utilizing
              frameworks like Spring Boot, Spring MVC, Java2EE, Node.js,
              Express.js, and NestJS. Additionally, I am proficient in frontend
              technologies, including HTML, CSS, Bootstrap, and React. My
              comprehensive approach to software development is complemented by
              my proficiency in Java, Python, and JavaScript.
              <br />
              A recent graduate in Electronics and Computer Engineering, I am well-prepared and enthusiastic about continuous improvement in the field. My diverse skill set positions me as a valuable asset to innovative and collaborative teams.
            </p>

          </div>

          <div className='aboutButton'>
            <Link href={'/contact'}>
              <a>
                <Button>
                  Contact
                  <TelegramLogo
                    style={{
                      marginBottom: '-0.1rem',
                      marginLeft: '0.2rem'
                    }}
                    size={16}
                    weight='bold'
                  />
                </Button>
              </a>
            </Link>
            <Link href={'/about'}>
              <a>
                <ButtonAlternatives>
                Read more
                  <ArrowRight
                    style={{
                      marginBottom: '-0.1rem',
                      marginLeft: '0.2rem'
                    }}
                    weight='bold'
                    size={16}
                  />
                </ButtonAlternatives>
              </a>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  )
}
