import React, { useEffect } from 'react'
import {
  Box,
  Grid,
  Chip,
  Theme,
  makeStyles
} from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import ReactMarkdown from 'react-markdown'
import GitHubIcon from '@material-ui/icons/GitHub'
import BuildIcon from '@material-ui/icons/Build'
import FindInPageIcon from '@material-ui/icons/FindInPage'
import WebIcon from '@material-ui/icons/Web'

import Header from '../../common/Header'
import Section from '../../common/Section'
import { LinkRenderer, LinkList, Description } from '../../helpers'

const useStyles = makeStyles((theme: Theme) => ({
  image: {
    width: '100%'
  },
  description: {
    display: 'flex',
    alignItems: 'center'
  },
  descriptionText: {
    marginLeft: theme.spacing(1)
  }
}))

const Project = ({ data, match: { params: { id } }, menuOpen }) => {
  const { basic_info, projects: { projects } } = data
  const classes = useStyles()
  const contents = Object.values(data).map(({ id, title, icon }) => ({ id, title, icon }))
  const project = projects.find(({ id: projectId }) => projectId === id)
  useEffect(
    () => {
      window.scrollTo(0, 0)
    }, []
  )

  if (!project) return null

  const { title, description, images, github_links, technologies, project_link, reference_links } = project

  return (
    <Box overflow='hidden'>
      <Header
        {...basic_info}
        contents={contents}
        menuOpen={menuOpen}
      />
      <div id='main'>
        <Section title={title}>
          <Carousel
            animation='slide'
            autoplay
            cycleNavigation
            stopAutoPlayOnHover
            interval={5000}
          >
            {images.map((image, i) => <img className={classes.image} key={i} src={image} alt={`${title} ${i}`} />)}
          </Carousel>
          <div style={{ display: 'block' }}>
            {
              description.map((paragraph, i) => (
                <ReactMarkdown
                  key={i}
                  components={{ a: ({ href, children }) => <LinkRenderer href={href}>{children}</LinkRenderer> }}
                >
                  {paragraph}
                </ReactMarkdown>
              ))
            }
            <Grid container spacing={1}>
              <Grid item xs={4} sm={3} md={2}>
                <Description icon={<GitHubIcon />} descriptionText='GitHub' />
              </Grid>
              <Grid item xs={8} sm={9} md={10}>
                <LinkList list={github_links} />
              </Grid>
              <Grid item xs={4} sm={3} md={2}>
                <Description icon={<BuildIcon />} descriptionText='Tech' />
              </Grid>
              <Grid item xs={8} sm={9} md={10}>
                {technologies.map((technology, i) => <Chip key={i} size='small' label={technology} />)}
              </Grid>
              <Grid item xs={4} sm={3} md={2}>
                <Description icon={<FindInPageIcon />} descriptionText='Sources' />
              </Grid>
              <Grid item xs={8} sm={9} md={10}>
                <LinkList list={reference_links} />
              </Grid>
              <Grid item xs={4} sm={3} md={2}>
                <Description icon={<WebIcon />} descriptionText='Website' />
              </Grid>
              <Grid item xs={8} sm={9} md={10}>
                <LinkRenderer href={project_link.url}>
                  {project_link.name}
                </LinkRenderer>
              </Grid>
            </Grid>
          </div>
        </Section>
      </div>
    </Box>
  )
}

export default Project
