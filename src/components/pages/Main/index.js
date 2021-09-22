// @flow

import React, { useRef } from 'react'
import { Box } from '@material-ui/core'
import { Scrollspy } from '@makotot/ghostui'

import Header from 'src/components/common/Header'
import Home from './home'
import About from './about'
import Experience from './experience'
import Projects from './projects'
import Skills from './skills'

import type { Data, SectionBase } from 'types'
import type { Node } from 'react'

const Main = ({ data, menuOpen }:{ data: Data, menuOpen: boolean }): Node => {
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

  const dataValues: any = Object.values(data)
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
