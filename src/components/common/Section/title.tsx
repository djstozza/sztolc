import {
  Box,
  Typography
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(_theme => ({
  whiteTitle: {
    color: '#ffffff'
  }
}))

type Props = {
  title: string,
  whiteTitle?: boolean
}

const Title = ({ title, whiteTitle }: Props) => {
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
  )
}

export default Title
