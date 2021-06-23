import { Link } from '@reach/router'
import PropTypes from 'prop-types';
import React from 'react'

import { useMutationToogleLike } from '../../hooks/useMutationToogleLike'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { Article, ImgWrapper, Img } from './styles'


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

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function(props, propName, componentName) { // Custom Prop Validation: num with some criteria -> positive after to 0
    const propValue = props[propName]

    if(propValue === undefined) {
      return new Error(`${propName} Value must be defined`)
    }

    if(propValue < 0) {
      return new Error(`${propName} Value must be greater than 0`)
    }
  }
}

