import PropTypes from 'prop-types';
import React from 'react'

import { Img } from './styles'

export const Image = ({ alt, src }) => {
  return (
    <Img src={src} alt={alt} />
  )
}

Image.propType = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
}
