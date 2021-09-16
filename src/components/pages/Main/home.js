import React from 'react'
import {
  Typography,
  Theme,
  makeStyles
} from '@material-ui/core'

import Titles from './titles'
import Icon from '../../common/Icon'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    height: '100vh',
    minHeight: theme.spacing(65),
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#000000',
    paddingBottom: 0,
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: '0.6',
      backgroundImage: 'url("/images/header.jpeg")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      [theme.breakpoints.up('sm')]: {
        backgroundSize: 'contain'
      }
    }
  },
  align: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  titleContainer: {
    color: '#ffffff',
    fontWeight: 'bold',
    opacity: 1,
    zIndex: 2,
    marginTop: theme.spacing(45),
    [theme.breakpoints.down(600)]: {
      marginTop: theme.spacing(20)
    }
  },
  highlighted: {
    color: '#2196f3'
  },
  networkLinkContainer: {
    margin: theme.spacing(1),
    [theme.breakpoints.up(600)]: {
      margin: theme.spacing(4)
    }
  },
  networkLink: {
    fontSize: theme.spacing(3),
    display: 'inline-block',
    background: '#212431',
    color: '#ffffff',
    lineHeight: 1,
    marginRight: theme.spacing(0.6),
    borderRadius: '50%',
    textAlign: 'center',
    width: theme.spacing(6),
    height: theme.spacing(6),
    transition: '0.3s',
    '&:hover': {
      background: '#149ddd',
      color: '#ffffff',
      textDecoration: 'none'
    }
  },
  iconContainer: {
    marginTop: theme.spacing(1)
  }
}))

const Home = ({ id, name, social = [], titles = [], scrollRef }) => {
  const classes = useStyles()

  return (
    <div
      id={id}
      ref={scrollRef}
      className={classes.root}
    >
      <div className={classes.align}>
        <div className={classes.titleContainer}>
          <Typography variant='h3'>
            <span className={classes.highlighted}>DANIEL</span> SZTOLC<span className={classes.highlighted}>MAN</span>
          </Typography>
          <Titles titles={titles} />
          {
            social.map(({ name, url, icon }) => (
              <span key={name} className={classes.networkLinkContainer}>
                <a
                  href={url}
                  target='_blank'
                  className={classes.networkLink}
                  rel='noopener noreferrer'
                >
                  <div className={classes.iconContainer}>
                    <Icon icon={icon} large />
                  </div>
                </a>
              </span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
