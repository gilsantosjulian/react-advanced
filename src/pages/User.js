import React from 'react';
import { useStateValue } from '../state';
import { SubmitButton } from '../components/SubmitButton'

export const User = () => {
  const [{ isAuth }, dispatch] = useStateValue()
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={() => dispatch({ type: 'removeAuth' })}>Logout</SubmitButton>
    </>
  );
}
