/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { ButtonPrimary, Container } from '../../styles/styles'
import { Content, ImgHome, HomeText } from './styles'
import { FiArrowRight } from 'react-icons/fi'

export function HomeHero() {
  return (
    <Container>
      <Content>
        <HomeText>
          <p>
            <span>👋🏻</span> Hello, my name is
          </p>
          <h1>
            Dami Adeeso
            <span className="animation">
              <Image
                width={200}
                height={200}
                src="/vectors/triangle.svg"
                alt="Image of a triangle with rotation animation"
              />
            </span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: ['A Full Stack Developer'],
                autoStart: true,
                loop: true,
                skipAddStyles: true
              }}
            />
          </h2>

          <div className="button">
            <Link href={'#projects'}>
              <ButtonPrimary>
                <a>
                  <b>View my portfolio </b>
                  <FiArrowRight style={{ marginBottom: '-0.3rem' }} size={20} />
                </a>
              </ButtonPrimary>
            </Link>
          </div>
        </HomeText>
        <ImgHome>
          <img className="home-img" src="/home.png" alt="Imagem da Home" />

          <div className="code">
            <Image
              width={150}
              height={150}
              src="/vectors/dino.svg"
              alt="dinossaur"
            />
          </div>
        </ImgHome>
      </Content>
    </Container>
  )
}
