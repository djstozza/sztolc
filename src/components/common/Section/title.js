// @flow

import React from 'react'
import {
  Box,
  Typography,
  makeStyles
} from '@material-ui/core'
import classnames from 'classnames'

import type { Node } from 'react'

const useStyles = makeStyles(theme => ({
  whiteTitle: {
    color: '#ffffff'
  }
}))

type Props = {
  title: string,
  whiteTitle?: boolean
}

const Title = ({ title, whiteTitle }: Props): Node => {
  const classes = useStyles()

  return (
    <Box mx='auto' mb={3} pt={6}>
      <Typography
        align='center'
        variant='h5'
        className={classnames({ [classes.whiteTitle]: whiteTitle })}
      >
        {title}
      </Typography>
    </Box>
  )
}

export default Title
