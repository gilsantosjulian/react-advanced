import React from 'react';
import { useGetFavs } from '../hooks/useGetFavs'
import { ListOfFavs } from '../components/ListOfFavs'

export const Favs = () => {

  const { loading, error, data } = useGetFavs()

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>

  const { favs } = data

  return (
    <>
      <h1>Favs</h1>
      <ListOfFavs favs={favs} />
    </>
  );
}
