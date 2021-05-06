import React from 'react'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/globalStyles'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { Router } from '@reach/router'

export const App = () => {
  const qs = window.location.search
  const urlParams = new window.URLSearchParams(qs)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
        ? <PhotoCardWithQuery id={detailId}/>  
        : 
          <Router>
            <Home path='/'/>
            <Home path='/pet/:categoryId'/>
          </Router>
      }
    </>
  )
}
