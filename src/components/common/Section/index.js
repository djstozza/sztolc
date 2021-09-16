import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Box,
  Theme,
  makeStyles
} from '@material-ui/core'

import Title from './title'


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: ({ backgroundColor = '#ffffff' }:{ backgroundColor?: string }) => backgroundColor
  }
}))

const Section = ({ id, title, backgroundColor, scrollRef, children }) => {
  const classes = useStyles({ backgroundColor })
  const { current } = scrollRef || {}
  const { hash } = useLocation()

  useEffect(
    () => {
      if (!current) return
      if (hash.includes(current.id)) current.scrollIntoView()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current]
  )

  return (
    <div className={classes.root}>
      <Box id={id} mx={4} pb={6} ref={scrollRef}>
        <Title title={title} whiteTitle={Boolean(backgroundColor)} />

        {children}
      </Box>
    </div>
  )
}

export default Section
