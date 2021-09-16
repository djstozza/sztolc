import React from 'react'
import {
  Box,
  Typography,
  Theme,
  makeStyles
} from '@material-ui/core'
import classnames from 'classnames'

const useStyles = makeStyles((theme: Theme) => ({
  whiteTitle: {
    color: '#ffffff'
  }
}))

type Props = {
  title: string,
  whiteTitle?: boolean,
  scrollRef: HTMLInputElement
}

const Title = ({ title, whiteTitle }: Props) => {
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
