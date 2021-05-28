import React from 'react'
import { Article, ImgWrapper, Img } from './styles'
import { FavButton } from '../FavButton'
import { Link } from '@reach/router'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useMutationToogleLike } from '../../hooks/useMutationToogleLike'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const { mutation, mutationLoading, mutationError } = useMutationToogleLike()

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    })
  }

  return (
    <Article ref={element}>
      {
        show && 
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
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


