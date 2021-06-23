import React, { useState, useEffect } from 'react'

import { Category } from '../Category'
import { Image } from '../Image'
import { List, Item } from './styles' 
const loadingUrl = 'http://localhost:3500/static/loading2.png'

const useCategoriesData = () => {
  
  const [ categories, setCategories ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const url = 'http://localhost:3500/categories'
  
  useEffect(() => {
    setLoading(true)
    window.fetch(url)
      .then(response => response.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])
  // [] -> Execute just when component is mounted
  // ['dependency'] -> Execute just when dependency changes

  return { categories, loading }
}

const ListOfCategoriesComponent = () => {

  const { categories, loading } = useCategoriesData()
  const [ showFixed, setShowFixed ] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return() => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => 
    <List fixed={fixed}>
      {
        loading
          ? <Image key='loading' src={loadingUrl} alt={'loading'} />
          : categories.map((category) => 
              <Item key={category.id}>
                <Category {...category} path={`/pet/${category.id}`}/>
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

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
