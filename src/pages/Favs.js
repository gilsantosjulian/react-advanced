import React from 'react';
import { Helmet } from 'react-helmet'
import { useGetFavs } from '../hooks/useGetFavs'
import { Layout } from '../components/Layout'
import { ListOfFavs } from '../components/ListOfFavs'
import { META_FAVS_CONTENT, FAVS_TITLE } from '../constants';

export const Favs = () => {

  const { loading, error, data } = useGetFavs()

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>

  const { favs } = data

  return (
    <Layout title={FAVS_TITLE} subtitle={META_FAVS_CONTENT}>
      <ListOfFavs favs={favs} />
    </Layout>
  );
}
