import {
  Typography,
  Grid
} from '@mui/material'
import { Link } from 'react-router-dom'
import { makeStyles } from 'tss-react/mui'

import Section from 'components/common/Section'

import type { Projects as ProjectsType, RefObject } from 'types'

type Props = { scrollRef: RefObject } & ProjectsType

const useStyles = makeStyles()(_theme => ({
  image: {
    width: '100%',
    cursor: 'pointer'
  }
}))

const Projects = ({ id, title, projects, scrollRef }: Props) => {
  const { classes } = useStyles()
  return (
    <Section id={id} title={title} scrollRef={scrollRef}>
      <Grid container spacing={1}>
        {
          projects.map(({ id: projectId, title: projectTitle, images }, i) => (
            <Grid key={i} size={{ sm: 12, md: 6 }}>
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
