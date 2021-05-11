import React, { Children } from 'react'
import { GlobalStyle } from './styles/globalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Router } from '@reach/router'

import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { Home } from './pages/Home'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { User } from './pages/User'

import Context from './Context'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/'/>
        <Home path='/pet/:categoryId'/>
        <Detail path='/detail/:detailId'/>
      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) => 
            isAuth
            ?
              <Router>
                <Favs path='/favs'/>
                <User path='/user'/>
              </Router>
            :
              <Router>
                <NotRegisteredUser path='/favs'/>
                <NotRegisteredUser path='/user'/>
              </Router>
        }
      </Context.Consumer>
      <NavBar />
    </>
  )
}
