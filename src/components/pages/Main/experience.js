// @flow

import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import {
  Box,
  Chip,
  Typography,
  makeStyles
} from '@material-ui/core'

import Section from 'src/components/common/Section'

import type { Experience as ExperienceType, RefObject } from 'types'
import type { Node } from 'react'

type Props = { scrollRef: RefObject } & ExperienceType

const useStyles = makeStyles(theme => ({
  dateTitle: {
    [theme.breakpoints.up(1170)]: {
      margin: `0px ${theme.spacing(1)}px`,
      color: '#ffffff'
    }
  },
  icon: {
    maxWidth: theme.spacing(5),
    [theme.breakpoints.up(1170)]: {
      maxWidth: theme.spacing(7.5)
    }
  }
}))

const Experience = ({ id, title, jobs = [], scrollRef }: Props): Node => {
  const classes = useStyles()

  return (
    <Section id={id} title={title} scrollRef={scrollRef} backgroundColor='#191970'>
      <VerticalTimeline>
        {
          jobs.map(({ technologies, years, title, company, description, image }, i) => (
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              date={years}
              dateClassName={classes.dateTitle}
              iconStyle={{ background: '#ffffff' }}
              icon={<img src={image} alt={title} className={classes.icon} />}
              key={i}
            >
              <Typography variant='h6'>
                {title}
              </Typography>

              <Typography variant='subtitle1'>
                {company}
              </Typography>

              {description.map((paragraph, j) => <Typography key={j} align='justify'>{paragraph}</Typography>)}

              <Box mt={2}>
                {technologies.map((technology, i) => <Chip key={i} size='small' label={technology} />)}
              </Box>
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
    </Section>
  )
}

export default Experience;
