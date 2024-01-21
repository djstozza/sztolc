// @flow

import React from 'react'
import {  makeStyles } from '@mui/material'

import type { Node, Element } from 'react'

type ContentsItemProps = {
  condition: boolean,
  divWrapper: (any) => Element<any>,
  linkWrapper: (any) => Element<any>,
  children: any
}

type List = {
  url: string,
  name: string
}

type LinkListProps = {
  list: List[]
}

const useStyles = makeStyles((theme) => ({
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

export const ContentsItem = ({ condition, divWrapper, linkWrapper, children }: ContentsItemProps): Element<any> => {
  return condition ? divWrapper(children) : linkWrapper(children)
}

export const LinkRenderer = ({ href, children }:{ href: string, children: any }): Node => {
  const classes = useStyles()

  return <a className={classes.externalLink} href={href} target='_blank' rel='noopener noreferrer'>{children}</a>
}

export const LinkList = ({ list }: LinkListProps): Node => (
  list.map(({ url, name }, i) => (
    <LinkRenderer href={url} key={i}>{name}</LinkRenderer>
  )).reduce((prev, curr) => [prev, ', ', curr])
)

export const Description = ({ icon, descriptionText }:{ icon: Element<'div'>, descriptionText: string }): Node => {
  const classes = useStyles()

  return (
    <div className={classes.description}>
      {icon} <div className={classes.descriptionText}>{descriptionText}</div>
    </div>
  )
}
