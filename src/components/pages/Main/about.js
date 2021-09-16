import React from 'react'
import { Typography } from '@material-ui/core'

import Section from '../../common/Section'

const About = ({ id, title, description, scrollRef }) => (
  <Section id={id} title={title} scrollRef={scrollRef}>
    <Typography align='justify'>
      {description}
    </Typography>
  </Section>
)

export default About
