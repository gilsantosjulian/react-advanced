import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';

export const UserForm = ({ onSubmit }) => {
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
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}> 
        <Input placeholder='Email' {...email}></Input>
        <Input placeholder='Password' {...password}></Input>
        <Button type='submit'>{title}</Button>
      </Form>
    </>
  );
}
