import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles' 

export const ListOfCategories = () => {

  const [categories, setCategories ] = useState([])
  const [showFixed, setShowFixed ] = useState(false)
  const url = 'http://localhost:3500/categories'

  useEffect(() => {
    window.fetch(url)
      .then(response => response.json())
      .then(response => setCategories(response))
  }, [])
  // [] -> Execute just when component is mounted
  // ['dependency'] -> Execute just when dependency changes

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return() => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => 
    <List className={fixed ? 'fixed' : '' }>
      {
        categories.map((category) => 
          <Item key={category.id}>
            <Category {...category}/>
          </Item>
        )
      }
    </List>

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
