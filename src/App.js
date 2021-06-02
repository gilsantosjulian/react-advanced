import React, { Children } from 'react'
import { GlobalStyle } from './styles/globalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Router, Redirect } from '@reach/router'

import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { User } from './pages/User'

import { useStateValue } from './state';

export const App = () => {
  const [{ isAuth }] = useStateValue()

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/'/>
        <Home path='/pet/:categoryId'/>
        <Detail path='/detail/:detailId'/>
        { !isAuth && <NotRegisteredUser path='/login'/>}
        { !isAuth && <Redirect from='/favs' to='/login'/>}
        { !isAuth && <Redirect from='/user' to='/login'/>}
        { isAuth && <Redirect from='/login' to='/'/>}

        <Favs path='/favs'/>
        <User path='/user'/>
      </Router>
      <NavBar />
    </>
  )
}
