// @flow

import React from 'react'
import { Typography } from '@mui/material'

import Section from 'components/common/Section'

import type { About as AboutType, RefObject } from 'types'
import type { Node } from 'react'

type Props = { scrollRef: RefObject } & AboutType

const About = ({ id, title, description, scrollRef }: Props): Node => (
  <Section id={id} title={title} scrollRef={scrollRef}>
    <Typography align='justify'>
      {description}
    </Typography>
  </Section>
)

export default About
