import React from 'react'
import { Article, ImgWrapper, Img } from './styles'
import { FavButton } from '../FavButton'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useMutationToogleLike } from '../../hooks/useMutationToogleLike'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `liked-${id}`
  const [liked, setLike] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()
  const { mutation, mutationLoading, mutationError } = useMutationToogleLike()

  const handleFavClick = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLike(!liked)
  }

  return (
    <Article ref={element}>
      {
        show && 
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <FavButton 
            liked={liked} 
            likes={likes} 
            onClick={handleFavClick} 
          />
        </>
      }
    </Article>
  )
}


