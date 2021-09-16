import React from 'react'
import {
  Typography,
  Grid,
  Theme,
  makeStyles
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import Section from '../../common/Section'

const useStyles = makeStyles((theme: Theme) => ({
  image: {
    width: '100%',
    cursor: 'pointer'
  }
}))

const Projects = ({ id, title, projects, scrollRef }) => {
  const classes = useStyles()
  return (
    <Section id={id} title={title} scrollRef={scrollRef}>
      <Grid container spacing={1}>
        {
          projects.map(({ id: projectId, title: projectTitle, images }, i) => (
            <Grid key={i} item md={6} sm={12}>
              <Link to={`/projects/${projectId}`}>
                <img src={images[0]} alt={projectTitle} className={classes.image} />
                <Typography align='center'>{projectTitle}</Typography>
              </Link>
            </Grid>
          ))
        }
      </Grid>
    </Section>
  )
}

export default Projects
