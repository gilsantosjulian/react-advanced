import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

const HomePage = ({ categoryId }) => {
  return(
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId == props.categoryId
})