import React, { Children, Suspense } from 'react'
import { GlobalStyle } from './styles/globalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Router, Redirect } from '@reach/router'

import { useStateValue } from './state';

/**
 * Here we remove name imports and use suspend and dinamyc imports
 */
const Detail = React.lazy(() => import('./pages/Detail'))
const Home = React.lazy(() => import('./pages/Home'))
const Favs = React.lazy(() => import('./pages/Favs'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
const User = React.lazy(() => import('./pages/User'))

export const App = () => {
  const [{ isAuth }] = useStateValue()

  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  )
}
