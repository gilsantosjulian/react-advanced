import React, { useState, useEffect, useRef } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Article, ImgWrapper, Img, Button } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {

  const element = useRef(null) // propiedad especial de React, que nos permite capturar el elemento del DOM
  const [show, setShow] = useState(false)
  const key = `liked-${id}`
  const [like, setLike] = useLocalStorage(key, false)

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

  console.log(like);

  const Icon = like ? MdFavorite : MdFavoriteBorder

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

          <Button>
            <Icon
              onClick={() => setLike(!like)} 
              size='24px' 
            /> {likes} likes!
          </Button>
        </>
      }
    </Article>
  )
}
