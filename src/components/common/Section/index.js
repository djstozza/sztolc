// @flow

import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Box,
  makeStyles
} from '@mui/material'

import Title from './title'

import type { RefObject } from 'types'
import type { Node } from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: ({ backgroundColor = '#ffffff' }:{ backgroundColor?: string }) => backgroundColor
  }
}))

type Props = {
  id?: string,
  title: string,
  backgroundColor?: string,
  scrollRef?: RefObject,
  children: any
}

const Section = ({ id, title, backgroundColor, scrollRef, children }: Props): Node => {
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
