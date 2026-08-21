import React from 'react'
import { makeStyles } from 'tss-react/mui'

type ContentsItemProps = {
  condition: boolean,
  divWrapper: (children: React.ReactNode) => React.ReactNode,
  linkWrapper: (children: React.ReactNode) => React.ReactNode,
  children: React.ReactNode
}

type List = {
  url: string,
  name: string
}

type LinkListProps = {
  list: List[]
}

const useStyles = makeStyles()((theme) => ({
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

export const ContentsItem = ({ condition, divWrapper, linkWrapper, children }: ContentsItemProps) => {
  return condition ? divWrapper(children) : linkWrapper(children)
}

export const LinkRenderer = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const { classes } = useStyles()

  return <a className={classes.externalLink} href={href} target='_blank' rel='noopener noreferrer'>{children}</a>
}

export const LinkList = ({ list }: LinkListProps) => (
  list.map(({ url, name }, i) => (
    <LinkRenderer href={url} key={i}>{name}</LinkRenderer>
  )).reduce<React.ReactNode>((prev, curr, i) => (i === 0 ? curr : [prev, ', ', curr]), null)
)

export const Description = ({ icon, descriptionText }: { icon: React.ReactNode, descriptionText: string }) => {
  const { classes } = useStyles()

  return (
    <div className={classes.description}>
      {icon} <div className={classes.descriptionText}>{descriptionText}</div>
    </div>
  )
}
