import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './style'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  console.log('liked: ', liked);
  return <Button onClick={() => onClick(!liked)} >
    <Icon size='24px' /> {likes} likes!
  </Button>
}
