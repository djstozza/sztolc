// @flow

import React from 'react'
import classnames from 'classnames'
import { makeStyles } from '@mui/material'

import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import AppsIcon from '@mui/icons-material/Apps'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import GitHubIcon from '@mui/icons-material/GitHub'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import PhoneIcon from '@mui/icons-material/Phone'
import TwitterIcon from '@mui/icons-material/Twitter'

import type { Node } from 'react'

type Props = {
  icon: string,
  large?: boolean,
  noMargin?: boolean
}

const useStyles = makeStyles(theme => ({
  icon: {
    height: theme.spacing(3)
  },
  large: {
    zoom: '125%'
  }
}))

const Icon = ({ icon, large, noMargin }: Props): Node => {
  const classes = useStyles()

  const icons = {
    'AppsIcon': AppsIcon,
    'EmailIcon': EmailIcon,
    'FacebookIcon': FacebookIcon,
    'FormatListBulletedIcon': FormatListBulletedIcon,
    'GitHubIcon': GitHubIcon,
    'HomeOutlinedIcon': HomeOutlinedIcon,
    'LinkedInIcon': LinkedInIcon,
    'PersonOutlineOutlinedIcon': PersonOutlineOutlinedIcon,
    'PhoneIcon': PhoneIcon,
    'TimelineOutlinedIcon': TimelineOutlinedIcon,
    'TwitterIcon': TwitterIcon
  }
  const DynamicIcon = icons[icon]

  return (
    <DynamicIcon
      className={classnames(classes.icon, { [classes.large]: large, [classes.noMargin]: noMargin })}
    />
  )
}

export default Icon
