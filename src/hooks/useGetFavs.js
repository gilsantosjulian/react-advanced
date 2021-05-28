import { gql, useQuery } from '@apollo/client';

export const useGetFavs = (categoryId) => {
    const GET_FAVS = gql`
      query getFavs {
        favs {
          id
          categoryId
          src
          likes
          userId
          
        }
      }`
  
    const { loading, error, data } = useQuery(
      GET_FAVS, 
      { 
        fetchPolicy: 'cache-and-network', 
        variables: { categoryId } 
      })
  
    return { loading, error, data }
  }