import React from 'react'

import { useGetPhotos } from '@hooks/useGetPhotos'
import PropTypes from 'prop-types';

import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = ({ categoryId }) => {

  const { loading, error, data } = useGetPhotos(categoryId)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!!</p>;

  return (
    <ul>
      {data.photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </ul>
  );
}

ListOfPhotoCards.propTypes = {
  categoryId: PropTypes.string.isRequired,
}

/**
 * Old way with react-apollo and apollo-boost
 * 
 * import { graphql } from 'react-apollo'
   import { gql } from 'apollo-boost'

 * const withPhotos = graphql(gql`
    query getPhotos {
      photos {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `)

  const ListOfPhotoCardsComponent = ({ data : { photos = [] } }) => {
    return (
      <ul>
        {photos.map(photo => <PhotoCard  key={photo.id} {...photo} />)}
      </ul>
    )
  }

  export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
 */
