import React, { useEffect, useState } from 'react'
import Typical from 'react-typical'
import {
  Theme,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  subtitleContainer: {
    height: theme.spacing(8),
    fontWeight: 'normal'
  }
}))

const Titles = ({ titles = [] }) => {
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
