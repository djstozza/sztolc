// @flow

import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import { makeStyles } from 'tss-react/mui'

import type { Node } from 'react'

const useStyles = makeStyles()(theme => ({
  subtitleContainer: {
    height: theme.spacing(8),
    fontWeight: 'normal'
  }
}));

const Titles = ({ titles = [] }:{ titles: string[] }): Node => {
  const [titlesRenderer, setTitlesRenderer] = useState([])
  const { classes } = useStyles()

  useEffect(
    () => {
      setTitlesRenderer(titles.map(title => title.toUpperCase()))
    }, [setTitlesRenderer, titles]
  )

  return (
    <div className={classes.subtitleContainer}>
      <Typewriter
        options={{
          strings: titlesRenderer,
          autoStart: true,
          loop: true
        }}
      />
    </div>
  )
}

export default Titles
