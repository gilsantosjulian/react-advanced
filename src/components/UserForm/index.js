import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Button, Error, Form, Input, Title } from './styles'

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ 
      email: email.value, 
      password: password.value 
    })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}> 
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' {...email}></Input>
        <Input disabled={disabled} placeholder='Password' {...password}></Input>
        <Button disabled={disabled} type='submit'>{title}</Button>
      </Form>
      { error && <Error>{error}</Error> }
    </>
  );
}
