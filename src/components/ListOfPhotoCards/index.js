import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { gql, useQuery } from '@apollo/client';

export const ListOfPhotoCards = ({ categoryId }) => {

  const useGetPhotos = (categoryId) => {
    const GET_PHOTOS = gql`
      query getPhotos($categoryId: ID) {
        photos (categoryId: $categoryId){
          id
          categoryId
          src
          likes
          liked
          userId
          
        }
      }`
  
    const { loading, error, data } = useQuery(GET_PHOTOS, { variables: { categoryId } })
  
    return { loading, error, data }
  }

  const { loading, error, data } = useGetPhotos(categoryId)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!!</p>;

  return (
    <ul>
      {data.photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard id={photo.id} likes={photo.likes} src={photo.src} />
        </li>
      ))}
    </ul>
  );
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
