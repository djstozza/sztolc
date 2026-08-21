import { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(theme => ({
  subtitleContainer: {
    height: theme.spacing(8),
    fontWeight: 'normal'
  }
}))

const Titles = ({ titles = [] }: { titles: string[] }) => {
  const [titlesRenderer, setTitlesRenderer] = useState<string[]>([])
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
