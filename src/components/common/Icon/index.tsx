import React from 'react'
import { makeStyles } from 'tss-react/mui'

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

type Props = {
  icon: string,
  large?: boolean,
  noMargin?: boolean
}

const useStyles = makeStyles()(theme => ({
  icon: {
    height: theme.spacing(3)
  },
  large: {
    zoom: '125%'
  },
  noMargin: {}
}))

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  AppsIcon,
  EmailIcon,
  FacebookIcon,
  FormatListBulletedIcon,
  GitHubIcon,
  HomeOutlinedIcon,
  LinkedInIcon,
  PersonOutlineOutlinedIcon,
  PhoneIcon,
  TimelineOutlinedIcon,
  TwitterIcon
}

const Icon = ({ icon, large, noMargin }: Props) => {
  const { classes, cx } = useStyles()

  const DynamicIcon = icons[icon]

  return (
    <DynamicIcon
      className={cx(classes.icon, { [classes.large]: large, [classes.noMargin]: noMargin })}
    />
  )
}

export default Icon
