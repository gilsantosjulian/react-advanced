import React from 'react'
import { Img } from './styles'
import PropTypes from 'prop-types';

export const Image = ({ alt, src }) => {
  return (
    <Img src={src} alt={alt} />
  )
}

Image.propType = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
}
