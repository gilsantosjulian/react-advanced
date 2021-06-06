import React from 'react';
import { Button } from './styles'
import PropTypes from 'prop-types';

export const SubmitButton = ({ children, disabled, onClick }) => {
  return <Button disabled={disabled } onClick={onClick} >{children}</Button>
}

SubmitButton.protoTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}
