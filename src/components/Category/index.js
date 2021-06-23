import PropTypes from 'prop-types';
import React from 'react'

import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({
  cover = DEFAULT_IMAGE,
  emoji = '?',
  path = '#',
}) => {

  return (
    <Link to={path}>
      <Image src={cover}/>
      {emoji}
    </Link>
  )
}

Category.propTypes = {
  cover: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

