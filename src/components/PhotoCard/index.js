import React, { useState, useEffect, useRef } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Article, ImgWrapper, Img, Button } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {

  const element = useRef(null) // propiedad especial de React, que nos permite capturar el elemento del DOM
  const [show, setShow] = useState(false)
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return like
    } catch (error) {
      return false
    }
  })
  const key = `liked-${id}`

  useEffect(() => {
    // console.log(element.current);
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer') // import dinámico que devuelve una promesa
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting  } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  const Icon = liked ? MdFavorite : MdFavoriteBorder
  const setLocalStorage = (key) => {
    console.log('entra');
    try {
      window.localStorage.setItem(key, calue)
      setLiked(value)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Article ref={element}>
      {
        show && 
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLocalStorage(key)}>
            <Icon
              size='32px'
            /> 
            {likes} likes!
          </Button>
        </>
      }
    </Article>
  )
}
