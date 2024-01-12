import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { Links } from '../components/Links'
import { BiUserPin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { FaDiscord } from 'react-icons/fa'
import * as S from '../styles/about'
import { ButtonAlt, Section, Title } from '../styles/styles'
import Image from 'next/image'

export default function About () {
  return (
    <>
      <Head>
        <title>About | Oluwadamilola Adeeso </title>
        <meta
          name='description'
          content='My name is Adeeso Oluwadamilola, I am a Full Stack Developer from Lagos, Nigeria'
        />
        <meta property='og:title' content='About | Adeeso Oluwadamilola' />
        <meta
          property='og:description'
          content='My name is Adeeso Dami, I am a Full Stack Developer from Lagos, Nigeria'
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <S.AboutContainer>
          <Title>
            <p>../about</p>
            About
            <span>
              <BiUserPin /> About
            </span>
          </Title>

          <S.AboutContent>
            <S.AboutImage>
              <Image className='AboutImg' src='/dami.jpg' alt='my image' />

              <div className='links'>
                <ul>
                  <Link href={'https://github.com/DamiAdeeso'}>
                    <a target='_blank' aria-label='Link to Github'>
                      <AiFillGithub size={25} /> @DamiAdeeso
                    </a>
                  </Link>
                  <Link
                    href={'https://www.linkedin.com/in/oluwadamilola-adeeso/'}
                  >
                    <a target='_blank' aria-label='Link to Linkedin'>
                      <BsLinkedin size={25} /> @oluwadamilola-adeeso
                    </a>
                  </Link>
                  <Link
                    href={'https://api.whatsapp.com/send?phone=2348084938850'}
                  >
                    <a target='_blank' aria-label='Link para o WhatsApp'>
                      <RiWhatsappFill size={25} /> +234 8084938850
                    </a>
                  </Link>
                  <Link
                    href={'https://www.discordapp.com/users/923224253036371989'}
                  >
                    <a
                      className='dc'
                      target='_blank'
                      aria-label='Link to Discord'
                    >
                      <FaDiscord size={25} /> @farikinte
                    </a>
                  </Link>
                  <Link href={'mailto:oluwadamilolaadeeso@gmail.com'}>
                    <a
                      className='email'
                      target='_blank'
                      aria-label='Link to email'
                    >
                      <GrMail size={25} /> @oluwadamilolaadeeso@gmail.com
                    </a>
                  </Link>
                </ul>
              </div>

              <S.AboutContact>
              <h3>Let&rsquo;s talk, maybe create an amazing project together?</h3>

                <p>Send me a message! 😉</p>
                <Link href={'/contact'}>
                  <a>
                    <ButtonAlt>Contact</ButtonAlt>
                  </a>
                </Link>
              </S.AboutContact>
            </S.AboutImage>
            <S.AboutDescription>
              <p>
                I am a passionate Software Engineer based in Lagos, Nigeria,
                with a versatile skill set in both frontend and backend
                development. Graduating with a Second Class Upper Division in
                Electronics and Computer Engineering from Lagos State
                University, I embarked on a journey to explore the vast world of
                software development.
              </p>

              <p>
                Specializing in frameworks such as Node.js, Express.js, NestJS,
                Spring Boot, Spring MVC, and Java2EE, I bring a holistic
                approach to software development. My proficiency extends to
                frontend technologies, including HTML, CSS, Bootstrap, and
                React. I am well-versed in programming languages like Java,
                Python, and JavaScript, making me a valuable asset to innovative
                and collaborative teams.
              </p>

              <p>
                In my professional journey, I am currently a Software Engineer
                at Union Systems Limited (USL), Africa’s leading trade finance
                software company. Here, I focus on backend development for
                enterprise-grade software, utilizing Spring MVC and Spring Boot.
                I am proud to contribute the continuous development of a
                cutting-edge Treasury Management System.
              </p>

              <p>
                My experience extends to my role as a Software Engineering
                Intern at Alabian Solutions Limited, where I completed an
                intensive full-stack development program. I actively
                participated in ideation, contributing innovative ideas that
                directly impacted team projects. I developed and launched a
                fully functional e-commerce website, boosting sales by 40% and
                enhancing user experience.
              </p>

              <p>
                My educational journey includes a Bachelors of Science in
                Electronics and Computer Engineering and a Certificate in
                Software Engineering. Throughout my academic and professional
                career, I have honed my skills in various areas, from databases
                (Oracle, MySQL, Postgre SQL, MongoDB) to development tools (GIT,
                Docker, IntelliJ IDEA, Visual Studio Code, Android Studio).
              </p>

              <p>
                Beyond technical skills, I possess soft skills such as
                communication, collaboration, problem-solving, time management,
                leadership, and a commitment to continuous learning. I am ISC2
                Certified in Cyber Security (CC), showcasing my dedication to
                staying informed and securing digital landscapes.
              </p>

              <p>
                As I continue to evolve in the dynamic field of software
                engineering, I am excited about the prospect of contributing to
                innovative projects and collaborating with like-minded
                professionals. Let&apos;s build a future where technology
                creates positive change.
              </p>
            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>
      </Section>
      <Footer />
    </>
  )
}
