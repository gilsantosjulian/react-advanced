import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './theme/globalStyles'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
    </>
  )
}
