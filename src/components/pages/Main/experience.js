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
  Theme,
  makeStyles
} from '@material-ui/core'

import Section from '../../common/Section'

const useStyles = makeStyles((theme: Theme) => ({
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

const Experience = ({ id, title, jobs = [], scrollRef }) => {
  const classes = useStyles()

  return (
    <Section id={id} title={title} scrollRef={scrollRef} backgroundColor='#191970'>
      <VerticalTimeline>
        {
          jobs.map(({ technologies, years, title, company, description, img }, i) => (
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              date={years}
              dateClassName={classes.dateTitle}
              iconStyle={{ background: '#ffffff' }}
              icon={<img src={img} alt={title} className={classes.icon} />}
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
