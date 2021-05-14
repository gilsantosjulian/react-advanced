import React, { useState } from 'react';
import { useInputValue } from '../../hooks/useInputValue';

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <form onSubmit={onSubmit}> 
      <input placeholder='Email' {...email} />
      <input placeholder='Password' {...password} />
      <button>Iniciar sesión</button>
    </form>
  );
}
