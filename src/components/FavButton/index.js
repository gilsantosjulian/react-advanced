import PropTypes from 'prop-types';
import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import { Button } from './style'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return <Button onClick={() => onClick(!liked)} >
    <Icon size='24px' /> {likes} likes!
  </Button>
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}
