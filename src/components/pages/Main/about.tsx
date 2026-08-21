import { Typography } from '@mui/material'

import Section from 'components/common/Section'

import type { About as AboutType, RefObject } from 'types'

type Props = { scrollRef: RefObject } & AboutType

const About = ({ id, title, description, scrollRef }: Props) => (
  <Section id={id} title={title} scrollRef={scrollRef}>
    <Typography align='justify'>
      {description}
    </Typography>
  </Section>
)

export default About
