import React from 'react';
import { useStateValue } from '../state';
import { UserForm } from '../components/UserForm';

export const NotRegisteredUser = () => {
  const [{ isAuth }, dispatch] = useStateValue()
  const dispatchOpts = {
    type: 'authenticate',
    isAuth: true,
  }

  const handleOnSubmit = () => dispatch(dispatchOpts)
  return (
    <>
      <UserForm onSubmit={handleOnSubmit} title='Registrarse' />
      <UserForm onSubmit={handleOnSubmit} title='Iniciar sesión' />
    </>
  );
}
