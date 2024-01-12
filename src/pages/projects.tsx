import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import projects from '../data/projects'
import { Header } from '../components/Header'
import { Links } from '../components/Links'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import * as S from '../styles/projects'
import * as T from '../styles/styles'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { FaSearch } from 'react-icons/fa'
import { ArrowRight } from 'phosphor-react'

interface ProjectsProps {
  target: HTMLInputElement
}

export default function Projects() {
  const [query, setQuery] = useState('')

  const handleChange = (e: ProjectsProps) => {
    setQuery(e.target.value)
  }

  const projectFilter = projects.filter(project =>
    project.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <Head>
        <title>Projects | Adeeso Oluwadamilola</title>
        <meta
          name="description"
          content="I love coding using tools like Node.js, MongoDB, Express, Spring MVC, Spring boot, React, and more! Here are some of my favorite projects."
        />
        <meta property="og:title" content="Projects | Adeeso Oluwadamilola" />
        <meta
          property="og:description"
          content="I love coding using tools like Node.js, MongoDB, Express, Spring MVC, Spring boot, React, and more! Here are some of my favorite projects."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <T.Section>
        <T.Title>
          <p>../projects</p>
          Projects
          <span>
            <HiOutlineDesktopComputer /> Projects
          </span>
        </T.Title>
        <T.Description>
        Here you can see some of the work I've done. Navigate to
          and explore the projects to see how they were created, the
          technologies used and the functionalities implemented.
        </T.Description>

        <S.ProjectsContainer>
          <S.ProjectsContent>
            <div className="search">
              <p>Search by project name</p>

              <div className="input">
                <input
                  type="text"
                  placeholder="Look up..."
                  value={query}
                  onChange={handleChange}
                />
                <FaSearch />
              </div>
            </div>

            {!projectFilter.length && (
              <h3 className="not-found">Project Not Found 🙁</h3>
            )}

            {projectFilter.map(project => {
              return (
                <>
                  <div className="border" key={project.id} />
                  <S.ProjectsItem>
                    <div className="banner">
                      <Image
                        width={500}
                        height={300}
                        src={project.img}
                        alt={project.title}
                      />
                    </div>

                    <div>
                      <div className="title">
                        <Image
                          width={20}
                          height={20}
                          src={'/icon.svg'}
                          alt={project.title}
                        />
                        <h2>{project.title}</h2>
                      </div>
                      <div className="description">
                        <p>{project.description}</p>

                        <div className="tags">
                          {project.tags.map(tag => {
                            return <span key={tag.name}>{tag.name}</span>
                          })}
                        </div>
                      </div>
                      <Link href={`/project/${project.url}`}>
                        <a>
                          <T.ButtonAlternatives>
                          View project
                            <ArrowRight
                              style={{
                                marginBottom: '-0.1rem'
                              }}
                              weight="bold"
                              size={16}
                            />
                          </T.ButtonAlternatives>
                        </a>
                      </Link>
                    </div>
                  </S.ProjectsItem>
                </>
              )
            })}

            <p className="github">
            Hey... I have even more in the{' '}
              <a
                href="https://github.com/DamiAdeeso"
                target="_blank"
                rel="noreferrer"
              >
                my GitHub{' '}
              </a>
              !
            </p>
          </S.ProjectsContent>
        </S.ProjectsContainer>
      </T.Section>
      <Footer />
    </>
  )
}
