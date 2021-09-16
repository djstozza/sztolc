import React from 'react'
import {
  Theme,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  externalLink: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none'
    }
  },
  description: {
    display: 'flex',
    alignItems: 'center'
  },
  descriptionText: {
    marginLeft: theme.spacing(1)
  }
}))

export const ContentsItem = ({ condition, divWrapper, linkWrapper, children }) => {
  return condition ? divWrapper(children) : linkWrapper(children)
}

export const LinkRenderer = ({ href, children }) => {
  const classes = useStyles()

  return <a className={classes.externalLink} href={href} target='_blank' rel='noopener noreferrer'>{children}</a>
}

export const LinkList = ({ list },) => (
  list.map(({ url, name }, i) => (
    <LinkRenderer href={url} key={i}>{name}</LinkRenderer>
  )).reduce((prev, curr) => [prev, ', ', curr])
)

export const Description = ({ icon, descriptionText }) => {
  const classes = useStyles()

  return (
    <div className={classes.description}>
      {icon} <div className={classes.descriptionText}>{descriptionText}</div>
    </div>
  )
}
