import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

import Title from './title'

import type { RefObject } from 'types'

const useStyles = makeStyles<{ backgroundColor?: string }>()((_theme, { backgroundColor = '#ffffff' }) => ({
  root: {
    backgroundColor: backgroundColor
  }
}))

type Props = {
  id?: string,
  title: string,
  backgroundColor?: string,
  scrollRef?: RefObject,
  children: React.ReactNode
}

const Section = ({ id, title, backgroundColor, scrollRef, children }: Props) => {
  const { classes } = useStyles({ backgroundColor })
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
      <Box id={id} sx={{ mx: 4, pb: 6 }} ref={scrollRef}>
        <Title title={title} whiteTitle={Boolean(backgroundColor)} />

        {children}
      </Box>
    </div>
  )
}

export default Section
