import { gql } from '@apollo/client'
import { Query } from '@apollo/client/react/components'
import React from 'react'

import { PhotoCard } from '../components/PhotoCard'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo (id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...!</p>
  if (data) {
    const { photo = {} } = data
    return <PhotoCard {...photo}/>
  } else {
    return <h3>No hay data</h3>
  }
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)
