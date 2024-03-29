// @flow

import React, { useEffect } from 'react'
import {
  Typography,
  Box,
  Grid,
  Chip
} from '@mui/material'
import { useParams } from 'react-router-dom'
import { makeStyles } from 'tss-react/mui';
import ReactMarkdown from 'react-markdown'
import GitHubIcon from '@mui/icons-material/GitHub'
import BuildIcon from '@mui/icons-material/Build'
import FindInPageIcon from '@mui/icons-material/FindInPage'
import WebIcon from '@mui/icons-material/Web'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import Header from 'components/common/Header'
import Section from 'components/common/Section'
import { LinkRenderer, LinkList, Description } from 'components/helpers'

import type { Data, SectionBase } from 'types'
import type { Node } from 'react'

type Props = {
  data: Data,
  menuOpen: boolean
}

const useStyles = makeStyles()((theme) => ({
  image: {
    width: '100%'
  },
  description: {
    display: 'flex',
    alignItems: 'center'
  },
  descriptionText: {
    marginLeft: theme.spacing(1)
  },
  paragraph: {
    marginBottom: theme.spacing(1.5)
  }
}));

const Project = ({ data, menuOpen }: Props): Node => {
  const { basicInfo, projects: { projects } } = data
  const { classes } = useStyles()
  const { id } = useParams()

  const dataValues: any = Object.values(data)
  const contents: SectionBase[] = dataValues.map(({ id, title, icon }) => ({ id, title, icon }))

  const project = projects.find(({ id: projectId }) => projectId === id)

  useEffect(
    () => {
      window.scrollTo(0, 0)
    }, []
  )

  if (!project) return null

  const { title, description, images, githubLinks, technologies, projectLink, referenceLinks } = project

  return (
    <Box overflow='hidden'>
      <Header
        {...basicInfo}
        contents={contents}
        menuOpen={menuOpen}
      />
      <div id='main'>
        <Section title={title}>
          <AliceCarousel
            mouseTracking
            items={images.map((image, i) => <img className={classes.image} key={i} src={image} alt={`${title} ${i}`} />)}
            autoPlay
            autoPlayInterval={4000}
            animationDuration={800}
            infinite
            disableButtonsControls
          />

          <div style={{ display: 'block' }}>
            {
              description.map((paragraph, i) => (
                <ReactMarkdown
                  key={i}
                  components={{
                    a: ({ href, children }) => <LinkRenderer href={href}>{children}</LinkRenderer>,
                    p: ({ children }) => (
                      <Typography align='justify' className={classes.paragraph}>{children}</Typography>
                    )
                  }}
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
                <LinkList list={githubLinks} />
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
                <LinkList list={referenceLinks} />
              </Grid>
              <Grid item xs={4} sm={3} md={2}>
                <Description icon={<WebIcon />} descriptionText='Website' />
              </Grid>
              <Grid item xs={8} sm={9} md={10}>
                <LinkRenderer href={projectLink.url}>
                  {projectLink.name}
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
