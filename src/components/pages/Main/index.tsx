import { useRef } from 'react'
import { Box } from '@mui/material'
import { Scrollspy } from '@makotot/ghostui'

import Header from 'components/common/Header'
import Home from './home'
import About from './about'
import Experience from './experience'
import Projects from './projects'
import Skills from './skills'

import type { Data, SectionBase } from 'types'

type Props = {
  data: Data,
  menuOpen: boolean,
  setMenuOpen: (open: boolean) => void
}

const Main = ({ data, menuOpen, setMenuOpen }: Props) => {
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const refs = [
    homeRef,
    aboutRef,
    skillsRef,
    experienceRef,
    projectsRef
  ]

  const dataValues = Object.values(data) as SectionBase[]
  const contents: SectionBase[] = dataValues.map(({ id, title, icon }) => ({ id, title, icon }))

  const { basicInfo, about, experience, projects, skills } = data

  return (
    <Scrollspy sectionRefs={refs}>
      {
        ({ currentElementIndexInViewport }) => (
          <Box overflow='hidden'>
            <Header
              {...basicInfo}
              refs={refs}
              contents={contents}
              currentElementIndexInViewport={currentElementIndexInViewport}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
            <div id='main'>
              <Home {...basicInfo} scrollRef={homeRef} />
              <About {...about} scrollRef={aboutRef} />
              <Skills {...skills} scrollRef={skillsRef} />
              <Experience {...experience} scrollRef={experienceRef} />
              <Projects {...projects} scrollRef={projectsRef} />
            </div>
          </Box>
        )
      }
    </Scrollspy>
  )
}

export default Main
