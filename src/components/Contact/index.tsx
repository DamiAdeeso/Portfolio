/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link'
import { Form } from './Form'
import { Description, Section, Title } from '../../styles/styles'
import { ContainerContact, ContactContent } from './styles'
import { BsWhatsapp } from 'react-icons/bs'
import { Envelope, TelegramLogo } from 'phosphor-react'

export function Contact() {
  return (
    <Section>
      <Title>
        <p>../contact</p>
        Contact
        <span>
          <Envelope /> Contact
        </span>
      </Title>
      <Description>
      I am always open to new work opportunities or collaborating in
        some amazing new projects. Just fill out the form that
        I will return 💪
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <BsWhatsapp size={22} color="#00fffb" /> WhatsApp{' '}
            </h4>
            <Link href="https://api.whatsapp.com/send?phone=2348084938850">
              <a target="_blank">
                <span>+234 808 493 8850</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {' '}
              <TelegramLogo size={22} color="#00fffb" /> Email{' '}
            </h4>
            <Link href="mailto:evander.20116@gmail.com">
              <a target="_blank">
                <span>oluwadamilolaadeeso@gmail.com</span>
              </a>
            </Link>
          </div>
        </ContactContent>

        <Form />
      </ContainerContact>
    </Section>
  )
}
