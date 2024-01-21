// @flow

import React from 'react'
import {
  Box,
  Typography
} from '@mui/material'
import { makeStyles } from 'tss-react/mui';

import type { Node } from 'react'

const useStyles = makeStyles()(theme => ({
  whiteTitle: {
    color: '#ffffff'
  }
}));

type Props = {
  title: string,
  whiteTitle?: boolean
}

const Title = ({ title, whiteTitle }: Props): Node => {
  const { classes, cx } = useStyles()

  return (
    <Box mx='auto' mb={3} pt={6}>
      <Typography
        align='center'
        variant='h5'
        className={cx({ [classes.whiteTitle]: whiteTitle })}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default Title
