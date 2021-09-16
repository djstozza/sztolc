import React from 'react'
import classnames from 'classnames'
import {
  Theme,
  makeStyles
} from '@material-ui/core'

import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined'
import AppsIcon from '@material-ui/icons/Apps'
import EmailIcon from '@material-ui/icons/Email'
import FacebookIcon from '@material-ui/icons/Facebook'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import GitHubIcon from '@material-ui/icons/GitHub'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import PhoneIcon from '@material-ui/icons/Phone'
import TwitterIcon from '@material-ui/icons/Twitter'

type Props = {
  icon: string,
  small?: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    height: theme.spacing(3)
  },
  large: {
    zoom: '125%'
  }
}))

const Icon = ({ icon, large, noMargin }: Props) => {
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
