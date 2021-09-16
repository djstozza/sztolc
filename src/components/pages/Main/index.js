import React, { useRef } from 'react'
import { Box } from '@material-ui/core'
import { Scrollspy } from '@makotot/ghostui'

import Header from '../../common/Header'
import Home from './home'
import About from './about'
import Experience from './experience'
import Projects from './projects'
import Skills from './skills'

const Main = ({ data, menuOpen }) => {
  const homeRef = useRef()
  const aboutRef = useRef()
  const skillsRef = useRef()
  const experienceRef = useRef()
  const projectsRef = useRef()

  const refs = [
    homeRef,
    aboutRef,
    skillsRef,
    experienceRef,
    projectsRef
  ]

  const contents = Object.values(data).map(({ id, title, icon }) => ({ id, title, icon }))

  const { basic_info, about, experience, projects, skills } = data

  return (
    <Scrollspy sectionRefs={refs}>
      {
        ({ currentElementIndexInViewport }) => (
          <Box overflow='hidden'>
            <Header
              {...basic_info}
              refs={refs}
              contents={contents}
              currentElementIndexInViewport={currentElementIndexInViewport}
              menuOpen={menuOpen}
            />
            <div id='main'>
              <Home {...basic_info} scrollRef={homeRef} />
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
