// @flow

import React, { useEffect, useState } from 'react'
import Typical from 'react-typical'
import { makeStyles } from '@material-ui/core'

import type { Node } from 'react'

const useStyles = makeStyles(theme => ({
  subtitleContainer: {
    height: theme.spacing(8),
    fontWeight: 'normal'
  }
}))

const Titles = ({ titles = [] }:{ titles: string[] }): Node => {
  const [titlesRenderer, setTitlesRenderer] = useState([])
  const classes = useStyles()

  useEffect(
    () => {
      setTitlesRenderer(titles.map(title => [title.toUpperCase(), 2000] ).flat())
    }, [setTitlesRenderer, titles]
  )

  return (
    <div className={classes.subtitleContainer}>
      <Typical steps={titlesRenderer} loop={Infinity} wrapper='div' />
    </div>
  )
}

export default Titles
