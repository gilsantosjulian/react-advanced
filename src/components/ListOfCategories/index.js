import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles' 

export const ListOfCategories = async () => {

  const [categories, setCategories ] = useState([])
  const url = 'http://localhost:3500/categories'

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setCategories(response)
      })
  }, [])
  // [] -> Execute just when component is mounted
  // ['dependency'] -> Execute just when dependency changes

  return (
    <List>
      {
        categories.map((category) => 
          <Item key={category.id}>
            <Category {...category}/>
          </Item>
        )
      }
    </List>
  )
}
