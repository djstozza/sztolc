// @flow

import React from 'react'
import {
  Typography,
  makeStyles
} from '@material-ui/core'
import classnames from 'classnames'

import Section from '../../common/Section'

import type { Skills as SkillsType, RefObject } from '../../../types'
import type { Node } from 'react'

type Props = { scrollRef: RefObject } & SkillsType

const useStyles = makeStyles(theme => ({
  inlineIconList: {
    textAlign: 'center'
  },
  skillsTile: {
    backgroundColor: '#292a28',
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`,
    width: theme.spacing(10),
    margin: theme.spacing(1),
    borderRadius: theme.spacing(1),
    color: '#ffffff',
    textAlign: 'center',
    [theme.breakpoints.down(600)]: {
      width: theme.spacing(7),
      padding: `${theme.spacing(1.5)}px ${theme.spacing(1.5)}px ${theme.spacing(1)}px ${theme.spacing(1.5)}px`
    }
  },
  caption: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.down(600)]: {
      fontSize: theme.spacing(1.125)
    }
  },
  skillIconContainer: {
    display: 'inline-block'
  },
  skillIcon: {
    fontSize: theme.spacing(6)
  }
}))

const Skills = ({ id, title, icons = [], scrollRef }: Props): Node => {
  const classes = useStyles()

  return (
    <Section id={id} title={title} scrollRef={scrollRef} backgroundColor='#1F1F1F'>
      <div className={classes.inlineIconList}>
        {
          icons.map(({ name, className }, i) => (
            <div className={classes.skillIconContainer} key={i}>
              <div className={classes.skillsTile}>
                <i className={classnames(className, classes.skillIcon)}>
                  <Typography
                    component='p'
                    variant='caption'
                    align='center'
                    className={classes.caption}
                  >
                    {name}
                  </Typography>
                </i>
              </div>
            </div>
          ))
        }
      </div>
    </Section>
  )
}

export default Skills;
