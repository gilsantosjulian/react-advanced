import React from 'react';
import { useStateValue } from '../state';
import { UserForm } from '../components/UserForm';
import { useMutationRegister } from '../hooks/useRegisterMutation';

export const NotRegisteredUser = () => {
  const [{ isAuth }, dispatch] = useStateValue()
  const { mutation, mutationLoading, mutationError } = useMutationRegister()
  const dispatchOpts = {
    type: 'authenticate',
    isAuth: true,
  }

  const handleOnSubmit = async ({ email, password }) => {
    try {
      const input = { email, password }
      await mutation({ variables: { input } })
      dispatch(dispatchOpts)
    } catch (error) {
      console.error(error)
    }
  }

  const errorMsg = mutationError && 'El usuario ya existe o hay algún problema.'

  return (
    <>
      <UserForm onSubmit={handleOnSubmit} title='Registrarse' error={errorMsg} />
      <UserForm onSubmit={handleOnSubmit} title='Iniciar sesión' error={errorMsg} />
    </>
  );
}
