// @flow

import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography
} from '@mui/material'
import { makeStyles } from 'tss-react/mui';

import Icon from '../Icon'
import { ContentsItem } from 'components/helpers'

import type { SectionBase, BasicInfo, RefObject } from 'types'
import type { Node } from 'react'

type Props = {
  currentElementIndexInViewport?: number,
  contents: SectionBase[],
  refs?: RefObject[],
  menuOpen: boolean,
  setMenuOpen?: Function
} & BasicInfo

const useStyles = makeStyles()(theme => ({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: theme.spacing(37.5),
    transition: 'all ease-in-out 0.5s',
    zIndex: 9999,
    padding: `0px ${theme.spacing(2)}px`,
    backgroundColor: '#030a13',
    overflowY: 'auto',
    color: '#ffffff'
  },
  profileImage: {
    margin: `${theme.spacing(2)}px auto`,
    display: 'block',
    width: theme.spacing(15),
    height: theme.spacing(17),
    border: '8px solid #2c2f3f',
    borderRadius: '50%'
  },
  navList: {
    marginTop: theme.spacing(3),
    listStyle: 'none',

  },
  navLink: {
    color: '#149ddd',
    opacity: 0.6,
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      opacity: 0.8,
      textDecoration: 'none'
    }
  },
  active: {
    opacity: 1
  },
  linkText: {
    marginLeft: theme.spacing(1),
    color: '#ffffff'
  },
  networkLink: {
    fontSize: theme.spacing(3),
    display: 'inline-block',
    background: '#212431',
    color: '#ffffff',
    lineHeight: 1,
    margin: theme.spacing(1.125),
    borderRadius: '50%',
    textAlign: 'center',
    width: theme.spacing(5),
    height: theme.spacing(5),
    transition: '0.3s',
    '&:hover': {
      background: '#149ddd',
      color: '#ffffff',
      textDecoration: 'none'
    }
  },
  linkTextContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  iconContainer: {
    marginTop: theme.spacing(1)
  },
  showHeader: {
    marginLeft: theme.spacing(41.25)
  }
}));

const Header = ({
  name,
  image,
  social = [],
  currentElementIndexInViewport,
  contents=[],
  refs = [],
  menuOpen,
  setMenuOpen
}: Props): Node => {
  const { classes, cx } = useStyles()
  const navigate = useNavigate()

  const handleClick = ({ current }, id) => {
    if (current) current.scrollIntoView({ behavior: 'smooth' })
    navigate(`/#${id}`)
    setMenuOpen && setMenuOpen(false)
  }

  return (
    <header id='header' className={cx(classes.header, { [classes.showHeader]: menuOpen })}>
      <div className={classes.container}>
        <div>
          <img src={image} alt='profile' className={classes.profileImage} />

          <Typography variant='h5' align='center'>
            {name}
          </Typography>

          <Box mt={2} ml={1}>
            {
              social.map(({ name, url, icon }) => (
                <a key={name} href={url} target='_blank' className={classes.networkLink} rel='noopener noreferrer'>
                  <div className={classes.iconContainer}>
                    <Icon icon={icon} />
                  </div>
                </a>
              ))
            }
          </Box>
        </div>

        <ul className={classes.navList}>
          {
            contents.map(({ id, title, icon }, i) => (
              <li key={i}>
                <Box mb={1}>
                  <ContentsItem
                    condition={Boolean(refs.length)}
                    linkWrapper={(children) => <a className={classes.navLink} href={`/#${id}`}>{children}</a>}
                    divWrapper={
                      (children) => (
                        <div
                          onClick={() => handleClick(refs[i], id)}
                          className={
                            cx(
                              classes.navLink,
                              {
                                [classes.active]: currentElementIndexInViewport === i
                              }
                            )
                          }
                        >
                          {children}
                        </div>
                      )
                    }
                  >
                    <div className={classes.linkTextContainer}>
                      <Icon icon={icon} noMargin /> <div className={classes.linkText}>{title}</div>
                    </div>
                  </ContentsItem>
                </Box>
              </li>
            ))
          }
        </ul>
      </div>
    </header>
  );
}

export default Header;
