import React from 'react'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/globalStyles'
import { Router } from '@reach/router'

import { Detail } from './pages/Detail'
import { Home } from './pages/Home'

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
    </>
  )
}
