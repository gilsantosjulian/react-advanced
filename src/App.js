import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/globalStyles'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

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
          <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={2} />
          </>
      }
    </>
  )
}
