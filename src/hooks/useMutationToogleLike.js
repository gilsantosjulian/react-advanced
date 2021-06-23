import { useMutation, gql } from '@apollo/client'
import React from 'react'

/**
 * El componente de mutation es otro componente importante en una aplicación Apollo. 
 * Es un componente React que proporciona una función para ejecutar una mutation de GraphQL 
 * para así alterar la data. Además, rastrea el estado de carga, finalización y error de esa mutación.
 */

const MUTATION_LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`

export const useMutationToogleLike = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(MUTATION_LIKE_PHOTO)
  return { mutation, mutationLoading, mutationError }
}