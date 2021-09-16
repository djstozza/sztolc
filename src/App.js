import React, { lazy, useState, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  IconButton,
  Theme,
  useTheme,
  useMediaQuery,
  makeStyles
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import './App.scss'
import data from './data/data.json'

const Main = lazy(() => import('./components/pages/Main'))
const Project = lazy(() => import('./components/pages/Project'))

const renderLoader = () => <div id='load-screen'><div className='spinner' /></div>

const useStyles = makeStyles((theme: Theme) => ({
  openMenuButton: {
    position: 'fixed',
    top: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 999999,
    backgroundColor: '#e0e0e0',
    '&:hover': {
      backgroundColor: '#b3b3b3'
    }
  }
}))

const App = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const hideMenuOpen = useMediaQuery(theme.breakpoints.up(1170))
  const isOpen = hideMenuOpen ? false : menuOpen

  return (
    <Suspense fallback={renderLoader()}>
      {
        !hideMenuOpen &&
        <IconButton onClick={() => setMenuOpen(!menuOpen)} className={classes.openMenuButton}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      }

      <Router>
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => <Main {...props} data={data} menuOpen={isOpen} />}
          />
          <Route
            exact
            path='/projects/:id'
            render={(props) => <Project {...props} data={data} menuOpen={isOpen} />} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App;
