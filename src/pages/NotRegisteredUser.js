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

  // const handleOnSubmit = () => dispatch(dispatchOpts)

  const handleOnSubmit = ({ email, password }) => {
    const input = { email, password }
    console.log({input});
    mutation({
      variables: { input }
    })
    .then(res => {
      dispatch(dispatchOpts)
    })
  }
  return (
    <>
      <UserForm onSubmit={handleOnSubmit} title='Registrarse' />
      <UserForm onSubmit={handleOnSubmit} title='Iniciar sesión' />
    </>
  );
}
